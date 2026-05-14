---
type: concept
summary: Текущий архитектурный контекст: Spring Boot в backend-spring является canonical backend; Fastify в backend только архивный legacy
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# Technical Architecture

[[Plans]] сейчас использует frontend на React Native / Expo и canonical backend на Spring Boot + PostgreSQL в `backend-spring/`. Fastify в `backend/` - старый backend, который нужно считать только архивным legacy.

## Правило Для Агентов

- Active backend work идет в `backend-spring/`.
- Не добавлять новые features, fixes, migrations, tests или runbooks в `backend/`, если задача явно не просит audit или restore legacy Fastify behavior.
- Для active backend verification использовать Spring Gradle checks: `test`, `coreSmokeTest`, `realtimeSmokeTest`, `contentOpsSmokeTest`, `fullSpringSmokeTest`.
- Legacy Fastify checks могут оставаться в CI как archive/rollback checks, но они не делают Fastify активным backend.

## Frontend

- React Native / Expo.
- Five-tab navigation.
- Zustand stores для domain state.
- Отдельный API layer в `src/api`.
- Demo-ready frontend с экранами, подключенными к real APIs.
- Сложная plan logic, которая исторически жила в mock stores, должна переходить к backend source of truth.

## Canonical Backend

- Spring Boot + PostgreSQL в `backend-spring/`.
- Flyway migrations: `backend-spring/src/main/resources/db/migration`.
- Dev seed: `backend-spring/src/main/resources/db/seed/R__dev_seed.sql`.
- CLI content ops через Spring: `SPRING_MAIN_WEB_APPLICATION_TYPE=none ./gradlew bootRun --args="..."`.
- Realtime WebSocket: `/api/ws`.

## Historical Fastify Context

`raw/Plans_Project_Description (1).docx` описывает Fastify + PostgreSQL как backend и говорит, что ранние slices были реализованы там. Эта информация устарела после Spring migration. Оставлять ее нужно только как историю старых обсуждений.

## Практическое Правило

Для implementation work доверяй текущему коду репозитория и top-level docs больше, чем старым source exports. Для product logic, MVP rules и user flows `raw/Plans_Project_Description (1).docx` все еще полезен.
