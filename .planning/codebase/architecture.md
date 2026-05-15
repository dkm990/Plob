# Architecture

## High-Level

```
┌─────────────────┐     HTTP/WS      ┌──────────────────┐     SQL      ┌────────────┐
│   Expo App      │ ◄──────────────► │  Spring Boot API │ ◄──────────► │ PostgreSQL │
│  (React Native) │                   │   (port 3001)    │              │    (17)    │
└─────────────────┘                   └──────────────────┘              └────────────┘
```

## Frontend Architecture

- **Entry**: `App.tsx` — auth gate, if authenticated shows MainTabs
- **Navigation**: RootStack → MainTabs (5 tabs) → nested stacks
  - HomeTab → HomeStack (HomeFeed → EventDetails → CreatePlanFromEvent / VenueDetails)
  - SearchTab (standalone)
  - CreateTab (standalone)
  - PlansTab → PlansStack (PlansList → PlanDetails / GroupDetails)
  - ProfileTab (standalone)
- **State**: 7 Zustand stores, all API-backed, no mock data
- **API layer**: `src/api/client.ts` base with `camelize()` for snake→camelCase
- **Realtime**: `ws.ts` singleton + `wsHandler.ts` event router

## Backend Architecture

- **Controllers** handle HTTP routing and validation
- **Services** contain business logic
- **Persistence** layer uses JdbcTemplate (raw SQL, no JPA)
- **Flyway** manages schema migrations
- **WebSocket** uses raw Spring handler (not STOMP)
- **Content Ops** runs as CLI via ApplicationRunner

## Data Flow

1. Frontend calls REST API → Spring controller → service → DB
2. Service emits WebSocket events to subscribed clients
3. Frontend receives WS events → routes to stores via `wsHandler.ts`
4. REST remains source of truth; WS is push-only notification

## Key Patterns

- **Optimistic UI**: Only for votes. Everything else waits for server confirmation.
- **Atomic transactions**: Plan creation = plan + participants + invitations + notifications in one TX
- **FOR UPDATE locks**: 15-participant cap enforcement on concurrent accepts
- **Dedup**: Messages use `client_message_id`, proposals/votes use ID checks
- **Error envelope**: `{ code, message }` with typed error codes
