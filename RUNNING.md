# Running CreatorFlow AI on Windows

## Prerequisites

Verify tools before installing anything:

```powershell
git --version
node --version
npm.cmd --version
& 'C:\Program Files\PostgreSQL\18\bin\psql.exe' --version
docker ps
ffmpeg -version
```

Node.js 20+, PostgreSQL 16+, Redis 7+, and FFmpeg 6+ are required. In this workspace Node.js 24, PostgreSQL 18, FFmpeg 9, and Redis 7.4.11 in a container named `redis` were verified. Start Redis using `docker start redis`; verify it with `docker exec redis redis-cli ping`.

## Install packages

```powershell
npm.cmd install
npm.cmd run db:generate
```

Prisma generation is explicit and should be run after install.

## PostgreSQL

Start the Windows service if necessary:

```powershell
Start-Service postgresql-x64-18
```

Create a local database and role using `psql` or pgAdmin. Example, executed as a PostgreSQL superuser; replace the local development password:

```sql
CREATE ROLE creatorflow LOGIN PASSWORD 'replace-with-local-password';
CREATE DATABASE creatorflow OWNER creatorflow;
```

Set `DATABASE_URL` in `.env`, then initialize the development schema:

```powershell
npm.cmd run db:generate
npm.cmd run db:migrate -- --name init
```

`db:push` is available for disposable local databases; prefer migrations for normal development. `db:studio` opens Prisma Studio.

## Redis

```powershell
docker start redis
docker exec redis redis-cli ping
docker exec redis redis-server --version
```

Expected ping response: `PONG`. Ensure port 6379 is published and set `REDIS_URL=redis://localhost:6379`.

## FFmpeg

```powershell
ffmpeg -version
```

Use `FFMPEG_PATH=ffmpeg` when FFmpeg is on `PATH`; otherwise set its full executable path. Rendering is not implemented yet; the health endpoint currently reports renderer configuration only.

## Environment and run

```powershell
Copy-Item .env.example .env
npm.cmd run dev
```

Open `http://localhost:3000`. Optional AI, voice, object-storage, and Stripe keys are not needed for local boot. See [ENVIRONMENT.md](ENVIRONMENT.md).

## Checks

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npm.cmd run build
```

Other commands: `npm.cmd run test:watch`, `npm.cmd run db:studio`, and `npm.cmd run worker:render` (requires Redis; render processing currently reports unimplemented work).