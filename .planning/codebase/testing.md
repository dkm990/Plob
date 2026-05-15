# Testing

## Backend Quality Gates

| Gate | Command | Workdir |
|------|---------|---------|
| Unit tests | `./gradlew test` | `backend-spring/` |
| Core smoke | `./gradlew coreSmokeTest` | `backend-spring/` |
| Realtime smoke | `./gradlew realtimeSmokeTest` | `backend-spring/` |
| Content ops smoke | `./gradlew contentOpsSmokeTest` | `backend-spring/` |
| Full smoke | `./gradlew fullSpringSmokeTest` | `backend-spring/` |

## Frontend Quality Gates

| Gate | Command | Workdir |
|------|---------|---------|
| TypeScript check | `npx tsc --noEmit` | `fest-app/` |
| Animations check (optional) | `npx tsc --noEmit -p tsconfig.fest-animations.json` | `fest-app/` |
| Smoke build | `npx expo export --platform web` | `fest-app/` |

## CI Pipeline

All gates run on every PR and push to `master` via `.github/workflows/ci.yml`:
- Spring test + all smoke tests
- Frontend typecheck
- Legacy Fastify typecheck + smoke tests (archive checks)

## What's NOT Tested

- No frontend unit test runner (no Jest/Vitest configured)
- No E2E tests (no Detox/Maestro)
- Manual mobile testing via Expo Go

## Test Data

- Dev seed: `backend-spring/src/main/resources/db/seed/R__dev_seed.sql`
- Auth: any seeded phone + OTP `1111`
- Example content ops payload: `docs/examples/content-ops-event.example.json`
