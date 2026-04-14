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
