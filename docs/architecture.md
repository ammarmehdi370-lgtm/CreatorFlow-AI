# Architecture

VidForge AI is organized as a small monorepo:

- `apps/web`: creator-facing web application.
- `apps/api`: HTTP API and orchestration layer.
- `services/ai-worker`: asynchronous AI generation jobs.
- `services/render-worker`: video rendering jobs.
- `packages/*`: shared code and infrastructure adapters.
- `infrastructure`: deployment and local environment definitions.
