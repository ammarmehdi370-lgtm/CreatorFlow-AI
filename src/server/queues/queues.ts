import { Queue } from "bullmq";

export const queueNames = ["ai-text", "ai-voice", "ai-image", "ai-video", "media", "transcription", "render", "publishing", "notifications", "cleanup"] as const;
export type QueueName = (typeof queueNames)[number];

const connection = { url: process.env.REDIS_URL ?? "redis://localhost:6379" };
export const queues = Object.fromEntries(queueNames.map((name) => [name, new Queue(name, { connection })])) as Record<QueueName, Queue>;

export type QueuePayload = { jobId: string; workspaceId: string; idempotencyKey: string };
export async function enqueue(name: QueueName, payload: QueuePayload) {
  return queues[name].add(name, payload, { jobId: payload.jobId, removeOnComplete: 1000, removeOnFail: 5000 });
}
