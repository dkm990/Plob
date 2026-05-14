# Wiki Index

Главный каталог базы знаний. Агент обновляет эту страницу после каждого ingest, lint-fix или создания analysis-страницы.

Разделы соответствуют папкам внутри `pages/`. Записи отсортированы по алфавиту. Описание берется из поля `summary` в frontmatter страницы.

## Entities

- [[Plans]] - мобильный consumer-продукт для поиска городских событий и координации совместных планов с друзьями

## Concepts

- [[Event Plan Group Model]] - доменная модель, которая разделяет события для discovery, планы для координации и группы для повторного выбора людей
- [[Frontend Slice 2 Integration]] - следующий технический шаг: заменить оставшуюся mock-логику планов реальными API-вызовами для proposals, voting, finalize, repeat и chat
- [[MVP Rules]] - канонические правила MVP: lifecycle плана, права creator, proposals, voting, event-linked поведение и отложенные функции
- [[Plan-Centric Coordination]] - продуктовая модель, где события являются входом в discovery, а главным объектом координации является план
- [[Technical Architecture]] - текущий архитектурный контекст: Spring Boot в `backend-spring/` является canonical backend; Fastify в `backend/` только архивный legacy

## Sources

- [[2026-05-08 Empty Raw]] - пустой raw markdown-файл без извлекаемого проектного содержания
- [[2026-05-08 Plans Project Description]] - экспорт описания проекта Plans/FEST: vision, MVP rules, domain model, экраны, архитектура, статус, риски и следующие шаги; backend-часть частично устарела после перехода на Spring

## Analysis

- [[2026-05-08 Current Project Context]] - сжатый текущий контекст для будущих агентов после ingest описания проекта из ChatGPT
