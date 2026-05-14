---
type: concept
summary: Канонические правила MVP: lifecycle плана, права creator, proposals, voting, event-linked поведение и отложенные функции
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# MVP Rules

Эти правила задают границы текущего MVP для [[Plans]] (`raw/Plans_Project_Description (1).docx`, section 8).

## Входит В MVP

- OTP-аутентификация и базовая сессия.
- Лента событий и детали события.
- Interest и save.
- Создание plan из event и generic create plan.
- Plans Hub с active plans, invitations, groups и past.
- Статусы участников, приглашения, уведомления.
- Proposals места/времени, voting, finalize/unfinalize, repeat и text chat.
- Search по тексту, категории, дате и району.
- Venue read views и базовый профиль пользователя.

## Не Входит В MVP

- Realtime/websocket и push delivery в раннем scope источника; в текущем Spring-статусе realtime уже реализован, поэтому сверяйся с `docs/CURRENT_STATUS.md`.
- Map mode и кластеризация.
- Отдельная calendar entity и calendar sync.
- Group chat.
- Venue self-serve и сложные роли площадок.
- Ticket payments и monetization layers.
- Rich media chat и attachments.
- Advanced recommendations и personalization.
- Public groups, глубокая moderation и сложные privacy matrices.

## Governance

- План становится active сразу после создания.
- Lifecycle плана: active -> finalized -> completed; cancelled допустим из active или finalized.
- Статусы участников: invited, going, thinking, cant.
- Finalize/unfinalize - только creator.
- Invite/remove participant - только creator.
- Groups приватны и creator-governed.
- Максимум 15 участников на план, включая creator.

## Proposals

- Типы proposals в MVP: place и time.
- Голосовать может любой участник.
- Один участник может поставить максимум два голоса на тип proposal.
- После finalization новые proposals и voting блокируются до explicit unfinalize.

## Event-Linked Plans

- Event-linked plans используют read-only anchors для event time/place.
- Если событие меняет время, linked plans получают update и notification.
- Если событие отменено, plan не отменяется автоматически; creator решает отменить или перепрофилировать его.
