# VidForge AI

An AI-powered video creation workspace organized as a JavaScript monorepo.

## Structure

- `apps/web`: creator-facing web application.
- `apps/api`: HTTP API and orchestration layer.
- `services/ai-worker`: asynchronous AI generation jobs.
- `services/render-worker`: asynchronous video rendering jobs.
- `packages/*`: shared database, AI, config, and utility packages.
- `infrastructure`: deployment and local environment definitions.
- `docs`: architecture and project documentation.

## Getting started

```sh
npm test
```

The existing `index.html` is a dependency-free visual starter. Copy `.env.example` to `.env` when adding local services, then use `docker compose up -d` to start PostgreSQL and Redis.