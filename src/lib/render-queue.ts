import { Queue } from "bullmq";
import { redisConnectionOptions } from "@/config/redis-connection";

export interface RenderQueuePayload {
  projectId: string;
  renderJobId: string;
}

let queue: Queue<RenderQueuePayload> | undefined;

export function getRenderQueue(): Queue<RenderQueuePayload> {
  if (queue) return queue;
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) throw new Error("REDIS_URL is required to enqueue render work.");
  queue = new Queue<RenderQueuePayload>("render", { connection: redisConnectionOptions(redisUrl) });
  return queue;
}

export async function enqueueRender(payload: RenderQueuePayload) {
  return getRenderQueue().add("render-project", payload, {
    attempts: 3,
    backoff: { type: "exponential", delay: 1000 },
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 500 },
  });
}