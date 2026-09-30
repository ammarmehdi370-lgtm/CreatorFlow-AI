# Architecture

CreatorFlow is a modular Next.js monolith. Browser pages use shared components and call App Router route handlers; request parsing belongs at the boundary, business rules in services, persistence in repositories, and Prisma owns SQL access.

```text
Frontend
  -> API Route Handlers
  -> Validation
  -> Authentication / Authorization
  -> Services
  -> Repositories
  -> Prisma
  -> PostgreSQL
```

Authentication and service/repository slices will be implemented in follow-up work. Current account and project pages are foundation placeholders; protected-route behavior is not yet implemented.

Background processing uses a Redis-backed BullMQ queue:

```text
API -> BullMQ -> Redis -> Worker -> Processing
```

The render queue and worker entry point establish this boundary. Actual FFmpeg orchestration, storage, and job persistence are future implementation work.

## Data model

`prisma/schema.prisma` contains users and workspace membership, projects/settings, scripts/scenes, timeline tracks/clips, media assets, render/export/caption/thumbnail/SEO records, AI jobs, notifications, usage, subscription/billing events, and audit logs. Project duration is stored in seconds with a preset identifier. Cascade deletion is limited to records owned by a workspace/project; audit relations use nullable behavior.

## Duration domain

Supported presets and custom duration bounds live in `src/config/video-duration.ts`. Consumers should use this single catalog and its validation, formatting, millisecond, and content-budget utilities rather than defining their own options.

## Health

`GET /api/health` reports application, PostgreSQL, Redis, and renderer-configuration state. It returns `200` only when PostgreSQL and Redis respond, otherwise `503`; it never serializes environment values or credentials.