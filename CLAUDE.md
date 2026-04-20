# Environment Context

This environment runs on WSL (Windows Subsystem for Linux) and all web services are operated as Docker containers.

## Infrastructure

Inbound traffic is routed through `~/infra/nginx_proxy` before reaching individual services. When binding ports for a new project, ensure there are no conflicts with the Nginx configuration.

- **Nginx Proxy**: `~/infra/nginx_proxy` — handles all inbound HTTP traffic on port 80
- **WordPress**: `~/infra/wordpress` — served at `/wordpress` path
- **Data volumes**: `~/infra/data/wordpress_data`

## C4C Service Architecture

- **Frontend** (`c4c-frontend`): Vanilla HTML/CSS/JS served by Nginx (Alpine). No build step — static files are COPYed directly into the container at `/usr/share/nginx/html/`.
- **Backend** (`c4c-backend`): FastAPI (Python 3.10) exposing `/api/*` endpoints on port 8000.
- Both containers share the `myproject_default` external Docker network, which connects them to the Nginx reverse proxy.
- The frontend's internal Nginx proxies `/api/*` requests to `c4c-backend:8000` — do not expose the backend port to the host in production.

## Port & Network Rules

- Do **not** bind port 80 directly; the Nginx proxy at `~/infra/nginx_proxy` owns port 80.
- The `myproject_default` external Docker network must remain declared in `docker-compose.yml`.
- New services must register a unique port and a corresponding upstream block in the Nginx proxy config before going live.

## Frontend Source Location

Frontend source files (`index.html`, `styles.css`, `script.js`) live in `frontend/`. The `Dockerfile.frontend` build context is the project root (`.`), so all `COPY` paths are relative to the root.

## Reference

For project-specific tech stack, libraries, and objectives, refer to `SKILL.md`.

## Development Workflow & Execution Rules

1. **Hot-Reloading & Sync**:
   - 프론트엔드 파일(`frontend/`) 수정 시, `docker-compose.yml`의 볼륨 마운트를 통해 즉시 반영되도록 관리한다.
   - 볼륨 마운트: `./frontend` → `/usr/share/nginx/html`, `./assets` → `/usr/share/nginx/html/assets`
   - 만약 볼륨 마운트가 작동하지 않거나 환경 설정 파일(Dockerfile 등)을 수정했을 경우, 반드시 `docker compose up -d --build frontend` 명령을 실행하여 컨테이너를 갱신해야 한다.

2. **Backend Updates**:
   - 백엔드(`c4c-backend`) 소스 수정 후에는 반드시 `docker compose restart backend` 또는 재빌드 명령을 통해 변경 사항을 적용한다.

3. **Verification**:
   - 모든 수정 작업 후에는 반드시 터미널에서 `docker compose ps`를 통해 컨테이너 상태를 확인하고, 사용자에게 변경 사항이 적용되었음을 알린다.

4. **Browser Cache Policy**:
   - `index.html`은 반드시 `Cache-Control: no-cache, no-store, must-revalidate` 헤더를 응답에 포함해야 한다.
   - 이는 `nginx.conf`의 `location = /index.html` 블록에서 설정하며, 절대 제거하지 않는다.
   - `script.js`, `styles.css` 등 정적 자산은 `?v=X.X` 쿼리스트링으로 캐시 버스팅을 적용한다.
   - 프론트엔드 코드 수정 시 `index.html`의 `script.js?v=X.X` 버전을 반드시 올려야 한다.
