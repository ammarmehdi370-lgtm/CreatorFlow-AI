# CreatorFlow AI

CreatorFlow AI is a modular Next.js monolith foundation for planning and producing YouTube-ready videos. The initial app includes a responsive design system, route placeholders, PostgreSQL/Prisma data model, Redis/BullMQ boundary, and centralized video-duration utilities.

## Requirements

- Git
- Node.js 20 or newer and npm
- PostgreSQL 16 or newer
- Redis 7 or newer
- FFmpeg 6 or newer
- VS Code or another TypeScript editor

See [RUNNING.md](RUNNING.md) for Windows setup and commands. Copy `.env.example` to `.env` and configure local database/cache URLs before using database-backed features.

## Quick start

```powershell
Copy-Item .env.example .env
npm.cmd run db:generate
npm.cmd run dev
```

Open `http://localhost:3000`. Database creation and initialization are covered in [RUNNING.md](RUNNING.md).

## Project structure

```text
src/
  app/            App Router pages and API handlers
  components/     Shared layouts and UI primitives
  config/         Environment, duration, and service configuration
  lib/            Database, validation, health, and queue utilities
  repositories/   Persistence adapters (feature work follows)
  services/       Business services (feature work follows)
  types/          Shared domain types (feature work follows)
  workers/        Background workers
prisma/           Core PostgreSQL schema
```

## Current scope

Authentication, project CRUD, actual rendering, external-provider integrations, and billing are not active in this foundation. The visible routes are intentional placeholders, not claims that those workflows already work. See [ARCHITECTURE.md](ARCHITECTURE.md), [DEVELOPMENT.md](DEVELOPMENT.md), and [ENVIRONMENT.md](ENVIRONMENT.md).This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
