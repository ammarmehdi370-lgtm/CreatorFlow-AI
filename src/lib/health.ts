import { checkDatabase } from "@/lib/db";
import { checkRedis } from "@/lib/redis";
import { checkRenderer } from "@/lib/renderer";

export async function getHealthStatus() {
  const [database, redis, renderer] = await Promise.all([checkDatabase(), checkRedis(), checkRenderer()]);
  const services = {
    application: "ok" as const,
    database: database ? "ok" as const : "unavailable" as const,
    redis: redis ? "ok" as const : "unavailable" as const,
    renderer: renderer ? "ok" as const : "unavailable" as const,
  };
  const healthy = database && redis && renderer;
  return { status: healthy ? "ok" : "degraded", services };
}