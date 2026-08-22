# CreatorFlow AI

CreatorFlow AI is an AI-powered production studio for YouTube creators. It supports guided ideation, research, scripting, scene planning, voice generation, asset management, timeline editing, captions, thumbnail/SEO packaging, rendering, and export.

## Architecture overview

- Next.js + TypeScript application shell
- PostgreSQL + Prisma for metadata and state
- Redis + BullMQ for async jobs
- S3-compatible object storage for media and exports
- Provider adapter layer for text, research, voice, image, video, speech-to-text, and recommendation systems
- FFmpeg and Remotion for rendering and composition

## Quick start

1. Copy `.env.example` to `.env.local` and populate the required variables.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Postgres and Redis locally.
4. Generate Prisma client and apply schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Start the app:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` — local web app
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — linting
- `npm run typecheck` — TypeScript validation
- `npm run test` — unit tests
- `npm run db:push` — sync Prisma with database
- `npm run db:studio` — Prisma Studio

## Frontend routes

The product shell is available at `/dashboard` with project creation at `/projects/new`. Project workspaces use `/projects/:projectId` and preserve the active production step in the `step` query parameter. The workspace rail covers Idea, Research, Script, Scenes, Voice, Media, Timeline, Package, and Render/Export. `/assets`, `/settings`, and `/usage` provide the supporting workspace views.

The current development auth adapter uses the default `dev-user` identity when no `x-user-id` header is supplied. The frontend calls the existing project, script, AI, voice, asset, timeline, job, render, export, and usage endpoints directly. Uploads, billing, profile persistence, captions, and YouTube publishing remain provider/backend capabilities that are explicitly surfaced as unavailable until their server contracts exist; the UI does not fabricate those operations.

## Project structure

```text
src/
  app/
  lib/
  test/
prisma/
.env.example
PRD.md
```
