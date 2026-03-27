# AGENT_LOG.md (Agent Activity Audit Trail)

- [2026-03-27 22:05:45] [리뷰 에이전트] [Task] 신규 .antigravityrules 기반 프로젝트 전수 스캔 및 최초 로깅 추적 시스템(AGENT_LOG.md) 이니셜라이징 완료.
- [2026-03-27 22:05:45] [리뷰 에이전트] [Bug] 룰 위반 발견 1: 최근 `git commit` 메시지가 영문으로 작성됨. (신규 룰 2항: 한글 커밋 및 [에이전트 이름] 접두어 필수 원칙 위반 확인 - 이후 작업부터 즉시 시정 예정)
- [2026-03-27 22:05:45] [리뷰 에이전트] [Feature] 룰 위반 발견 2: 기술 스택 및 디렉터리 구조 불일치. 현재 프로젝트는 Vanilla HTML/CSS/JS 기반이며 에셋 폴더가 `assets/`로 루트에 존재함. (신규 룰: 가급적 Next.js + Tailwind CSS 사용 및 이미지 경로는 `/public/assets` 사용 권장 - 향후 마이그레이션 기획 필요)
- [2026-03-27 22:21:00] [리뷰 에이전트] [Task] 신규 룰 적용 후 전수 스캔 실시. 보안 룰(.env 등 ignore 세팅)과 개발 룰(TTS 대응/iOS 오디오 해제, clamp/aspect-ratio 반응형)은 모두 코드에 정상 반영되어 있음을 수동 검증 완료. 이미지 저장 경로(`/public/assets`) 룰은 아직 반영 안 된 상태임을 재확인.
