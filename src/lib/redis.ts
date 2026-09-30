import Redis from "ioredis";

const redisGlobal = globalThis as typeof globalThis & { redis?: Redis };

export function getRedis(): Redis {
  if (redisGlobal.redis) return redisGlobal.redis;
  const redis = new Redis(process.env.REDIS_URL ?? "redis://127.0.0.1:6379", {
    lazyConnect: true,
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
  });
  if (process.env.NODE_ENV !== "production") redisGlobal.redis = redis;
  return redis;
}

export async function checkRedis(): Promise<boolean> {
  const redis = new Redis(process.env.REDIS_URL ?? "redis://127.0.0.1:6379", {
    lazyConnect: true,
    connectTimeout: 1500,
    maxRetriesPerRequest: 1,
    retryStrategy: () => null,
  });
  try {
    await redis.connect();
    return (await redis.ping()) === "PONG";
  } catch {
    return false;
  } finally {
    redis.disconnect();
  }
}