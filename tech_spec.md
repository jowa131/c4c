# Technical Specification — C4C (Cards for Children)

## Project Overview

- Service: C4C — 어린이 글로벌 시사 카드 서비스
- Goal: 실제 뉴스 기반 교육 콘텐츠를 5~8세 어린이에게 삽화 카드 형태로 제공. AI 파이프라인이 콘텐츠를 생성하고 사람이 승인하는 2단계 구조.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5 / CSS3 / JavaScript (ES6+) |
| Frontend Server | Nginx (Alpine Docker image) |
| Backend | FastAPI 0.115 (Python 3.10-slim) |
| ASGI Server | Uvicorn |
| TTS | Microsoft Edge TTS (`edge-tts`) |
| Content AI | Google Gemini 2.5 Flash (`google-genai`) |
| Scheduler | APScheduler 3.x (AsyncIOScheduler) |
| Email | Gmail SMTP SSL (smtplib) |
| Containerization | Docker Compose v3.9 |
| Network | `myproject_default` external Docker network |

---

## System Architecture

```
[User Browser]
      |
[~/infra/nginx_proxy :80]
      |
[c4c-frontend :Nginx]   ← static HTML/CSS/JS
      | /api/*
[c4c-backend :8000]     ← FastAPI
      |
      ├── Edge TTS (streaming audio)
      ├── Gemini 2.5 Flash (content generation)
      ├── Gmail SMTP (stage 1 approval email)
      └── analytics.jsonl (Docker volume)
```

---

## Directory Structure

```
C4C/
├── CLAUDE.md
├── SKILL.md
├── tech_spec.md
├── plan.md
├── .antigravityrules
├── requirements.md          ← current content planning doc
├── docker-compose.yml
├── Dockerfile.frontend      ← Nginx static server (build context: project root)
├── nginx.conf               ← Frontend Nginx config (proxies /api/* to backend)
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── assets/                  ← Card image assets (PNG, per-topic sets)
├── backend/
│   ├── Dockerfile
│   ├── main.py              ← FastAPI app
│   ├── scheduler.py         ← Content Agent pipeline
│   └── requirements.txt
├── scripts/
│   └── send_topics.py
└── docs/
    └── style_reference.png
```

---

## Operating Environment

- Host OS: Windows 11 + WSL2 (Ubuntu)
- Container runtime: Docker Desktop (WSL2 backend)
- Bind mount disabled — WSL2 tmpfs bug. Static files are COPYed into the image at build time.
- Reverse proxy: `~/infra/nginx_proxy` owns port 80. C4C frontend uses a unique upstream port.

---

## Key Constraints

- Port 80 is owned by nginx_proxy. Never bind directly.
- Frontend's `index.html` must serve with `Cache-Control: no-cache, no-store, must-revalidate`.
- Static assets use `?v=X.X` cache busting. Increment on every frontend edit.
- TTS voices: `ko-KR-SunHiNeural` at `-10%` rate (Korean), `en-US-AriaNeural` at `-5%` (English).
- `.env` must never be committed (contains `SMTP_PASS`, `GEMINI_API_KEY`).

---

## Environment Variables

| Key | Description |
|---|---|
| `SMTP_USER` | Gmail sender address |
| `SMTP_PASS` | Gmail App Password |
| `SMTP_SERVER` | SMTP host (default: `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (default: `465`) |
| `GEMINI_API_KEY` | Google Gemini API key |
| `RECIPIENT_EMAIL` | Stage 1 approval email recipient |
