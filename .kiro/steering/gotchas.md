# Gotchas & Known Issues

## Frontend

- `PlanParticipant.user` is `User | undefined` but `authStore.user` is `User | null` — bridge with `?? undefined`
- `CreatePlanForm` returns `planId` via `onDone` callback, not navigation params
- Expo SDK 54 peer dep conflicts — always `--legacy-peer-deps`
- `package.json` has no `"test"` script — `npm test` will error
- `CompositeNavigationProp` typing unreliable with Expo SDK 54 + React Nav 7 — don't type cross-tab nav tighter

## Backend

- Windows Date serialization bug: `Date.toString()` produces `GMT+0300` which PostgreSQL rejects. Always use `Date.toISOString()` or parameterized queries
- Spring `POST /plans` creates plan + participants + invitations + notifications atomically
- 15-participant cap uses `FOR UPDATE` lock on plan row
- WebSocket ping every 30s, close if pong stale >10s

## Data

- `Set<string>` in Zustand (`interestedIds`, `savedIds`) — not serializable, fine for in-memory
- `camelize()` in `api/client.ts` converts all snake_case keys to camelCase
- Frontend error codes: `OFFLINE` is client-only, backend must not emit it
