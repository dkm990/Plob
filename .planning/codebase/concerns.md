# Concerns & Technical Debt

## Known Issues

1. **No frontend test runner** — only TypeScript compilation check, no unit/integration tests
2. **OTP mock** — hardcoded `1111`, no real SMS provider
3. **Venue coordinates** — auto-created venues get `lat=0/lng=0`
4. **No push notifications** — only in-app notifications via polling/WS
5. **Set<string> in Zustand** — `interestedIds`/`savedIds` not serializable (fine for in-memory)

## Security Considerations

- JWT HS256 with shared secret
- No rate limiting beyond OTP lock
- No HTTPS enforcement in dev
- No input sanitization beyond Spring validation

## Performance Considerations

- No pagination on some list endpoints (events feed has it, notifications may not)
- WebSocket reconnect with exponential backoff
- No caching layer (no Redis)
- Frontend refetches full plan on lifecycle WS events

## Architectural Debt

- Legacy Fastify code still in repo (archive, but adds CI time)
- `CompositeNavigationProp` typing workaround (cast to `any`)
- No shared types between frontend and backend (manual sync via OpenAPI)
- Content Ops is CLI-only (no admin UI)
