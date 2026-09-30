import { z } from "zod";

const optionalUrl = z.string().url().optional().or(z.literal(""));

const environmentSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().optional(),
  REDIS_URL: optionalUrl,
  NEXT_PUBLIC_APP_URL: optionalUrl,
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: optionalUrl,
  FFMPEG_PATH: z.string().default("ffmpeg"),
  RENDER_OUTPUT_DIR: z.string().default("./var/renders"),
  S3_ENDPOINT: optionalUrl,
  S3_REGION: z.string().optional(),
  S3_BUCKET: z.string().optional(),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  S3_PUBLIC_URL: optionalUrl,
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  GOOGLE_API_KEY: z.string().optional(),
  DEEPGRAM_API_KEY: z.string().optional(),
  ASSEMBLYAI_API_KEY: z.string().optional(),
  ELEVENLABS_API_KEY: z.string().optional(),
  PLAYHT_API_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
});

export type Environment = z.infer<typeof environmentSchema>;

export function readEnvironment(source: Record<string, string | undefined> = process.env): Environment {
  return environmentSchema.parse(source);
}

export const env = readEnvironment();