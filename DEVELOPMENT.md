# Development Guide

## Local setup

### Requirements

- Node.js 20+
- PostgreSQL 16+
- Redis 7+
- Optional S3-compatible local storage such as MinIO

### Environment

Use `.env.local` and mirror values from `.env.example`.

### Database

```bash
npx prisma generate
npx prisma db push
```

### Running the app

```bash
npm install
npm run dev
```

## Coding conventions

- Use TypeScript strict mode.
- Keep provider integrations behind adapter interfaces.
- Put server-only logic in `src/lib` and server actions under `src/app` route handlers or server modules.
- Validate all request data with Zod.
- Prefer async jobs for AI generation and rendering.

## Recommendations

- Keep domain modules separate from API entry points.
- Store all provider access in environment variables, never in client code.
- Use Redis/BullMQ for long-running generation and render jobs.
- Preserve immutability for render snapshots and project version metadata.
