import os
import smtplib
from email.message import EmailMessage

def load_env():
    if not os.path.exists('.env'):
        return
        
    try:
        with open('.env', 'r', encoding='utf-16le') as f:
            content = f.read()
    except UnicodeDecodeError:
        try:
            with open('.env', 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeError:
            with open('.env', 'r', encoding='utf-8-sig') as f:
                content = f.read()
                
    for line in content.splitlines():
        if '=' in line and not line.strip().startswith('#'):
            k, v = line.strip().split('=', 1)
            os.environ[k.strip()] = v.strip().strip('"').strip("'")

load_env()

SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USER = os.environ.get("SMTP_USER")
SMTP_PASS = os.environ.get("SMTP_PASS")

if not SMTP_USER or not SMTP_PASS:
    print("Error: SMTP_USER and SMTP_PASS are missing from .env")
    exit(1)

msg = EmailMessage()
msg['Subject'] = "[Agent 0 - Planner] 월요일 신규 글로벌 핫이슈 큐레이션 (Stage 1 Approval 요청)"
msg['From'] = SMTP_USER
msg['To'] = "jowa131@gmail.com"

msg.set_content("""안녕하세요 콘텐츠 승인자님!

월요일 주간 큐레이션(Stage 1) 일정에 맞춰, 전 세계 핫이슈 중 어린이들의 교육에 유익한 3가지 주제를 선정했습니다.

1. 💧 소중한 물방울 보호 작전 (Global Water Shortage)
- 최근 전 세계적으로 이슈가 되고 있는 가뭄과 물 부족 문제를 다룹니다. 물이 부족해지면 동물 친구들과 우리에게 어떤 일이 생기는지 알아보고 생활 속 절약 습관을 배웁니다.

2. 🤖 똑똑한 로봇 의사 선생님 (AI Robots Helping Doctors)
- 병원에서 사람들을 돕는 구조/의료 로봇 기술의 발전. 인공지능이 어떻게 사람을 치료하고 돕는지 따뜻한 시선으로 소개합니다.

3. ♻️ 바다의 먹보 팩맨 통통이 (Ocean Plastic Cleanup)
- 조류와 거대한 튜브를 이용해 바다 쓰레기를 모으는 최신 해양 정화 프로젝트 모티브. 바다를 청소하는 신기한 아이디어를 재미있게 설명합니다.

위 3가지 중에서 진행하실 1가지를 승인해 주시면, 바로 이어서 스토리라인 기획(Stage 2) 및 개발/디자인 파이프라인으로 넘어가도록 하겠습니다!

건강한 한 주 되세요.
- Agent 0 (기획 파트) 드림""")

try:
    print(f"Sending email to {msg['To']}...")
    with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
    print("Email sent successfully!")
except Exception as e:
    print(f"Failed to send email: {e}")
