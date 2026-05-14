# Планы? / FEST — Project Context

## Overview

Mobile-first social event discovery and planning app. Users discover events, create shared plans with friends, coordinate via proposals/voting/chat, and finalize meetups.

## Tech Stack

- **Frontend**: React Native + Expo SDK 54 + TypeScript + Zustand
- **Backend (canonical)**: Spring Boot 3.x + Java 21 + PostgreSQL 17 + Flyway
- **Backend (archived)**: Fastify in `backend/` — legacy, do not modify
- **Navigation**: React Navigation 7 (bottom tabs + native stack)
- **Realtime**: WebSocket (custom JSON protocol, not STOMP)

## Prerequisites

- Java 21
- Node.js 22.x
- PostgreSQL 17
- Expo Go (mobile testing)

## Repo Layout

- `fest-app/` — frontend (Expo React Native)
- `backend-spring/` — canonical Spring Boot API
- `backend/` — archived legacy Fastify (read-only reference)
- `contracts/` — OpenAPI + DB schema + acceptance docs
- `docs/` — status, handoff, runbooks
- `wiki/` — LLM-maintained knowledge base

## Key Commands

| Action | Command | Workdir |
|--------|---------|---------|
| Start backend | `PORT=3001 ./gradlew bootRun` | `backend-spring/` |
| Frontend dev (web) | `npx expo start --web` | `fest-app/` |
| Frontend typecheck | `npx tsc --noEmit` | `fest-app/` |
| Spring tests | `./gradlew test` | `backend-spring/` |
| Full smoke | `./gradlew fullSpringSmokeTest` | `backend-spring/` |
| Install frontend | `npm install --legacy-peer-deps` | `fest-app/` |

## Windows Dev Box Notes

- Disk C is full — redirect npm cache: `$env:npm_config_cache="E:\npm-cache"`
- Always use `--legacy-peer-deps` (Expo SDK 54 peer conflicts)
- PostgreSQL runs as native service `postgresql-x64-17`

## Product Constraints

- Russian UI only
- No features beyond MVP scope
- Plan is `active` on creation (no draft state)
- Max 15 participants per plan
- Chat lives inside PlanDetails only
- All notifications created server-side
- OTP mock code: `1111` (dev only)

## Architecture Rules

- Backend is source of truth for all mutations
- Frontend is thin API consumer (optimistic UI for votes only)
- REST is source of truth; WebSocket is push-only
- `camelize()` converts snake_case API → camelCase frontend
- All new backend work goes to `backend-spring/`, never `backend/`
- `docs/ProductPlan.md` is canonical product spec
