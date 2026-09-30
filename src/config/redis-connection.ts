import type { RedisOptions } from "ioredis";

export function redisConnectionOptions(redisUrl: string): RedisOptions {
  const url = new URL(redisUrl);
  if (url.protocol !== "redis:" && url.protocol !== "rediss:") {
    throw new TypeError("REDIS_URL must use the redis:// or rediss:// protocol.");
  }
  const options: RedisOptions = {
    host: url.hostname,
    port: Number(url.port || 6379),
    maxRetriesPerRequest: null,
  };
  if (url.username) options.username = decodeURIComponent(url.username);
  if (url.password) options.password = decodeURIComponent(url.password);
  if (url.protocol === "rediss:") options.tls = {};
  const database = url.pathname.slice(1);
  if (database) options.db = Number(database);
  return options;
}