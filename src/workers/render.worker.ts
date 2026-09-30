import { Worker } from "bullmq";
import { redisConnectionOptions } from "@/config/redis-connection";

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) throw new Error("REDIS_URL is required to run the render worker.");

const worker = new Worker("render", async (job) => {
  await job.updateProgress(0);
  throw new Error(`Render processing is not implemented yet (job ${job.id}).`);
}, { connection: redisConnectionOptions(redisUrl) });

worker.on("completed", (job) => console.info(`Render job ${job.id} completed.`));
worker.on("failed", (job, error) => console.error(`Render job ${job?.id ?? "unknown"} failed: ${error.message}`));

async function shutdown() {
  await worker.close();
  process.exit(0);
}

process.on("SIGINT", () => void shutdown());
process.on("SIGTERM", () => void shutdown());