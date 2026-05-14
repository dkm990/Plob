# Wiki Log

Хронологический журнал изменений wiki. Новые записи добавляются вниз.

Формат заголовков остается английским и стабильным для grep/tooling:

```text
## [YYYY-MM-DD] ingest | <Source title>
## [YYYY-MM-DD] query | <One-line question>
## [YYYY-MM-DD] lint | <Scope>
## [YYYY-MM-DD] note | <Free-form>
```

Полные правила описаны в [`AGENTS.md`](./AGENTS.md).

---

## [2026-05-08] note | Wiki initialized

- Создан каркас `wiki/` по паттерну karpathy/llm-wiki.
- Добавлены schema в [`AGENTS.md`](./AGENTS.md) и человекочитаемое вступление в [`README.md`](./README.md).
- Созданы пустые папки `pages/entities/`, `pages/concepts/`, `pages/sources/`, `pages/analysis/`.

## [2026-05-08] ingest | Plans project description

- Ингестнут `raw/Plans_Project_Description (1).docx` в [[2026-05-08 Plans Project Description]].
- Созданы [[Plans]], [[Plan-Centric Coordination]], [[Event Plan Group Model]], [[MVP Rules]], [[Frontend Slice 2 Integration]] и [[Technical Architecture]].
- Сохранен reusable context в [[2026-05-08 Current Project Context]].
- Зафиксировано, что `raw/2026-08-05-raw.md` пустой; создана страница [[2026-05-08 Empty Raw]].
- Сначала отмечен устаревший backend context: source говорит про активный Fastify, а repo docs говорят, что Spring Boot canonical.

## [2026-05-08] note | Spring backend canonicalized in wiki

- Обновлена [[Technical Architecture]]: `backend-spring/` canonical, `backend/` Fastify только archived legacy.
- Обновлены [[2026-05-08 Plans Project Description]], [[Frontend Slice 2 Integration]] и [[2026-05-08 Current Project Context]], чтобы Fastify-упоминания считались superseded history.
- То же правило усилено в top-level `AGENTS.md` и `README.md`.

## [2026-05-08] note | Human-facing wiki translated to Russian

- Переведены на русский человекочитаемые страницы wiki: `README.md`, `index.md`, entity/concept/source/analysis pages и `log.md`.
- `wiki/AGENTS.md`, имена папок, file names, frontmatter keys и operation heading shapes оставлены на английском для стабильной работы LLM/tooling.
