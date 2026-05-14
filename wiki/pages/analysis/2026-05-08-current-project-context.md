---
type: analysis
summary: Сжатый текущий контекст для будущих агентов после ingest описания проекта из ChatGPT
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# 2026-05-08 Current Project Context

[[Plans]] / FEST - plan-centric consumer app для city-event discovery и friend coordination. Продукт должен оставаться сфокусированным на core loop: discover event, create plan, invite people, propose options, vote, finalize, chat, complete и repeat.

## Стабильные Продуктовые Решения

- MVP должен быть меньше, но собраннее.
- Нет отдельной calendar entity в MVP.
- Нет map mode в MVP.
- Нет group chat в MVP.
- Event interest - мягкий сигнал, а не commitment.
- Saved events приватны.
- Groups - переиспользуемые invite containers, а не отдельные social spaces.
- Creator-only governance применяется к invitations, participant removal, finalize и unfinalize.

## Development Priority

Следующая high-value implementation theme - [[Frontend Slice 2 Integration]]: подключить plan proposals, voting, finalize/unfinalize, repeat и plan chat к real backend behavior. Не расширять product scope, пока core planning flow не станет end-to-end.

## Risk

Ингестнутый source устарел по backend architecture. Он называет Fastify + PostgreSQL активным backend, но проект уже перешел на Spring Boot. Будущие агенты должны считать `backend-spring/` canonical backend, а `backend/` - только archived legacy. Перед backend-facing изменениями читать [[Technical Architecture]].
