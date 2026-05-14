---
type: concept
summary: Доменная модель, которая разделяет события для discovery, планы для координации и группы для повторного выбора людей
sources: [raw/Plans_Project_Description (1).docx]
updated: 2026-05-08
---

# Event Plan Group Model

Модель разделяет Event, Plan и Group, потому что у каждой сущности своя продуктовая роль (`raw/Plans_Project_Description (1).docx`, section 5).

## Сущности

- Event: публичное событие от площадки или платформы; входная точка discovery.
- Plan: главный объект групповой координации и ядро продукта.
- Group: переиспользуемый круг друзей для будущих планов.
- EventInterest: мягкий публичный сигнал интереса, видимый друзьям.
- SavedEvent: приватное сохранение события.
- PlanParticipant: статус пользователя внутри плана: invited, going, thinking или cant.
- PlanProposal: предложенный вариант места или времени.
- Vote: голос по proposal; максимум два голоса на тип proposal.
- Invitation: actionable invite в plan или group.
- Notification: read/unread поверхность уведомлений.
- Message: text, system или proposal-card сообщение внутри plan chat.

## Важные Различия

- Interest по событию не равен участию в плане.
- Saved event не равен публичному like/interest.
- Group не равен Plan.
- Proposal card в чате и voting block в деталях плана - разные отображения одного PlanProposal.
- `invited` - статус участника, а не lifecycle state плана.
