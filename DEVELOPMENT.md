# Development guide

## Modules

- `src/app`: routes, layouts, loading/error states, and API route handlers.
- `src/components`: shared app shell, theme provider, and UI primitives.
- `src/config`: environment parsing, Redis connection options, and duration rules.
- `src/lib`: Prisma client, validation, health checks, and queue access.
- `src/services`, `src/repositories`, `src/types`: feature boundaries for upcoming service slices.
- `src/workers`: independently started BullMQ workers.
- `prisma`: schema and generated client integration.

## Commands

```powershell
npm.cmd run dev
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npm.cmd run test:watch
npm.cmd run build
npm.cmd run start
npm.cmd run db:generate
npm.cmd run db:push
npm.cmd run db:migrate -- --name descriptive-change
npm.cmd run db:studio
npm.cmd run worker:render
```

## Tests and build

Vitest runs unit tests for duration rules, input validation, environment/database configuration, Redis configuration, and the health API. Before merging, run typecheck, lint, tests, and a production build. The health test mocks external services and does not require a live PostgreSQL or Redis connection.

## Conventions

- Parse external input with Zod at route boundaries.
- Keep project duration values in seconds at API/domain boundaries and convert using centralized helpers.
- Keep secrets server-side; API responses must be explicit allowlists.
- Add feature behavior through services and repositories rather than embedding persistence in page components.
- Do not make external provider keys mandatory for application startup.