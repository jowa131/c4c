# C4C — Agent Context

Read `~/projects/.antigravityrules` for common agent roles and global workflow.
Read `.antigravityrules` in this directory for C4C-specific agent roles and content pipeline rules.
Read `SKILL.md` for tech stack, API endpoints, environment variables, and directory structure.

---

# Service Architecture

- Frontend (`c4c-frontend`): Vanilla HTML/CSS/JS served by Nginx (Alpine). No build step — static files COPYed into the container at `/usr/share/nginx/html/`.
- Backend (`c4c-backend`): FastAPI (Python 3.10) on port 8000, exposing `/api/*`.
- Both containers share the `myproject_default` external Docker network.
- Frontend Nginx proxies `/api/*` to `c4c-backend:8000` — do not expose backend port to host in production.
- Frontend source lives in `frontend/`. `Dockerfile.frontend` build context is the project root (`.`).

# Deployment Notes

- Frontend change: `docker compose up -d --build frontend` (bind mount disabled — WSL2 tmpfs bug).
- Backend change: `docker compose restart backend` or rebuild.
- After any change: verify with `docker compose ps`.
- `index.html` cache header: `Cache-Control: no-cache, no-store, must-revalidate` (set in `nginx.conf`; do not remove).
- Static assets: cache-bust with `?v=X.X` query string. Increment version on every frontend edit.
