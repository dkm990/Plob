# Structure

```
.
├── .github/workflows/ci.yml     # CI pipeline
├── .kiro/steering/              # Kiro context (project, standards, gotchas)
├── .planning/                   # GSD planning artifacts
├── backend-spring/              # Canonical Spring Boot backend
│   ├── gradle/                  # Gradle wrapper
│   ├── src/main/java/com/plans/backend/
│   │   ├── api/                 # REST controllers
│   │   │   ├── auth/           # OTP + JWT auth
│   │   │   ├── discovery/      # Events, venues, search
│   │   │   ├── error/          # Global exception handling
│   │   │   ├── health/         # Health endpoint
│   │   │   ├── invitations/    # Invitation CRUD
│   │   │   ├── notifications/  # Notification CRUD
│   │   │   ├── plans/          # Plan CRUD + lifecycle
│   │   │   ├── realtime/       # WebSocket handler
│   │   │   └── users/          # User + friends
│   │   ├── auth/               # JWT + OTP services
│   │   ├── config/             # Spring config (Jackson, DataSource, Web)
│   │   ├── content/            # Content Ops service
│   │   ├── ops/                # CLI runner for content ops
│   │   ├── persistence/        # Database access layer
│   │   └── service/            # Business services
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── db/
│   │       ├── migration/      # Flyway migrations (V1, V2)
│   │       └── seed/           # Dev seed data
│   └── src/test/               # Unit + integration tests
├── backend/                     # ARCHIVED legacy Fastify (read-only)
├── contracts/mvp/
│   ├── api/openapi.yaml        # API contract (source of truth)
│   ├── db/001_init.sql         # DB schema baseline
│   └── docs/                   # Acceptance criteria, screen mapping
├── docs/                        # Status, handoff, runbooks, testing
├── fest-app/                    # Expo React Native frontend
│   ├── App.tsx                  # Entry point (auth gate + navigator)
│   ├── src/
│   │   ├── api/                # HTTP + WebSocket clients
│   │   ├── components/         # Reusable UI (ScreenContainer, etc.)
│   │   ├── motion/             # Animation components
│   │   ├── navigation/         # Route types
│   │   ├── screens/            # All app screens
│   │   ├── stores/             # Zustand stores (7)
│   │   ├── theme/              # Design tokens
│   │   ├── types/              # Entity types
│   │   └── utils/              # Helpers (dates, auth storage, etc.)
│   └── assets/                  # Icons, images
├── wiki/                        # LLM-maintained knowledge base
├── .gitattributes
├── .gitignore
├── AGENTS.md                    # AI agent instructions
└── README.md                    # Project overview + quick start
```
