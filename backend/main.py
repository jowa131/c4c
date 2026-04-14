import re
import json
import asyncio
import os
import time
import smtplib
import threading
from email.mime.text import MIMEText
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Query, Request, Body
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import edge_tts

from scheduler import create_scheduler, run_content_agent

# ─────────────────────────────────────────────
# 데이터 파일 경로 (Named Volume 마운트 디렉토리)
# ─────────────────────────────────────────────
DATA_DIR = os.path.join(os.path.dirname(__file__), "appdata")
os.makedirs(DATA_DIR, exist_ok=True)

ANALYTICS_PATH  = os.path.join(DATA_DIR, "analytics.jsonl")
VISITORS_PATH   = os.path.join(DATA_DIR, "visitors.json")
FEEDBACKS_PATH  = os.path.join(DATA_DIR, "feedbacks.json")

# ─────────────────────────────────────────────
# 앱 Lifespan — 스케줄러 시작/종료
# ─────────────────────────────────────────────
scheduler = create_scheduler()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # 매일 아침 9시 예약 (timezone은 Asia/Seoul 이거나 기본 서버 시간)
    scheduler.add_job(send_daily_feedbacks, 'cron', hour=9, minute=0, timezone='Asia/Seoul')
    scheduler.start()
    yield
    scheduler.shutdown()

app = FastAPI(lifespan=lifespan)

# 프론트엔드(80) 요청을 허용 (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─────────────────────────────────────────────
# TTS
# ─────────────────────────────────────────────
def preprocess_text_for_kids(text: str) -> str:
    """7세 아동에 맞춘 다정하고 부드러운 구어체 및 쉼표 휴지기 처리"""
    text = re.sub(r'([가-힣])(합니다|\.입니다)([ \.\!\?])', r'\1해요\3', text)
    text = re.sub(r'([가-힣])(습니다)([ \.\!\?])', r'\1어요\3', text)
    text = text.replace("!", "! ")
    text = text.replace("?", "? ")
    text = text.replace(".", ". ")
    return text

@app.get("/api/tts")
async def generate_tts(text: str = Query(...), lang: str = Query("ko-KR")):
    if not text.strip():
        raise HTTPException(status_code=400, detail="Text is empty")

    processed_text = text
    # 마이크로소프트의 자연스럽고 다정한 한국어 여성 목소리 설정
    voice = "ko-KR-SunHiNeural"
    # 아이들이 알아듣기 쉽게 약간 느리게 설정 (-10%)
    rate = "-10%"

    if lang == "ko-KR":
        processed_text = preprocess_text_for_kids(text)
    else:
        # 영문의 경우 알파벳 철자로 하나씩 스펠링을 읽는 현상 방지하기 위해 강제 소문자
        processed_text = text.lower()
        voice = "en-US-AriaNeural"
        rate = "-5%"

    try:
        async def iterfile():
            communicate = edge_tts.Communicate(processed_text, voice, rate=rate)
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    yield chunk["data"]

        return StreamingResponse(iterfile(), media_type="audio/mpeg")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ─────────────────────────────────────────────
# 유저 로그 수집
# ─────────────────────────────────────────────
@app.post("/api/log")
async def receive_log(request: Request):
    try:
        data = await request.json()
        with open(ANALYTICS_PATH, "a", encoding="utf-8") as f:
            f.write(json.dumps(data, ensure_ascii=False) + "\n")
        return {"status": "ok"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# ─────────────────────────────────────────────
# Visitor tracking & Feedback Ported from Jjinmat
# ─────────────────────────────────────────────
_file_data_lock = threading.Lock()

def get_visitor_count(increment=False):
    file_path = VISITORS_PATH
    with _file_data_lock:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
            except:
                data = {"count": 0}
        else:
            data = {"count": 0}
        if increment:
            data["count"] += 1
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f)
            except:
                pass
        return data["count"]

@app.get("/api/visitor_count")
async def api_visitor_count():
    try:
        count = await asyncio.to_thread(get_visitor_count, increment=True)
        return {"count": count}
    except Exception as e:
        return {"count": 0}


def send_daily_feedbacks():
    file_path = FEEDBACKS_PATH
    feedbacks = []
    
    with _file_data_lock:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    feedbacks = json.load(f)
            except:
                pass
        
        if not feedbacks:
            return
            
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump([], f)
        except:
            pass

    sender = os.environ.get('SMTP_USER', 'jowa131@gmail.com')
    receiver = 'jowa131@gmail.com'
    # C4C 에서는 SMTP_PASS 라는 환경변수를 사용
    password = os.environ.get('SMTP_PASS', '')

    if not password:
        return

    subject = f"[어린이 글로벌 그림카드 C4C] 일일 방문자 피드백 리포트 ({time.strftime('%Y-%m-%d')})"
    body = f"총 {len(feedbacks)}건의 사용자 의견이 접수되었습니다.\n\n"
    for fb in feedbacks:
        body += f"[{fb.get('time')}] IP: {fb.get('ip')}\n내용: {fb.get('content')}\n---\n"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = receiver

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender, password)
            server.sendmail(sender, receiver, msg.as_string())
    except Exception as e:
        pass

@app.post("/api/feedback")
async def api_feedback(request: Request):
    try:
        body_data = await request.json()
        content = body_data.get("content", "")
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid JSON body")
        
    if not str(content).strip():
        raise HTTPException(status_code=400, detail="Content is empty")

    file_path = FEEDBACKS_PATH
    timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
    client_ip = request.headers.get('X-Forwarded-For', request.client.host if request.client else 'unknown')

    with _file_data_lock:
        feedbacks = []
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    feedbacks = json.load(f)
            except:
                pass
        feedbacks.append({
            "time": timestamp, 
            "content": content, 
            "ip": client_ip
        })
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(feedbacks, f, ensure_ascii=False, indent=2)
        except:
            pass

    # threading.Thread(target=send_feedback_email, args=(content, client_ip)).start()
    return {"status": "success"}


# ─────────────────────────────────────────────
# Content Agent 수동 트리거 (테스트용)
# ─────────────────────────────────────────────
@app.post("/api/content-agent/trigger")
async def trigger_content_agent():
    """Content Agent를 즉시 실행합니다 (테스트/수동 발송용)."""
    try:
        await asyncio.to_thread(run_content_agent)
        return {"status": "ok", "message": "Content Agent 실행 완료. 이메일을 확인하세요."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/content-agent/pending-topics")
async def get_pending_topics():
    """가장 최근에 생성된 주제 목록을 반환합니다."""
    from scheduler import PENDING_TOPICS_PATH
    if not os.path.exists(PENDING_TOPICS_PATH):
        raise HTTPException(status_code=404, detail="생성된 주제가 없습니다. Content Agent를 먼저 실행해주세요.")
    try:
        with open(PENDING_TOPICS_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
