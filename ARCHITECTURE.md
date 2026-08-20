# CreatorFlow AI Technical Blueprint

## Repository structure

```text
src/
  app/                    Next.js routes and screens
    api/v1/                versioned route handlers
    (auth)/                sign-in and account screens
    (dashboard)/           dashboard and projects
  components/              shared UI and editor components
  domain/                  pure business rules and value objects
    projects/ scripts/ scenes/ timeline/ usage/ billing/
  server/
    auth/                  session, roles, workspace resolution
    db/                    Prisma client and transaction helpers
    http/                  request IDs, envelopes, error mapping
    providers/             AI/media provider ports and adapters
    storage/               object storage ports and signed URLs
    queues/                BullMQ definitions, producers, workers
    services/              application use cases
  contracts/               Zod request/response schemas
  workers/                 worker process entrypoint
  lib/                     environment and cross-cutting utilities
prisma/
  schema.prisma
  migrations/
```

Routes never call providers, Prisma, or queues directly. A route parses a contract, resolves the authenticated workspace, invokes a service, and returns the standard envelope.

## Request contract

Every response is `{ data: T | null, error: { code, message, requestId, retryable } | null, meta: { requestId } }`. Mutating requests accept `Idempotency-Key`. Every route must enforce workspace membership and the minimum role.

## Authentication and authorization

Use Auth.js with database-backed sessions initially. The session contains `userId` and an active `workspaceId`; workspace selection is validated against `Membership` on the server. Roles are ordered OWNER > ADMIN > EDITOR > REVIEWER > VIEWER.

- Viewer: read project resources.
- Reviewer: read and comment/approve when enabled.
- Editor: create and mutate projects, assets, timelines, and billable jobs.
- Admin: manage workspace members, settings, budgets, and billing.
- Owner: full workspace control and deletion.

Route authorization must load the project through its workspace relation, never query by an untrusted project ID alone. Admin operations require a separate admin permission and append `AuditLog` records. OAuth provider connections use PKCE/state, encrypted refresh tokens, scoped permissions, and explicit publish confirmation.

## Storage

Object storage is private. Key format:

```text
{workspaceId}/{projectId-or-shared}/{assetId}/{variant}.{extension}
```

Upload flow: create intent -> signed multipart upload -> complete -> validate magic bytes/size/dimensions/duration -> mark READY -> generate preview. Downloads use a five-minute signed URL. Workers use server-side credentials or short-lived signed URLs. Never persist raw provider URLs as the canonical asset location.

## Queues

Redis/BullMQ queues:

| Queue | Work | Default policy |
|---|---|---|
| `ai-text` | ideas, outlines, scripts, research | 3 retries, exponential backoff |
| `ai-voice` | previews and narration | 2 retries, provider rate limit |
| `ai-image` | generated images | 2 retries, explicit cost reservation |
| `ai-video` | bounded generated clips | 1 retry, low concurrency |
| `media` | validation, thumbnails, proxies | 3 retries |
| `transcription` | speech-to-text and captions | 2 retries |
| `render` | FFmpeg/Remotion compositions | 2 retries, CPU-constrained |
| `publishing` | YouTube upload/schedule | 3 retries, idempotent |
| `notifications` | in-app/email events | 5 retries |
| `cleanup` | signed-file expiry and lifecycle | scheduled |

Producer transaction: validate -> reserve credits -> create `AIJob`/`RenderJob` -> enqueue with job ID and idempotency key. Worker transaction: claim -> update RUNNING -> execute -> persist output/error -> settle or release reservation -> create notification. A reconciliation task resets stale RUNNING jobs and checks database/Redis consistency.

## Provider abstraction

Provider ports use stable domain inputs and normalized outputs. Adapters own SDKs, authentication, request shaping, polling, provider retries, and provider-specific errors.

```text
TextProvider.generate(StructuredPrompt): GeneratedText
ResearchProvider.research(ResearchRequest): ResearchResult
VoiceProvider.synthesize(VoiceRequest): GeneratedAudio
ImageProvider.generate(ImageRequest): GeneratedImage
VideoProvider.generate(VideoRequest): GeneratedVideo
SpeechToTextProvider.transcribe(AudioReference): Transcript
VisionProvider.analyze(MediaReference): VisionResult
```

Each result includes `provider`, `model`, `requestId`, `usage`, `contentSafety`, and provenance. The application chooses a provider through a capability registry and policy: plan entitlement, region, quality, cost, latency, and health. Provider keys are server-only environment secrets. Mock adapters are mandatory for tests and local development.

## API module map

```text
/api/v1/projects
/api/v1/projects/:projectId/scripts
/api/v1/projects/:projectId/scenes
/api/v1/projects/:projectId/timeline
/api/v1/projects/:projectId/render
/api/v1/projects/:projectId/exports
/api/v1/ai/ideas
/api/v1/ai/research
/api/v1/ai/scripts
/api/v1/ai/jobs/:jobId
/api/v1/media/upload-intents
/api/v1/media/:assetId
/api/v1/captions/:captionId
/api/v1/usage
/api/v1/billing
/api/v1/integrations/youtube
```

## Non-negotiable invariants

1. No billable provider call without a successful credit reservation.
2. No cross-workspace data access, including through asset, job, export, or connected-account IDs.
3. No render from mutable editor state; render only an immutable timeline snapshot.
4. No duplicate side effect for a repeated idempotency key.
5. No client exposure of provider keys, OAuth refresh tokens, or private storage credentials.
6. Every async operation is observable, retryable where safe, and ends in a terminal state.
