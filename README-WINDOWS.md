# Windows Setup

## Requirements

- Windows 11
- Docker Desktop using Linux containers

## Run

```powershell
.\start-windows.ps1
```

- Frontend: http://localhost:8080
- Backend API docs: http://localhost:8000/docs

The Windows compose file is self-contained and does not require the WSL
`myproject_default` Docker network.
