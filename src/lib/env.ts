import { z } from 'zod';

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
});

const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(1).optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  S3_ENDPOINT: z.string().url().optional(),
  S3_REGION: z.string().optional(),
  S3_BUCKET: z.string().optional(),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  GOOGLE_API_KEY: z.string().optional(),
  DEEPGRAM_API_KEY: z.string().optional(),
  ASSEMBLYAI_API_KEY: z.string().optional(),
  ELEVENLABS_API_KEY: z.string().optional(),
  PLAYHT_API_KEY: z.string().optional(),
});

const env = {
  ...process.env,
};

const parsedServer = serverSchema.safeParse(env);
if (!parsedServer.success) {
  throw new Error(`Invalid server environment: ${JSON.stringify(parsedServer.error.flatten().fieldErrors, null, 2)}`);
}

const parsedClient = clientSchema.safeParse(env);
if (!parsedClient.success) {
  throw new Error(`Invalid client environment: ${JSON.stringify(parsedClient.error.flatten().fieldErrors, null, 2)}`);
}

export const serverEnv = parsedServer.data;
export const clientEnv = parsedClient.data;

export const isProd = serverEnv.NODE_ENV === 'production';
export const isDev = serverEnv.NODE_ENV === 'development';
