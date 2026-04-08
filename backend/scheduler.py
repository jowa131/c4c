import os
import json
import smtplib
import logging
from email.message import EmailMessage
from datetime import datetime

import pytz
from google import genai
from google.genai import types
from apscheduler.schedulers.asyncio import AsyncIOScheduler

try:
    from dotenv import load_dotenv
    load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'), override=False)
except ImportError:
    pass  # dotenv not available; env vars injected by Docker

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

KST = pytz.timezone("Asia/Seoul")

# ─────────────────────────────────────────────
# 환경변수
# ─────────────────────────────────────────────
SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USER = os.environ.get("SMTP_USER")
SMTP_PASS = os.environ.get("SMTP_PASS")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "jowa131@gmail.com")


# ─────────────────────────────────────────────
# OpenAI 주제 생성
# ─────────────────────────────────────────────
def generate_topics() -> list[dict]:
    """Gemini API로 현재 날짜 기준 3개 교육 주제 생성."""
    if not GEMINI_API_KEY:
        logger.warning("GEMINI_API_KEY가 설정되지 않아 fallback 메시지로 대체합니다.")
        return _fallback_topics()

    try:
        client = genai.Client(api_key=GEMINI_API_KEY)

        today = datetime.now(KST)
        weekday = today.weekday()  # 0=Mon, 3=Thu
        day_name = "월요일" if weekday == 0 else "목요일"
        today_str = today.strftime("%Y년 %m월 %d일")
        period = "지난 목요일부터 일요일 사이" if weekday == 0 else "이번 주 월요일부터 수요일 사이"

        prompt = f"""오늘은 {today_str} {day_name}입니다.
당신은 C4C(어린이 글로벌 그림카드) 서비스의 컨텐츠 에이전트입니다.
{period}의 전 세계 글로벌 이슈 중, 5~8세 어린이 교육에 유익한 주제 3가지를 선정하세요.

반드시 아래 JSON 형식만 출력하세요 (다른 텍스트 없이):
{{
  "topics": [
    {{
      "title": "이모지 포함 한국어 제목 (예: 🚀 달나라 탐험대 출동!)",
      "event": "영문 원본 이슈명",
      "description": "어린이 눈높이의 2~3문장 설명 (한국어, 다정한 구어체)",
      "vocabulary": ["추천 영어 단어1", "추천 영어 단어2"]
    }}
  ]
}}

조건:
- 군사, 정치 갈등, 폭력 주제 절대 제외
- 과학, 환경, 경제, 문화, 기술 분야 우선
- 교육적 가치가 분명한 주제만 선정"""

        response = client.models.generate_content(
            model="models/gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                temperature=0.7,
            ),
        )
        data = json.loads(response.text)
        topics = data.get("topics", [])
        logger.info(f"✅ Gemini에서 {len(topics)}개 주제 생성 완료")
        return topics

    except Exception as e:
        logger.error(f"❌ Gemini API 오류: {e}")
        return _fallback_topics()


def _fallback_topics() -> list[dict]:
    return [
        {
            "title": "⚠️ 컨텐츠 자동 생성 실패",
            "event": "Content generation failed",
            "description": ".env 파일의 OPENAI_API_KEY를 실제 키로 교체하고 Docker를 재빌드해 주세요.",
            "vocabulary": ["API", "KEY"],
        }
    ]


# ─────────────────────────────────────────────
# 이메일 발송
# ─────────────────────────────────────────────
def send_email(topics: list[dict]) -> None:
    """Gmail SMTP SSL로 Stage 1 Approval 이메일 발송."""
    if not SMTP_USER or not SMTP_PASS:
        logger.error("SMTP 인증 정보(SMTP_USER/SMTP_PASS)가 없습니다. 이메일 발송 취소.")
        return

    today = datetime.now(KST)
    weekday = today.weekday()
    day_name = "월요일" if weekday == 0 else "목요일"
    date_str = today.strftime("%Y년 %m월 %d일")

    # 본문 조립
    lines = [
        f"안녕하세요 콘텐츠 승인자님!\n",
        f"{date_str} {day_name} 주간 큐레이션(Stage 1) 일정에 맞춰,",
        f"전 세계 핫이슈 중 어린이 교육에 유익한 {len(topics)}가지 주제를 선정했습니다.\n",
    ]

    for i, t in enumerate(topics, 1):
        vocab_str = ", ".join(t.get("vocabulary", []))
        lines.append(f"{i}. {t.get('title', '제목 없음')} ({t.get('event', '')})")
        lines.append(f"   {t.get('description', '')}")
        lines.append(f"   📚 추천 단어: {vocab_str}\n")

    lines += [
        "위 주제 중 진행하실 1가지를 승인해 주시면,",
        "스토리라인 기획(Stage 2) 및 개발/디자인 파이프라인으로 진행하겠습니다!\n",
        f"활기찬 {day_name} 되세요.",
        "- Content Agent (자동 발송 🤖)",
    ]

    msg = EmailMessage()
    msg["Subject"] = (
        f"[Content Agent] {date_str} {day_name} 글로벌 핫이슈 큐레이션 "
        f"(Stage 1 Approval 요청)"
    )
    msg["From"] = SMTP_USER
    msg["To"] = RECIPIENT_EMAIL
    msg.set_content("\n".join(lines))

    try:
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
        logger.info(f"✅ 이메일 발송 완료 → {RECIPIENT_EMAIL}")
    except Exception as e:
        logger.error(f"❌ 이메일 발송 실패: {e}")


# ─────────────────────────────────────────────
# 에이전트 실행 진입점
# ─────────────────────────────────────────────
def run_content_agent() -> None:
    """컨텐츠 에이전트 전체 파이프라인 실행 (동기)."""
    logger.info("🤖 Content Agent 시작 — 주제 생성 중...")
    topics = generate_topics()
    send_email(topics)
    logger.info("🤖 Content Agent 완료.")


# ─────────────────────────────────────────────
# 스케줄러 팩토리
# ─────────────────────────────────────────────
def create_scheduler() -> AsyncIOScheduler:
    """매주 월요일·목요일 09:00 KST에 실행되는 스케줄러를 생성하여 반환."""
    scheduler = AsyncIOScheduler(timezone=KST)
    scheduler.add_job(
        run_content_agent,
        trigger="cron",
        day_of_week="mon,thu",
        hour=9,
        minute=0,
        id="content_agent_weekly",
        name="Content Agent — Weekly Curation",
        replace_existing=True,
    )
    logger.info("📅 Content Agent 스케줄 등록 완료: 매주 월/목 09:00 KST")
    return scheduler
