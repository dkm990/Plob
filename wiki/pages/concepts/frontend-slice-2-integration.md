---
type: concept
summary: Следующий технический шаг: заменить оставшуюся mock-логику планов реальными API-вызовами для proposals, voting, finalize, repeat и chat
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# Frontend Slice 2 Integration

Frontend Slice 2 Integration - рекомендованный следующий шаг в исходном проектном описании: подключить plan-core поведение к реальным backend endpoints вместо расширения mock-логики (`raw/Plans_Project_Description (1).docx`, section 15).

## Scope

- Подключить proposals list/create в Plan Details.
- Подключить vote/unvote с optimistic rollback.
- Заменить mock finalize/unfinalize на API-вызовы.
- Заменить mock repeat на repeat endpoint.
- Заменить mock plan chat на GET/POST messages.
- Прогнать полный сценарий: discovery -> create plan -> invite -> propose -> vote -> finalize -> message -> complete -> repeat.

## Зачем

Источник явно говорит, что рациональный следующий шаг - не расширять backend, а завершить frontend integration уже реализованного Slice 2 behavior. Это переводит core planning experience из demo logic в backend-backed flows (`raw/Plans_Project_Description (1).docx`, section 15).

## Важная Поправка

Проверь [[Technical Architecture]] перед реализацией. Fastify-упоминания в исходнике исторические; active backend-facing frontend work нужно делать против canonical Spring API в `backend-spring/`.
