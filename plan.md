# C4C — Development Plan

## Completed Milestones

- [x] Phase 1: Frontend (Vanilla HTML/CSS/JS) + Nginx (Alpine) Docker setup
- [x] Phase 2: FastAPI backend with TTS (`edge-tts`), analytics, visitor counter, feedback endpoints
- [x] Phase 3: Gemini 2.5 Flash content agent pipeline (RSS fetch → topic generation → email)
- [x] Phase 4: Two-Stage content pipeline (Stage 1 email approval → Stage 2 UI deployment)
- [x] Phase 5: GitHub Issue-based multi-agent logging workflow
- [x] Phase 6: Automatic scheduler disabled; manual trigger via `/api/content-agent/trigger`

## Backlog / Future Work

- [ ] Migrate frontend from Vanilla JS to Next.js + Tailwind CSS
- [ ] Move image assets from `assets/` to `/public/assets`
- [ ] Add image style reference enforcement via Gemini Vision (auto-detect style drift)
- [ ] Analytics dashboard — visualize `analytics.jsonl` data
- [ ] Multi-language support (expand beyond Korean/English)
- [ ] Progressive Web App (PWA) packaging for offline/installable use
