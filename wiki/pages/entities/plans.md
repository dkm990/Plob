---
type: entity
summary: Мобильный consumer-продукт для поиска городских событий и координации совместных планов с друзьями
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# Plans

Plans? - мобильный consumer-продукт для поиска городских событий и координации совместного досуга с друзьями. Рабочий алиас проекта - Fest&Rest (`raw/Plans_Project_Description (1).docx`, table 2).

Продукт не является обычной афишей или мессенджером. Его задача - закрыть промежуток между "нашел интересное событие" и "мы реально договорились, зафиксировали детали и пошли вместе" (`raw/Plans_Project_Description (1).docx`, section 1).

## Позиционирование

- Главная ценность: перевести пользователя от discovery события к конкретной групповой договоренности.
- Главный объект: [[Plan-Centric Coordination|Plan]], а не event, chat или calendar.
- Discovery layer: реальные события от площадок и платформы.
- Coordination layer: создание плана, приглашения, статусы, proposals, voting, finalization и plan chat.
- Reuse layer: группы и прошлые планы помогают повторно запускать похожие активности.

## Визуальное Направление

Целевое UI-направление называется "Soft Shell": теплый, мягкий, премиальный, округлый mobile-first интерфейс с понятной иерархией, легкими тенями и ясными primary actions (`raw/Plans_Project_Description (1).docx`, section 2).

## Важный Контекст

Источник говорит, что MVP определен, frontend prototype существует, а backend Slice 1/Slice 2 реализованы (`raw/Plans_Project_Description (1).docx`, table 2). Backend-детали из этого источника частично устарели: текущий canonical backend - Spring Boot в `backend-spring/`. Проверяй [[Technical Architecture]] перед backend-facing работой.
