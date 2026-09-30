import { z } from "zod";
import { videoDurationSchema } from "@/config/video-duration";

export const createProjectSchema = z.object({
  title: z.string().trim().min(1).max(120),
  description: z.string().trim().max(2000).optional(),
  durationSeconds: videoDurationSchema.default(60),
  durationPreset: z.string().trim().max(16).default("60s"),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;