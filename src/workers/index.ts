import { Worker } from "bullmq";
import { queueNames } from "@/server/queues/queues";

const connection = { url: process.env.REDIS_URL ?? "redis://localhost:6379" };

for (const name of queueNames) {
  new Worker(name, async (job) => {
    console.info(JSON.stringify({ event: "job.received", queue: name, jobId: job.id, payload: job.data }));
    // Capability-specific processors will be registered here after the domain services exist.
  }, { connection, concurrency: name === "render" ? 1 : 3 });
}

console.info(`CreatorFlow workers started: ${queueNames.join(", ")}`);
