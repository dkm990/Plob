# Conventions

## Code Style

### Frontend (TypeScript)
- Strict TypeScript
- Functional components only
- Zustand for state (no Redux, no Context for global state)
- `theme.spacing.*` for all spacing — never hardcode
- `ScreenContainer` wraps every screen
- Platform-adaptive: `Platform.select({ web: ..., default: ... })`
- Web maxWidth: 600px centered; auth forms: 400px

### Backend (Java)
- Spring Boot conventions
- Raw SQL via JdbcTemplate (no JPA entity management)
- snake_case JSON output (Jackson config)
- Flyway for all schema changes — never manual DDL
- `@Transactional` for multi-table mutations

## Naming

- Frontend files: PascalCase for components/screens, camelCase for utils/stores
- Backend: standard Java conventions (PascalCase classes, camelCase methods)
- API: snake_case in JSON, camelCase in frontend after `camelize()`
- DB: snake_case everywhere

## Git

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- Feature branches off main
- PR required for merge
- All CI checks must pass

## Testing

- Backend: `./gradlew test` (unit) + smoke tests (integration)
- Frontend: `npx tsc --noEmit` (no test runner configured)
- `fest-app/src/fest-animations/**` excluded from main typecheck

## Dependencies

- Always `--legacy-peer-deps` for npm (Expo SDK 54 conflicts)
- Windows: `$env:npm_config_cache="E:\npm-cache"` (disk C full)
- No new dependencies without justification
