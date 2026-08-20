# CreatorFlow AI Product Requirements Document

**Product:** CreatorFlow AI  
**Tagline:** **Turn Ideas Into Videos.**  
**Document status:** Product and technical source of truth for discovery and implementation  
**Date:** 2026-08-20  
**Audience:** Product, design, engineering, QA, operations, and future coding agents

## 1. Executive Summary

CreatorFlow AI is an AI-powered production studio for YouTube creators. It takes a creator from a rough idea through research, scripting, scene planning, voice, visuals, editing, captions, thumbnail, metadata, rendering, and export. The product must preserve human creative control: AI proposes, generates, organizes, and automates; the creator reviews and edits.

The MVP must produce a complete, editable, YouTube-ready video without requiring the user to stitch together multiple specialist tools. The initial release should focus on a guided project workflow, text generation, scene planning, provider-backed voice and visual assets, a practical timeline editor, captions, metadata, rendering, and export. Publishing, advanced generative video, collaboration, and agency controls follow after the core loop is reliable.

**Primary success measure:** the percentage of new projects that reach a successful exported video within seven days. Supporting measures are idea-to-first-draft time, generation completion rate, edit completion rate, render success rate, user satisfaction, and paid conversion.

## 2. Product Vision

Make video production feel like directing an intelligent, dependable studio partner. A creator should be able to begin with one sentence and finish with a coherent, branded, editable video while understanding and controlling every consequential decision.

The long-term product is not a one-click clip generator. It is a persistent creator workspace containing projects, reusable formats, brand rules, assets, templates, performance learnings, and a production history.

## 3. Problem Statement

Creators lose time moving between research, writing, asset sourcing, voice tools, editors, caption tools, thumbnail software, and SEO utilities. This causes context loss, repetitive manual work, inconsistent quality, hidden costs, and abandoned ideas. Generic AI video generators often produce an opaque result that is difficult to edit and weakly connected to YouTube strategy.

CreatorFlow AI must solve the orchestration problem while maintaining editorial quality. It must expose enough structure for creators to revise a script, replace a scene, retime audio, change a caption, or alter metadata without restarting the entire project.

## 4. Target Users

The primary market is individual YouTube creators and small teams producing recurring content. Initial platform focus is YouTube; outputs should also support common social aspect ratios.

## 5. Personas

### 5.1 Beginner YouTube creator
- **Goals:** publish a first consistent series, learn what makes a good video, reduce technical friction.
- **Problems:** unclear topics, weak structure, fear of editing software, limited budget and time.
- **Current workflow:** notes app idea, web searches, improvised script, phone or stock footage, basic editor, manual upload.
- **Pain points:** blank-page anxiety, confusing settings, disconnected tools, uncertainty about titles and thumbnails.
- **Desired features:** guided project setup, plain-language presets, outline and script generation, scene suggestions, automatic captions, simple editor, export checklist.
- **Why useful:** turns an intimidating process into reviewable steps while allowing gradual access to advanced controls.

### 5.2 Faceless YouTube creator
- **Goals:** operate repeatable channels without appearing on camera; maximize publishing cadence.
- **Problems:** needs narration, b-roll, visual consistency, rights-aware assets, and efficient batch production.
- **Current workflow:** research, script, outsourced or synthetic voice, stock footage, timeline assembly, thumbnail and SEO in separate tools.
- **Pain points:** asset mismatch, monotonous voice, repetitive scenes, licensing uncertainty, long assembly time.
- **Desired features:** script-to-scene mapping, voice presets, media search and generation, automatic timing, reusable templates, batch jobs, brand kits.
- **Why useful:** automates the mechanical production chain while keeping each scene replaceable.

### 5.3 YouTube Shorts creator
- **Goals:** publish frequent vertical videos, test hooks, repurpose long-form content.
- **Problems:** tight timing, fast captions, mobile framing, trend-sensitive concepts.
- **Current workflow:** phone editor or desktop editor, manual captions, repeated resizing and reposting.
- **Pain points:** first-second hook, caption readability, safe-area mistakes, slow iteration.
- **Desired features:** 9:16 preset, hook variants, word-level captions, beat-aware cuts, short duration controls, long-form-to-Short extraction.
- **Why useful:** compresses ideation-to-posting time and protects vertical composition.

### 5.4 Professional content creator
- **Goals:** deliver polished videos on schedule, maintain quality and brand consistency, control creative details.
- **Problems:** production bottlenecks, review cycles, asset sprawl, costly rework.
- **Current workflow:** research and scripts in documents, specialist tools for voice and assets, NLE for final edit, manual metadata.
- **Pain points:** AI output requires too much cleanup, weak versioning, render failures, no single project record.
- **Desired features:** granular timeline editing, version history, brand controls, provider selection, quality gates, high-resolution output, reusable templates.
- **Why useful:** removes repetitive work without taking away professional control.

### 5.5 Small content agency
- **Goals:** manage multiple clients and channels profitably with predictable delivery.
- **Problems:** approvals, permissions, client separation, usage budgets, repeatable workflows.
- **Current workflow:** shared drives, project boards, chat, spreadsheets, separate creator tools.
- **Pain points:** unclear ownership, hidden AI spend, duplicate assets, approval ambiguity.
- **Desired features:** workspaces, roles, comments and approvals, client brand kits, quotas, audit trail, project templates, consolidated billing.
- **Why useful:** makes production operational rather than dependent on individual memory.

### 5.6 Social media manager
- **Goals:** turn a content calendar into platform-ready assets and publish consistently.
- **Problems:** many formats, fast turnaround, metadata variations, reporting across channels.
- **Current workflow:** calendar, source video, manual edits and captions, platform upload tools.
- **Pain points:** resizing, repetitive copywriting, missing captions, fragmented approvals.
- **Desired features:** repurposing, format presets, caption styles, title/description variants, scheduling integration, notification center.
- **Why useful:** provides one source project with controlled derivatives.

## 6. Product Goals

1. Produce a coherent first video draft from an idea with minimal setup.
2. Keep every generated artifact editable and traceable to its source.
3. Reduce routine production time without reducing creator agency.
4. Make YouTube packaging part of production, not an afterthought.
5. Protect users and the business from runaway AI and rendering costs.
6. Build provider-neutral infrastructure so quality, price, and availability can evolve.

## 7. Non-Goals

- Replacing a full professional NLE in the MVP.
- Guaranteeing virality, rankings, factual accuracy, or copyright clearance.
- Training proprietary foundation models in the initial product.
- Supporting every social network at launch.
- Fully autonomous publishing without explicit user confirmation.
- Building a marketplace or public social network in the MVP.

## 8. Core User Journeys

### New idea to export
1. User creates a project and selects format, duration, audience, tone, language, and content type.
2. AI analyzes the idea and returns audience, angle, hook options, risks, and an outline.
3. User accepts or edits the outline.
4. Script Studio generates a script with section-level regenerate, shorten, expand, and tone controls.
5. Scene Planner maps script sections to scenes with duration, narration, visual direction, and on-screen text.
6. User approves scenes and chooses generated, uploaded, or library media.
7. Voice Studio generates narration and exposes pronunciation and pacing controls.
8. Captions are transcribed, styled, and linked to timeline timing.
9. Music and SFX are selected under a budget and rights status.
10. Timeline assembly creates a draft with editable clips and tracks.
11. User edits, previews, and runs quality checks.
12. Thumbnail, title, description, keywords, and publishing checklist are generated.
13. User renders a selected format and resolution.
14. User previews the render, downloads it, or explicitly publishes through YouTube.

### Repurpose long-form to Shorts
User selects a finished or uploaded video, chooses target duration and style, and receives candidate highlight ranges, hook/title variants, vertical reframing, captions, and a new timeline. Each candidate is independently editable and renderable.

### Agency approval
An editor creates a project from a client template, assigns tasks, submits a version for review, receives structured comments, revises, and records approval. Client or reviewer access is restricted to assigned workspace/project resources.

## 9. Feature Requirements

### 9.1 Dashboard
Show recent projects, drafts requiring attention, render/job status, usage remaining, quick-create action, templates, and notifications. Support sort/filter by status, type, owner, and updated date. Empty states must lead directly to project creation.

### 9.2 Project management
Projects have title, description, type, format, status, owner, workspace, brand settings, language, target duration, versions, and timestamps. Support create, duplicate, archive, restore, rename, delete with confirmation, autosave, project search, and draft recovery. Project state must survive refresh and failed jobs.

### 9.3 AI Idea Generator
Accept topic, keywords, audience, niche, goal, tone, language, format, and optional reference. Return ranked ideas, hooks, angles, estimated duration, audience intent, novelty warning, and suggested next action. Users can save, reject, edit, regenerate, and convert an idea to a project.

### 9.4 Research Studio
Accept a topic and research brief. Return sourced notes, claims, citations/URLs where available, counterpoints, freshness timestamp, confidence labels, and a fact-check checklist. The user can pin facts into the script and mark claims as verified, uncertain, or excluded. The system must distinguish generated synthesis from retrieved evidence and never present unsupported claims as verified.

### 9.5 Script Studio
Provide structured sections, word count, estimated duration, reading pace, version history, autosave, editable rich text, outline context, source references, and scene links. Actions include regenerate section, rewrite tone, simplify, translate, shorten, expand, and create hook variants. Preserve user edits when regenerating adjacent content.

### 9.6 Scene Planner
Represent each scene with script range, narration, visual brief, asset type, shot direction, duration, transition, caption text, and status. Support reorder, split, merge, duplicate, lock, approve, and regenerate visual brief. Changes must be reflected in downstream timing without silently deleting user overrides.

### 9.7 Voice Studio
Offer provider/model/voice selection, language, accent, emotion, pace, pitch, pronunciation dictionary, pauses, and preview. Generate narration per scene or full script. Store provider metadata, consent/rights acknowledgement where needed, duration, and cost. Failed generation must be retryable without duplicate billing.

### 9.8 Media/Asset Library
Support uploads, generated assets, imported assets, folders/tags, project links, search, filters, previews, duplicate detection, metadata, rights/source notes, and deletion/lifecycle status. Assets must be reusable only where the user's permissions and license permit it.

### 9.9 AI Image Generation
Generate scene images from editable prompts and style controls. Support aspect-ratio-aware output, seed or variation where provider permits, moderation, retry, cost preview, and generation history. Mark generated assets and store prompt/provider/version metadata.

### 9.10 AI Video Generation
Phase 2 capability. Generate short scene clips from prompts or image references with duration, motion, camera, and style controls. Enforce duration, resolution, moderation, concurrency, cost estimate, and explicit confirmation before generation.

### 9.11 Video Editor
MVP: multi-track timeline, video/image/audio/voiceover/text/caption tracks, clip trim/split/reorder, scene reorder, crop, scale, position, volume, fade, speed presets, transitions, preview, aspect-ratio canvas, undo/redo, autosave, keyboard-friendly controls, and render-ready serialization. Future: keyframes, masks, advanced effects, nested sequences, collaboration, waveform editing, beat sync, color correction, and magnetic editing.

The timeline is non-destructive. A clip references an asset plus transform, trim, speed, volume, and effect data. The editor must show unsaved state, recover from refresh, validate missing assets, and prevent invalid overlaps where the selected track policy disallows them.

### 9.12 Caption/Subtitles system
Generate captions from voice/audio using speech-to-text, allow word/line edits, timing adjustment, splitting/merging, style presets, safe-area preview, and burn-in or sidecar export. Support SRT and VTT in MVP. Captions must remain linked to source audio version and be invalidated or flagged when timing changes materially.

### 9.13 Music/Sound Effects
Provide searchable licensed library plus user uploads. Filter by mood, genre, duration, BPM, and rights status. Support trim, volume, ducking under voiceover, fade, and attribution metadata. No asset may be offered for export without a known rights status.

### 9.14 Thumbnail Generator
Generate multiple concepts from title/script/brand settings; support image upload/generation, text overlays, safe composition, crop, contrast/readability checks, versioning, and export as PNG/JPEG. A thumbnail is editable and associated with SEO data and project version.

### 9.15 Title Generator
Generate diverse title variants based on topic, audience, intent, tone, and length. Show rationale and risk flags; never claim a guaranteed click-through rate. Users can save, compare, edit, and associate a selected title with a video version.

### 9.16 Description Generator
Create structured descriptions with summary, chapters when timing exists, links/placeholders, disclosure text, call to action, and hashtags. Require user review before publishing and preserve user-supplied links.

### 9.17 SEO/keyword assistant
Suggest search terms, related questions, tags where relevant, title/description alignment, and content gaps. Clearly label estimates and sources. Avoid keyword stuffing. Store selected keywords and explain recommendations in concise UI copy.

### 9.18 Video rendering
Create immutable render jobs from a timeline/version snapshot. Support preview and final quality profiles, progress, logs, cancellation where safe, retry, output validation, and retention policy. Validate missing media, caption configuration, dimensions, duration, codecs, and available credits before queueing.

### 9.19 Export system
Support downloadable MP4 (H.264/AAC) in MVP, SRT/VTT captions, thumbnail image, and metadata package. Use signed URLs with expiration, export history, checksum/size, and permission checks. Do not expose storage credentials.

### 9.20 YouTube publishing integration
Phase 2: OAuth consent, channel selection, upload, title/description/tags/category, thumbnail, privacy, playlist, scheduled time, and upload status. Publishing requires explicit confirmation and verified OAuth state. Tokens are encrypted, scoped, revocable, and never logged.

### 9.21 Templates
Templates contain format, timeline structure, scene conventions, caption style, brand settings, music rules, and prompt defaults. Support system templates, private user templates, workspace templates, duplicate, version, and archive. Templates must not contain another user's private assets.

### 9.22 User settings
Profile, timezone, language, default format, brand kit, accessibility preferences, connected accounts, notification preferences, security sessions, data export, and account deletion.

### 9.23 Usage/credits
Show balance, reserved credits, projected cost, consumption history, limits, and reset date. Every expensive action presents an estimate and requires confirmation when above a configurable threshold.

### 9.24 Billing/subscriptions
Support plan selection, checkout, invoices, payment method management, seat/workspace rules, upgrades, downgrades, cancellation, grace periods, and webhook-driven entitlement state. Billing state must be server-authoritative.

### 9.25 Notifications
In-app and email notifications for completed/failed jobs, low credits, render availability, review requests, publishing results, billing events, and security events. Notifications are deduplicated, read-state tracked, and preference-controlled.

### 9.26 Admin dashboard
Admin-only views for users, workspaces, subscriptions, usage, jobs, provider health, moderation events, storage, feature flags, incidents, and audit logs. Support safe job retry/cancel and entitlement correction with reason capture. Never expose provider secrets or full user content by default.

## 10. AI Architecture Requirements

AI capabilities are accessed through adapters, not directly from product modules. Provider choice is configurable by capability, region, plan, quality, cost, and availability.

Required conceptual interfaces:
- **TextAIProvider:** structured generation, streaming where useful, JSON/schema output, rewrite, summarization, translation, token/cost usage, model metadata, safety result.
- **ResearchAIProvider:** query planning, retrieval or source ingestion, citation mapping, freshness, claim extraction, confidence, and synthesis. Retrieval must be separable from generation.
- **VoiceAIProvider:** voices, languages, preview, synthesis, pronunciation, timing, output format, duration/cost, and provenance.
- **ImageAIProvider:** prompt-to-image, image variations, reference conditioning if supported, dimensions, moderation, seed/provider metadata, and cost.
- **VideoAIProvider:** prompt/image-to-video, bounded duration, dimensions, status polling/callback, moderation, and cost.
- **SpeechToTextProvider:** transcription, word timestamps, language detection, diarization if supported, confidence, and caption segmentation input.
- **VisionAIProvider:** image/video analysis, OCR, scene descriptions, moderation, quality/readability checks, and structured observations.
- **RecommendationAIProvider:** topic/title/keyword ranking, template selection, quality suggestions, and explainable signals.

All adapters must normalize status, errors, retries, timeouts, idempotency keys, content safety outcomes, usage units, and provider request IDs. Prompts and schemas are versioned. User content is not used for model training unless explicit consent and policy support it.

## 11. Video Architecture Requirements

The canonical representation is a versioned project graph: script sections map to scenes; scenes reference assets and audio; timeline tracks reference clips; captions and metadata reference a project version. Rendering consumes an immutable snapshot, not mutable editor state.

Render pipeline: validate snapshot, resolve signed/private assets, normalize media, create composition, mix audio and ducking, place captions, encode preview/final output, run media validation, upload result, update job/export state, and notify the user. FFmpeg is the media-processing foundation; Remotion is recommended for deterministic programmatic compositions and branded motion. Long-running work runs in workers.

## 12. UX/UI Requirements

The product should feel fast, premium, simple, professional, creator-focused, modern, and intelligent. Use progressive disclosure: beginners see guided defaults, while advanced users can open provider, timing, brand, and export controls.

The primary navigation is Dashboard, Projects, Templates, Assets, and Settings. Inside a project, use a visible production rail: Idea, Research, Script, Scenes, Voice, Media, Timeline, Package, Render. Always show current step, saved state, job progress, credits impact, and the next recommended action.

Use responsive layouts with desktop-first editor ergonomics and usable mobile review/export views. Provide keyboard navigation, focus states, accessible labels, sufficient contrast, reduced-motion support, and readable caption previews. Use restrained cards for repeated items and clear icon affordances with tooltips for unfamiliar controls. Never hide destructive or billable actions behind ambiguous icons.

## 13. Technical Architecture

Recommended architecture is a modular Next.js application with TypeScript, server-side API boundaries, PostgreSQL, object storage, Redis/BullMQ workers, and provider adapters. Start as a modular monolith with separately deployable workers; split services only when measured load or team boundaries justify it.

Boundaries:
- Web app: authenticated UI, project views, editor, status updates.
- Application/API layer: authorization, validation, orchestration, transactions, idempotency.
- Domain modules: projects, scripts, scenes, assets, timeline, AI, rendering, billing, publishing.
- Worker layer: AI jobs, media processing, rendering, notifications, cleanup.
- Provider layer: adapters and health/cost policy.
- Persistence: PostgreSQL for metadata/state; S3-compatible storage for media; Redis for queue/cache/short-lived status.

Prefer server-sent events or WebSockets for job progress, with polling fallback. Use an outbox/event pattern for reliable notifications and external side effects. Use feature flags for provider and roadmap capabilities.

## 14. Technology Stack

- **Next.js + TypeScript:** unified product shell, typed server/client boundaries, routing, and deployment flexibility.
- **Tailwind CSS:** fast, consistent responsive styling with tokenized design constraints.
- **shadcn/ui:** accessible, composable primitives that remain locally customizable.
- **Lucide React:** consistent, lightweight interface iconography.
- **Framer Motion:** restrained page and state transitions without making editing feel slow.
- **Next.js API/server architecture:** appropriate for an initial modular monolith; keep workers separate from request execution.
- **PostgreSQL:** transactional relational model for projects, versions, entitlements, and auditability.
- **Prisma:** typed schema access and migrations; use SQL extensions or targeted queries when media/search needs them.
- **Zod:** runtime validation at every API and provider boundary.
- **React Hook Form:** efficient validated forms for project and settings workflows.
- **Zustand:** local editor/UI state; server truth remains in API/query caches and the database.
- **FFmpeg:** mature codecs, muxing, normalization, caption burn-in, and audio operations.
- **Remotion:** deterministic React-based compositions and reusable render templates.
- **Redis + BullMQ:** retries, delayed work, concurrency limits, priorities, and provider-specific queues.
- **S3-compatible storage:** durable large-file storage with multipart uploads and signed URLs.
- **Auth.js or Clerk:** use Auth.js when control and portability are priorities; use Clerk when managed identity and faster enterprise readiness outweigh vendor dependency. Recommendation: Auth.js with a relational adapter for initial control, or Clerk if the team has no identity expertise.
- **Stripe:** subscription, invoice, and webhook primitives; server-side entitlement reconciliation is mandatory.
- **Vitest + Playwright:** fast domain/component tests and realistic end-to-end workflows.

## 15. Database Model

Every tenant-owned record includes `workspaceId` where applicable, created/updated timestamps, and authorization checks. Use UUIDs, UTC timestamps, soft deletion for user-facing records where recovery matters, and optimistic version fields for collaborative/editor state.

| Entity | Purpose and important fields | Relationships, indexes, constraints |
|---|---|---|
| User | Identity, profile, locale, preferences, status | Has memberships, projects, usage, notifications; unique auth subject/email; index status |
| Workspace | Tenant, plan, brand and team boundary | Has members/projects/assets/subscription; unique slug; index plan/status |
| Membership | User role in workspace | User/workspace unique; role constrained to owner/admin/editor/reviewer/viewer |
| Subscription | Provider customer/subscription and entitlement state | Workspace-owned; unique provider IDs; index status/current period |
| UsageLedger | Immutable credit reservations and consumption | Workspace/user/job references; index workspace/time/type; nonnegative balance rules |
| Project | Main production container and lifecycle | Workspace/user owner; index workspace/status/updated; title required |
| ProjectSettings | Format, duration, language, tone, brand defaults | One-to-one project; dimensions and duration constrained |
| Script | Versioned editable script and generation metadata | Project/version/author; index project/status; immutable published versions |
| Scene | Script-to-visual production unit | Project/script links; ordered position unique per version; duration nonnegative |
| Voice | Voice selection/provenance and generated narration reference | Project/scene/audio; provider IDs indexed; rights metadata required |
| AudioAsset | Voice, music, or sound file metadata | Asset/storage reference; duration/codec/rights fields; checksum index |
| MediaAsset | Uploaded/generated image or source media | Workspace/project links, storage key, MIME, size, rights, provenance; checksum index |
| VideoAsset | Video-specific metadata and derived renditions | MediaAsset parent; width/height/duration/codec constraints |
| Timeline | Versioned editorial composition | One active timeline per project version; index project/version |
| TimelineTrack | Ordered typed track | Timeline parent; unique timeline/order; type constrained |
| TimelineClip | Positioned asset/text/caption clip | Track/asset/scene references; indexes track/start and asset; end > start |
| Caption | Timed text and style | Project/version/audio references; index version/start; valid time ranges |
| MusicTrack | Selected music arrangement and rights | Project/timeline/audio; index project/rights |
| SoundEffect | Selected SFX arrangement and rights | Project/timeline/audio; index project/rights |
| Thumbnail | Concepts and selected image | Project/version/asset; selected uniqueness per version |
| SEOData | Titles, description, keywords, chapters, score signals | Project/version; one package per version; links preserve user edits |
| RenderJob | Asynchronous composition/encoding state | Project/version/requester; index status/created; idempotency unique |
| Export | Completed downloadable artifact | RenderJob/project; storage key, checksum, expiry; index project/created |
| Template | Reusable production defaults | Workspace/creator/system visibility; slug/version index; immutable versions |
| AIJob | Normalized provider generation request | Type/status/provider/requester/project; idempotency key unique; retry fields |
| Notification | User/workspace event | Recipient/index unread; dedupe key unique per event |
| AuditLog | Security and administrative history | Actor/workspace/action/resource/time; immutable and indexed |
| ConnectedAccount | YouTube/OAuth provider connection | Workspace/user; encrypted token material; provider account unique |

## 16. API Architecture

All endpoints are versioned, authenticated where stated, validate with Zod, return request IDs, and use consistent `{data, error, meta}` envelopes. Mutations accept idempotency keys when they create jobs, charges, or external side effects.

### Authentication and users
- `POST /api/auth/*`: Auth.js-managed sign-in/session; unauthenticated except provider callback; errors include invalid state and denied consent.
- `GET/PATCH /api/me`: read/update profile and preferences; authenticated; errors validation/forbidden.
- `GET/POST/PATCH/DELETE /api/workspaces` and memberships: manage tenant and roles; owner/admin as required; errors conflict/forbidden.

### Projects, scripts, scenes
- `GET/POST /api/projects`: list/create with settings; authenticated workspace member; errors validation/quota.
- `GET/PATCH/DELETE /api/projects/:id`: read/update/archive; project member; not found/forbidden/conflict.
- `POST /api/projects/:id/duplicate`: duplicate selected version/assets; editor; quota/storage errors.
- `GET/POST/PATCH /api/projects/:id/scripts` and `/scenes`: CRUD/version actions; project editor; validation/conflict.
- `POST /api/scripts/:id/actions`: rewrite, shorten, expand, translate, regenerate section; editor plus credits; provider/limit errors.

### AI generation and voices
- `POST /api/ai/ideas`, `/research`, `/outline`, `/script`, `/scene-briefs`: create AIJob; authenticated, plan/credit checked; validation, moderation, provider unavailable.
- `GET /api/ai/jobs/:id`: status/result; job owner/project member; not found/forbidden.
- `POST /api/voices/preview`, `/generate`: preview or queue narration; editor and credit confirmation; unsupported voice, moderation, provider, quota.
- `GET /api/voices`: list allowed voices by language/provider; authenticated.

### Media and timeline
- `POST /api/media/upload-intents`: validate metadata and return signed multipart instructions; editor; size/type/quota errors.
- `POST /api/media/complete`, `GET /api/media`, `GET/PATCH/DELETE /api/media/:id`: finalize/search/manage assets; member; checksum, rights, forbidden.
- `POST /api/images/generate`, `POST /api/videos/generate`: queue generation; editor plus explicit estimated-cost confirmation; moderation/provider/quota.
- `GET/PATCH /api/projects/:id/timeline`, `POST /api/timelines/:id/validate`: read/save/validate serialized editor state; editor; conflict/invalid asset.
- `POST /api/captions/generate`, `GET/PATCH /api/captions/:id`, `GET /api/captions/:id/download`: captions and SRT/VTT; editor; transcription/format errors.

### Rendering, packaging, publishing
- `POST /api/projects/:id/render`: validate snapshot and queue render; editor plus credits; invalid state/quota.
- `GET/POST /api/render-jobs/:id/cancel`, `GET /api/projects/:id/exports`: status/cancel/list; member or editor as appropriate.
- `GET/POST/PATCH /api/projects/:id/thumbnail`, `/seo`: generate or edit package; editor; validation/credits.
- `POST /api/integrations/youtube/connect`, `GET /api/integrations/youtube/channels`, `POST /api/projects/:id/publish`: OAuth/upload/publish; explicit editor confirmation; OAuth, quota, YouTube, and conflict errors.

### Billing, usage, analytics
- `GET /api/usage`, `POST /api/usage/estimate`: balance/history/cost estimate; member; forbidden.
- `POST /api/billing/checkout`, `GET /api/billing/portal`, `POST /api/billing/webhook`: Stripe flow; checkout authenticated, webhook signature verified; errors signature, payment, entitlement mismatch.
- `GET /api/analytics/projects/:id` and workspace aggregates: permitted member/admin; privacy and aggregation rules apply.

## 17. Background Jobs

Do not run video/image generation, voice synthesis, large uploads, transcription, thumbnail generation, or final rendering in a normal HTTP request. The request creates an authenticated, idempotent AIJob or RenderJob, reserves credits, and enqueues work.

**Flow:** request -> validate and authorize -> reserve credits -> create job -> BullMQ queue -> worker -> provider adapter -> normalize/store result -> update database transactionally -> release or settle reservation -> notification -> UI status update.

Queues should be separated by capability: text/research, voice, image, video, transcription, media processing, render, publishing, notifications, and cleanup. Each has concurrency, timeout, retry/backoff, provider rate limit, and dead-letter policy. Retries reuse idempotency keys and must not double-charge. Workers emit structured logs and heartbeat progress. Admins can inspect and retry safe failures.

## 18. File/Storage Architecture

Store original and derived media in private S3-compatible buckets with keys scoped by workspace/project/asset/version. PostgreSQL stores metadata, not binary content. Uploads use short-lived signed multipart URLs; completion triggers MIME sniffing, size/dimension/duration validation, malware scanning where available, and a derived-preview job.

Use CDN delivery only through signed URLs. Retain originals according to plan and legal needs; expire temporary provider files, failed-job intermediates, previews, and deleted-user assets through lifecycle jobs. Deletion is asynchronous, auditable, and handles references before removing bytes. Exports include checksum and content-disposition metadata.

## 19. Security

Use secure, preferably passwordless or MFA-capable authentication; short-lived sessions; CSRF protection; secure cookies; session revocation; and OAuth PKCE/state. Enforce workspace/project authorization server-side on every read and mutation. Never rely on client-selected workspace IDs.

Encrypt secrets at rest, isolate provider keys server-side, rotate keys, redact prompts/tokens from logs, and use secret management. Validate file extension, MIME, magic bytes, size, duration, dimensions, and decompression risk. Rate-limit by user, workspace, IP, provider, and expensive operation. Use per-plan concurrency and daily spend caps.

Verify Stripe and YouTube webhooks cryptographically, reject replayed events, and process idempotently. Moderate user prompts and generated media according to policy, provide abuse reporting, and maintain an audit trail for administrative actions. Validate all JSON, URLs, rich text, and metadata; sanitize rendered text and prevent SSRF when ingesting remote sources.

## 20. Usage/Credits

Credits are a ledger-backed prepaid allowance, not a mutable number. A generation creates a reservation with operation, estimated units, provider, project, and idempotency key; success settles actual usage, failure releases unused reservation, and cancellation follows a documented partial-charge policy.

Cost categories include text tokens, research/retrieval, voice characters or seconds, image generations, video seconds, transcription minutes, storage, and render minutes/quality. Show estimated cost before expensive actions and a running total during multi-step generation. Default guardrails: per-job maximum, daily workspace budget, concurrency cap, confirmation above threshold, and optional hard stop.

When credits run out, prevent new billable work, preserve existing drafts, allow free local edits and downloads already paid for, explain the blocked operation, and provide upgrade/top-up routes. Never silently downgrade quality or switch provider in a way that changes expected output.

Suggested tiers, with exact prices determined by research:
- **Free:** limited credits, short videos, standard resolution, watermark or limited exports, one/few projects, community support.
- **Creator:** recurring credits, longer duration, HD, more storage, standard voices, more projects.
- **Pro:** higher credits/concurrency, high resolution, premium providers, brand kits, priority rendering, version history.
- **Agency:** workspace seats/roles, shared libraries, approvals, client access, pooled credits, audit and priority support.

## 21. Billing

Stripe is the payment system of record for money; the application maintains a reconciled entitlement projection. Handle checkout completion, renewal, payment failure, cancellation, upgrade, downgrade, refund, and dispute webhooks. Apply grace periods explicitly. Plan limits are evaluated server-side and shown in the UI. Invoice and tax requirements vary by market and must be confirmed before launch.

## 22. Analytics

Track privacy-conscious product events: project created, idea accepted, generation started/completed/failed, script edited, scene approved, asset selected, render started/completed/failed, export downloaded, publish started/completed, credit estimate viewed, and subscription event. Include workspace/project dimensions only where permitted; exclude raw script/media from analytics.

Dashboards should measure funnel conversion, time-to-first-draft, time-to-export, job reliability, cost per successful project, feature adoption, credit burn, retention, and support/error rates. Define events and schema before instrumenting; honor deletion and consent requirements.

## 23. Error Handling

Every async job has visible states: queued, running, needs action, succeeded, failed, canceled, and expired. Errors use stable codes, human-readable next steps, request IDs, retry eligibility, and provider-safe details. Preserve partial outputs and user edits. A failed render must identify the affected asset or validation issue when possible.

Recoverable errors offer retry with the same idempotency key or a corrected action. Non-recoverable moderation, permission, billing, and rights failures explain the constraint without exposing internal secrets. Add global error boundaries, offline/autosave indicators, timeout handling, and job reconciliation for worker or browser disconnects.

## 24. MVP Scope

The MVP is the smallest version that can produce a complete YouTube-ready video:

- Authenticated single-user or small workspace project creation.
- Dashboard, project settings, autosave, project lifecycle.
- Idea analysis and outline generation.
- Research notes with source links and disclaimers.
- Editable script with section regeneration.
- Scene planner with manual approval.
- Provider-adapter voice generation for supported voices.
- Upload and licensed/library media selection; image generation may be limited or feature-flagged.
- Captions from speech-to-text with SRT/VTT and one or more styles.
- Practical multi-track editor: scenes, images/video, voice, music, captions, trim/split/reorder, transforms, volume/fades, preview, undo/redo.
- Thumbnail concept generation/editing, title, description, and keyword assistance.
- FFmpeg/Remotion render, MP4 export, signed download, export history.
- Credit ledger, cost estimates, basic Free/paid entitlement enforcement.
- Notifications, structured errors, audit events, core observability.

MVP exclusions: YouTube publishing, AI video generation, real-time collaboration, advanced keyframes/effects, agency approvals, broad social publishing, and extensive provider marketplace.

## 25. Phase 2

YouTube OAuth publishing and scheduling; AI image generation at scale; Shorts repurposing; more voice providers; richer templates and brand kits; comments/review; workspace roles; batch generation; advanced caption styles; waveform and beat-aware editing; improved research retrieval; admin operations console.

## 26. Phase 3

AI video generation for bounded scenes; collaborative editing with conflict handling; agency client portals; version comparison; quality and fact-check agents; provider routing optimization; content calendar; multi-channel publishing; performance-informed recommendations; team-level budgets and approvals.

## 27. Future Roadmap

Explore creator-specific fine-tuning with consent, custom voice/brand governance, automatic back-catalog repurposing, multilingual dubbing, automatic chaptering, channel-level learning, mobile review app, marketplace templates, enterprise SSO/SCIM, and additional publishing destinations. These require evidence from usage, cost, policy, and retention data.

## 28. Acceptance Criteria

### MVP platform and projects
- User can sign up, sign in, create a project, select format/type/duration, and reopen it after refresh.
- Project state is isolated by workspace and unauthorized access returns a non-disclosing error.
- Dashboard shows project status, last update, job progress, credit balance, and actionable failures.

### Idea, research, and script
- User enters a topic and receives structured idea/angle/hook output with progress.
- User can choose video length, audience, tone, and language.
- Research results show source links, timestamps, confidence/disclaimer, and editable notes.
- Generated outline and script are saved, editable, versioned, and section-regenerable without overwriting unrelated edits.
- Provider failure leaves the project intact and offers retry without duplicate credit consumption.

### Scenes and assets
- Script can be converted into ordered scenes with narration, visual brief, duration, and on-screen text.
- User can reorder, split, merge, approve, and replace scenes.
- User can upload valid media, see processing status, search assets, and attach assets to scenes.
- Invalid, missing, or unauthorized assets block rendering with a specific repair action.

### Voice and captions
- User can preview a voice, configure supported language/style controls, estimate cost, and confirm generation.
- Generated narration is stored, playable, linked to scenes, and retryable.
- Captions can be generated, edited, retimed, styled, previewed, and downloaded as SRT/VTT.
- Caption timing and audio version are visibly related; changed audio marks captions for review.

### Editor and render
- Timeline displays stable tracks and clips for visual, voice, music, SFX, text, and captions.
- User can trim, split, move, reorder, crop/scale, change speed where supported, set volume/fades, and undo/redo.
- Preview respects selected aspect ratio and does not obscure controls or captions.
- Render validates the snapshot, displays progress, survives browser closure, and produces a playable MP4 with expected dimensions and audio.
- Export uses an expiring signed URL and records checksum, format, size, and created time.

### Packaging and usage
- User can generate and edit multiple title, description, keyword, and thumbnail options.
- Metadata is clearly labeled as suggestions and is saved with the project version.
- Every billable job displays estimated cost, reserves credits, settles actual use once, and prevents execution when limits are exceeded.
- Usage history explains operation, project, provider, units, credits, status, and time.

### Reliability, security, and operations
- Async jobs show queued/running/success/failure/canceled states and stable error codes.
- API inputs are schema-validated; rate limits and authorization are tested.
- Provider keys, OAuth tokens, signed URLs, and payment secrets never appear in client bundles or logs.
- Admins can inspect job state and retry safe failures with an audit reason.
- Critical flows have Vitest coverage and Playwright coverage for create -> generate -> edit -> render -> export.

## 29. Risks

- **AI factual errors:** source-linked research, confidence labels, user verification, and no guarantee language.
- **Inconsistent generation quality:** provider abstraction, evaluation sets, prompt/schema versioning, and human approval gates.
- **Runaway provider spend:** reservations, estimates, caps, concurrency limits, quotas, and reconciliation.
- **Render complexity and failures:** immutable snapshots, media validation, worker isolation, fixtures, and staged resolution limits.
- **Copyright and rights ambiguity:** provenance, rights status, user acknowledgements, licensed library filters, and export warnings.
- **Provider outages or policy changes:** adapters, health checks, fallback policy, timeouts, and transparent status.
- **Editor scope creep:** ship core non-destructive editing first; measure usage before advanced NLE features.
- **Privacy and sensitive content:** least privilege, encryption, retention controls, deletion workflows, and policy enforcement.
- **YouTube API constraints:** quota-aware publishing, explicit consent, idempotent upload state, and reconciliation.
- **Poor creator adoption:** onboard through a guided first project, preserve manual controls, and evaluate output quality not only generation speed.

## 30. Technical Decisions

1. Start with a modular monolith plus workers; avoid premature microservices.
2. Use PostgreSQL as the source of truth for project state, entitlements, and job metadata.
3. Keep media in private object storage and pass only signed URLs to clients/workers.
4. Treat timeline and render inputs as versioned immutable snapshots.
5. Use provider adapters with normalized contracts, errors, costs, and status.
6. Reserve credits before expensive work and reconcile after completion.
7. Use BullMQ for durable asynchronous orchestration and separate queues by resource profile.
8. Use FFmpeg for media operations and Remotion for deterministic compositions.
9. Keep local editor state fast, but persist through explicit versioned APIs and autosave.
10. Make publishing an explicit, later-stage side effect requiring confirmation.
11. Prefer structured outputs and schema validation for all AI results.
12. Build evaluation fixtures for script coherence, scene mapping, captions, render validity, and cost accounting before expanding providers.

## 31. Open Questions

- Which initial language, countries, and tax/payment markets are in scope?
- Which voice, image, research, and text providers meet quality, latency, commercial-use, and data-retention requirements?
- Is the initial product single-user, workspace-first, or both behind a simple membership model?
- What exact credit unit is easiest for creators to understand: seconds, characters, tokens, or abstract credits with transparent conversion?
- Which licensed music/SFX catalog and rights territories are available at launch?
- Will MVP rendering support only 1080p, or also 4K for selected plans?
- What is the minimum browser/device support matrix for the editor?
- Which content safety policy, age restrictions, disclosure text, and human escalation path are required?
- What are acceptable target costs and latency for a typical five-minute video?
- Which YouTube scopes and publishing features are approved for the first integration?
- What retention, deletion, export, and model-training consent policies will legal approve?

## Build Order

1. Establish repository structure, environment/secrets handling, design tokens, authentication, workspace isolation, and error/request-ID conventions.
2. Create PostgreSQL schema/migrations for users, workspaces, projects, versions, assets, jobs, usage ledger, and notifications.
3. Build dashboard, project creation, settings, autosave, project lifecycle, and basic responsive shell.
4. Implement provider-neutral Text AI, research, idea, outline, and script flows with mocked adapters and job status UI.
5. Implement scenes and media upload/library with signed storage URLs and validation.
6. Implement Voice and Speech-to-Text adapters, narration generation, caption editing, and SRT/VTT export.
7. Implement the MVP timeline model and editor operations with undo/redo and persisted snapshots.
8. Implement music/SFX selection, audio mixing rules, thumbnail, title, description, and SEO flows.
9. Implement BullMQ workers, FFmpeg/Remotion rendering, validation, signed exports, retries, and notifications.
10. Add credit reservations, usage reconciliation, plan limits, Stripe entitlements, and cost dashboards.
11. Add observability, security tests, accessibility checks, failure recovery, backup/restore drills, and Playwright end-to-end coverage.
12. Release a controlled beta, evaluate completion quality/cost/latency, then prioritize Phase 2 publishing, Shorts, collaboration, and image/video generation.
