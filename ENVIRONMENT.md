# Environment Configuration

## Required variables

- `DATABASE_URL`
- `REDIS_URL`
- `NODE_ENV`

## Optional variables

- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `S3_ENDPOINT`
- `S3_REGION`
- `S3_BUCKET`
- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GOOGLE_API_KEY`
- `DEEPGRAM_API_KEY`
- `ASSEMBLYAI_API_KEY`
- `ELEVENLABS_API_KEY`
- `PLAYHT_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

## Public frontend variables

These are safe to expose to the browser:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## Server-only secrets

These must never be exposed to browser bundles or frontend logs:

- `DATABASE_URL`
- `REDIS_URL`
- `NEXTAUTH_SECRET`
- all API keys and webhook secrets

## Development vs production

- Development: local Postgres, Redis, local S3-compatible storage, mock or local provider values.
- Production: managed Postgres, managed Redis, S3-compatible storage, secure secret manager, and verified provider credentials.
