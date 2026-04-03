import re
import json
from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import edge_tts

app = FastAPI()

# 프론트엔드(80) 요청을 허용 (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.post("/api/log")
async def receive_log(request: Request):
    try:
        data = await request.json()
        with open("analytics.jsonl", "a", encoding="utf-8") as f:
            f.write(json.dumps(data, ensure_ascii=False) + "\\n")
        return {"status": "ok"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
