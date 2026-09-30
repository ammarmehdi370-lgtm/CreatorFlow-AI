# Environment variables

Copy `.env.example` to `.env`. Third-party API keys are not needed for local boot. Database and Redis URLs are required for their respective services; the UI can render without those connections, but `/api/health` reports unavailable dependencies.

| Variable | Required for | Local development |
| --- | --- | --- |
| `NODE_ENV` | Runtime mode | `development` |
| `DATABASE_URL` | Prisma/PostgreSQL | PostgreSQL connection URL |
| `REDIS_URL` | Health and BullMQ | `redis://localhost:6379` |
| `NEXT_PUBLIC_APP_URL` | Public links/client origin | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Future session/auth integration | Generate a unique secret before auth is enabled |
| `NEXTAUTH_URL` | Future auth integration | `http://localhost:3000` |
| `FFMPEG_PATH` | Renderer executable discovery | `ffmpeg` or absolute path |
| `RENDER_OUTPUT_DIR` | Local render output | `./var/renders` |
| `S3_ENDPOINT`, `S3_REGION`, `S3_BUCKET`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_PUBLIC_URL` | S3-compatible media storage | Leave blank until storage is enabled |
| `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY` | AI script/metadata providers | Leave blank until provider selected |
| `DEEPGRAM_API_KEY`, `ASSEMBLYAI_API_KEY` | Speech recognition/captions | Leave blank until provider selected |
| `ELEVENLABS_API_KEY`, `PLAYHT_API_KEY` | Voice generation | Leave blank until provider selected |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Billing | Leave blank until Stripe is enabled |

Secrets must remain server-side. Only variables prefixed with `NEXT_PUBLIC_` are exposed to browser code. Never commit `.env` or include secret values in health responses or logs.