# Stack

## Frontend (`fest-app/`)

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React Native + Expo | SDK 54 |
| Language | TypeScript | strict |
| State | Zustand | 7 stores |
| Navigation | React Navigation 7 | bottom tabs + native stack |
| Build | Metro bundler (Expo) | — |
| Package manager | npm | `--legacy-peer-deps` required |

## Backend (`backend-spring/`)

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Spring Boot | 3.x |
| Language | Java | 21 |
| Database | PostgreSQL | 17 |
| Migrations | Flyway | auto on startup |
| Build | Gradle | wrapper committed |
| WebSocket | Spring WebSocket (raw handler) | custom JSON protocol |

## Infrastructure

| Component | Details |
|-----------|---------|
| CI | GitHub Actions (`.github/workflows/ci.yml`) |
| DB (dev/Windows) | Native PostgreSQL service `postgresql-x64-17` |
| DB (dev/Linux) | Docker `postgres:17` |
| Mobile testing | Expo Go + tunnel |

## Archived

| Component | Path | Notes |
|-----------|------|-------|
| Legacy Fastify backend | `backend/` | Read-only reference, do not modify |
