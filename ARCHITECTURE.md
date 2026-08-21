# Architecture

## System boundaries

```text
Frontend (Next.js app)
  ↓
API / Application layer
  ↓
Domain services
  ↓
Provider adapters
  ↓
PostgreSQL / S3 / Redis
  ↓
Render workers / job orchestration
```

## Core architectural guidelines

- Use modular service boundaries for projects, assets, AI, timeline, rendering, usage, and billing.
- Keep adapters behind interfaces so text, voice, image, and research providers are swappable.
- Put all AI work and media processing in asynchronous jobs.
- Use Postgres as the source of truth for metadata and permissions.
- Use object storage for generated media and render outputs.
- Use Redis/BullMQ for queueing, concurrency control, and retry policy.

## Database and state

The app models the PRD’s project graph with entities for users, workspaces, projects, scripts, scenes, media, captions, thumbnails, exports, render jobs, usage, and notifications.

## Provider abstraction

Planned provider interfaces include:

- TextAIProvider
- ResearchAIProvider
- VoiceAIProvider
- ImageAIProvider
- VideoAIProvider
- SpeechToTextProvider
- VisionAIProvider
- RecommendationAIProvider

These interfaces normalize status, costs, retries, timeouts, safety outcomes, and response metadata.

## Rendering

Rendering depends on immutable project version snapshots and long-running worker execution. The resulting output is persisted as a job and export record.
