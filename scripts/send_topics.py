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
msg['Subject'] = "[Agent 0 - Planner] 목요일 신규 글로벌 핫이슈 큐레이션 (Stage 1 Approval 요청)"
msg['From'] = SMTP_USER
msg['To'] = "jowa131@gmail.com"

msg.set_content("""안녕하세요 콘텐츠 승인자님!

목요일 주간 큐레이션(Stage 1) 일정에 맞춰, 지난 월요일부터 수요일 사이의 전 세계 핫이슈 중 어린이들의 교육에 유익한 3가지 주제를 새롭게 선정했습니다.

1. 🚀 달나라 탐험대 출동! (NASA Artemis II Launch)
- 50년 만에 사람들이 직접 우주선을 타고 달 주변을 도는 '아르테미스 2호'가 발사되었어요! 우주비행사들이 어떤 모험을 하게 되는지 알아봅니다.

2. 🌿 바다 식물 미역으로 만든 마법의 플라스틱 (Seaweed Plastics)
- 환경 이슈로 떠오른 플라스틱 대신, 미역과 같은 해조류를 이용해 썩어서 흙으로 돌아가는 가짜 플라스틱을 만드는 신기한 기술을 배웁니다.

3. 🌤️ 날씨 요정이 된 인공지능 슈퍼컴퓨터 (AI Weather Forecast)
- 비가 올지 눈이 올지 미리 아주 정확하게 맞춰주는 AI 슈퍼컴퓨터의 활약상! 컴퓨터가 지구의 날씨를 어떻게 예측하는지 재미있게 알아봅니다.

위 3가지 중에서 진행하실 1가지를 승인해 주시면, 바로 이어서 스토리라인 기획(Stage 2) 및 개발/디자인 파이프라인으로 넘어가도록 하겠습니다!

활기찬 목요일 되세요.
- Agent 0 (기획 파트) 드림""")

try:
    print(f"Sending email to {msg['To']}...")
    with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
    print("Email sent successfully!")
except Exception as e:
    print(f"Failed to send email: {e}")
