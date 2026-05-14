---
type: source
summary: Экспорт описания проекта Plans/FEST: vision, MVP rules, domain model, экраны, архитектура, статус, риски и следующие шаги; backend-часть частично устарела после перехода на Spring
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# 2026-05-08 Plans Project Description

`raw/Plans_Project_Description (1).docx` - контекстный документ из ChatGPT project для [[Plans]] / FEST. Он описывает продукт как mobile-first consumer app для поиска городских событий и координации совместного досуга с друзьями. Каноническое продуктовое направление - plan-centric: события являются входом в discovery, а главным объектом координации является plan.

## Ключевые Тезисы

- [[Plans]] решает зазор между "нашел интересное событие" и "реально договорился с друзьями пойти вместе" (`raw/Plans_Project_Description (1).docx`, section 1).
- MVP сознательно сужен: нет отдельной calendar entity, нет map mode, нет group chat, governance простой и creator-governed, event-linked plans остаются привязанными к event data (`raw/Plans_Project_Description (1).docx`, section 3.2).
- Core loop: discovery -> create plan -> invite -> propose -> vote -> finalize -> message -> complete -> repeat (`raw/Plans_Project_Description (1).docx`, section 15).
- Главные сущности - [[Event Plan Group Model|Event, Plan и Group]], поддержанные participants, proposals, votes, invitations, notifications и messages (`raw/Plans_Project_Description (1).docx`, section 5 and table 3).
- [[MVP Rules]] фиксируют lifecycle, permissions, proposal limits, participant statuses, event-linked behavior и максимум 15 участников на plan (`raw/Plans_Project_Description (1).docx`, section 8).
- [[Frontend Slice 2 Integration]] указан как рациональный следующий шаг: подключить proposals, voting, finalize/unfinalize, repeat и plan chat к real backend endpoints (`raw/Plans_Project_Description (1).docx`, section 15).

## Устаревший Backend Context

- Источник описывает backend как Fastify + PostgreSQL и говорит, что Slice 1/Slice 2 были реализованы там (`raw/Plans_Project_Description (1).docx`, sections 10-11). Это устарело. Проект перешел на Spring Boot: `backend-spring/` является canonical backend, а `backend/` - только архивный legacy Fastify. Будущая backend-работа должна идти в Spring.

## Связанные Страницы

- [[Plans]]
- [[Plan-Centric Coordination]]
- [[MVP Rules]]
- [[Event Plan Group Model]]
- [[Frontend Slice 2 Integration]]
- [[Technical Architecture]]
