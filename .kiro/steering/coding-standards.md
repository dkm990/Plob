# Coding Standards

## Frontend (fest-app/)

- TypeScript strict mode
- Every screen wrapped in `ScreenContainer`
- Use `theme.spacing.*` — never hardcode spacing/sizes
- Platform-adaptive heights: `Platform.select({ web: smaller, default: larger })`
- Web layout: maxWidth 600 centered
- Auth form: maxWidth 400
- All API calls through `src/api/client.ts` (`api()` helper)
- Zustand stores: `loading`, `error`, `clearError()` pattern
- No mock data in stores — all API-backed
- Cross-tab navigation: `(navigation as any).navigate('TabName', { screen, params })`
- Date utils accept null/undefined, return empty string
- `Set<string>` in state is fine for in-memory (not serializable)

## Backend (backend-spring/)

- Java 21, Spring Boot 3.x
- Raw SQL via JdbcTemplate (no JPA/Hibernate DDL)
- Flyway migrations only — `ddl-auto=none`
- snake_case JSON responses (matches frontend `camelize()`)
- Error envelope: `{ code, message }` with specific error codes
- All plan mutations atomic in single transaction
- WebSocket: custom JSON protocol, JWT auth after connect
- Content Ops: CLI-first, no admin UI

## Git Conventions

- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`)
- Push to feature branches, never directly to main
- PR required for merge

## Quality Gate

- `npx tsc --noEmit` in `fest-app/` must pass
- `./gradlew test` in `backend-spring/` must pass
- `./gradlew fullSpringSmokeTest` for integration verification
- `fest-app/src/fest-animations/**` excluded from main typecheck
