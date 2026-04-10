import os
import json
import smtplib
import logging
from email.message import EmailMessage
from email.utils import parsedate_to_datetime
from datetime import datetime
import urllib.request
import xml.etree.ElementTree as ET

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
def fetch_filtered_rss_news(today: datetime) -> str:
    # URL을 일반 Top News에서 7일간의 World News 검색으로 변경하여 과거 일자별 기사 풀을 충분히 확보
    url = "https://news.google.com/rss/search?q=world+news+when:7d&hl=en-US&gl=US&ceid=US:en"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            xml_data = response.read()
        root = ET.fromstring(xml_data)
        
        valid_weekdays = [3, 4, 5, 6] if today.weekday() == 0 else [0, 1, 2]
        
        news_items = []
        for item in root.findall('./channel/item'):
            title = item.find('title').text
            link = item.find('link').text
            pubDate_str = item.find('pubDate').text
            if not pubDate_str:
                continue
                
            pubDate = parsedate_to_datetime(pubDate_str).astimezone(KST)
            
            if pubDate.weekday() in valid_weekdays and pubDate.date() < today.date():
                news_items.append(f"- [보도일: {pubDate.strftime('%Y-%m-%d')}] 제목: {title}\n  링크: {link}")
            
            if len(news_items) >= 20:
                break
                
        return "\n".join(news_items)
    except Exception as e:
        logger.error(f"RSS 피드 가져오기 실패: {e}")
        return ""

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

        news_context = fetch_filtered_rss_news(today)
        
        prompt = f"""오늘은 {today_str} {day_name}입니다.
당신은 C4C(어린이 글로벌 그림카드) 서비스의 컨텐츠 에이전트입니다.
반드시 아래 [수집된 실제 글로벌 뉴스 목록] ({period} 보도됨) 중에서, 5~8세 어린이 교육에 유익한 뉴스 주제 3가지를 선정하세요.

[수집된 실제 글로벌 뉴스 목록]
{news_context if news_context else "(시스템 오류: 뉴스 피드를 불러오지 못했습니다. 최근 일주일 내 실제 뉴스로 3가지를 자체 탐색하세요.)"}

[대원칙 (CRITICAL PREMISE)]
절대 기사나 출처를 임의로 상상해서 지어내지 마세요. 어떠한 경우에도 100% 제공된 실제 뉴스 목록에 실존하는 사실, 날짜, 출처, 링크 정보만을 정확히 그대로 사용해야 합니다. (No Hallucination)

[중요 조건]
1. 다양성 보장 (가장 중요): 선정하는 3가지 뉴스는 서로 완전히 독립된 3개의 다른 분야(예: 1번은 기술, 2번은 환경, 3번은 문화)에서 확연히 다르게 하나씩 선별해야 합니다. 절대로 두 개 이상의 뉴스가 비슷한 분야이거나 동일한 주제(예: 모두 환경/보건 관련)로 겹치지 않게 하세요.
2. 일반적이고 추상적인 상식을 지어내지 마세요. 제공된 통신사 뉴스 목록에서 가장 알맞은 실제 보도 이벤트를 고르세요.
3. 이를 증명할 수 있는 에비던스(출처 기사 제목 및 작성 언론사/매체명)와 원본 URL 링크를 제공된 뉴스 목록에서 확인하여 정확히 그대로 포함하세요.
4. 군사, 정치 갈등, 폭력 주제 절대 제외
5. 과학, 환경, 경제, 문화, 기술 분야 우선

반드시 아래 JSON 형식만 출력하세요 (다른 텍스트 없이):
{{
  "topics": [
    {{
      "category": "이 기사의 명확한 분야 (예: 우주 과학, 경제, 문화 트렌드 등)",
      "title": "이모지 포함 한국어 제목 (예: 🚀 달나라 탐험대 출동!)",
      "event": "영문 원본 이슈명",
      "description": "어린이 눈높이의 2~3문장 설명 (한국어, 다정한 구어체)",
      "vocabulary": ["추천 영어 단어1", "추천 영어 단어2"],
      "evidence": "출처 매체명 및 기사 제목",
      "date": "기사 보도일자 (예: 2026-04-06)",
      "url": "해당 기사의 실제 URL 원본 링크"
    }}
  ]
}}"""

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
            "category": "시스템",
            "title": "⚠️ 컨텐츠 자동 생성 실패",
            "event": "Content generation failed",
            "description": ".env 파일의 GEMINI_API_KEY를 확인하고 Docker를 재빌드해 주세요.",
            "vocabulary": ["API", "KEY"],
            "evidence": "System Alert",
            "date": "",
            "url": ""
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

    # 본문 조립 (HTML)
    html_lines = [
        "<div style='font-family: sans-serif; color: #333; line-height: 1.6;'>",
        f"<p>안녕하세요 콘텐츠 승인자님!</p>",
        f"<p><b>{date_str} {day_name}</b> 주간 큐레이션(Stage 1) 일정에 맞춰,<br>",
        f"전 세계 핫이슈 중 어린이 교육에 유익한 <b>{len(topics)}가지 다양한 분야의 주제</b>를 선정했습니다.</p>",
        "<hr style='border:1px solid #eee; margin:20px 0;'>",
    ]

    for i, t in enumerate(topics, 1):
        vocab_str = ", ".join(t.get("vocabulary", []))
        html_lines.append(f"<div style='margin-bottom: 25px;'>")
        html_lines.append(f"<h3 style='color: #2c3e50; margin-bottom: 5px;'>{i}. [{t.get('category', '분야 미상')}] {t.get('title', '제목 없음')}</h3>")
        html_lines.append(f"<div style='color: #7f8c8d; font-size: 0.9em; margin-bottom: 10px;'>({t.get('event', '')})</div>")
        html_lines.append(f"<p>{t.get('description', '')}</p>")
        html_lines.append("<ul style='padding-left: 20px;'>")
        html_lines.append(f"<li>📚 <b>추천 단어:</b> {vocab_str}</li>")
        html_lines.append(f"<li>📰 <b>출처:</b> {t.get('evidence', '출처 미상')} (보도일: {t.get('date', '날짜 미상')})</li>")
        
        url_val = t.get('url', '#')
        url_href = url_val if url_val.startswith('http') else '#'
        html_lines.append(f"<li>🔗 <b>링크:</b> <a href='{url_href}' style='color: #3498db; text-decoration: none;'>[기사 원문 읽기]</a></li>")
        html_lines.append("</ul></div>")

    html_lines += [
        "<hr style='border:1px solid #eee; margin:20px 0;'>",
        "<p>위 주제 중 진행하실 1가지를 승인해 주시면,<br>",
        "스토리라인 기획(Stage 2) 및 개발/디자인 파이프라인으로 진행하겠습니다!</p>",
        f"<p>활기찬 {day_name} 되세요.<br>",
        "<b>- Content Agent (자동 발송 🤖)</b></p>",
        "</div>"
    ]

    msg = EmailMessage()
    msg["Subject"] = (
        f"[Content Agent] {date_str} {day_name} 글로벌 핫이슈 큐레이션 "
        f"(Stage 1 Approval 요청)"
    )
    msg["From"] = SMTP_USER
    msg["To"] = RECIPIENT_EMAIL
    
    # 텍스트 버전 대체, HTML 버전 삽입
    msg.set_content("HTML 브라우저 환경에서 열어주세요.")
    msg.add_alternative("\n".join(html_lines), subtype='html')

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
        misfire_grace_time=None,
    )
    logger.info("📅 Content Agent 스케줄 등록 완료: 매주 월/목 09:00 KST")
    return scheduler
