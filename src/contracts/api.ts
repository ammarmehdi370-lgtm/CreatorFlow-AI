import { z } from "zod";

export const videoFormatSchema = z.enum(["LANDSCAPE", "SHORT", "SQUARE"]);

export const createProjectSchema = z.object({
  title: z.string().trim().min(1).max(160),
  description: z.string().max(2000).optional(),
  format: videoFormatSchema.default("LANDSCAPE"),
  targetSeconds: z.number().int().min(15).max(3600).default(300),
  language: z.string().min(2).max(12).default("en"),
  tone: z.string().min(1).max(80).default("clear"),
});

export const createAiJobSchema = z.object({
  projectId: z.string().uuid(),
  input: z.record(z.string(), z.unknown()),
  provider: z.string().min(1).max(80).optional(),
  estimatedCredits: z.number().positive().max(100000),
});

export const createRenderSchema = z.object({
  projectId: z.string().uuid(),
  timelineId: z.string().uuid(),
  width: z.number().int().positive().max(7680),
  height: z.number().int().positive().max(7680),
  quality: z.enum(["PREVIEW", "STANDARD", "HIGH"]).default("STANDARD"),
  estimatedCredits: z.number().nonnegative().max(100000),
});

export const uploadIntentSchema = z.object({
  projectId: z.string().uuid().optional(),
  filename: z.string().min(1).max(255),
  mimeType: z.string().regex(/^[\w.-]+\/[\w.+-]+$/),
  sizeBytes: z.number().int().positive().max(20_000_000_000),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type CreateAiJobInput = z.infer<typeof createAiJobSchema>;
export type CreateRenderInput = z.infer<typeof createRenderSchema>;
export type UploadIntentInput = z.infer<typeof uploadIntentSchema>;

export type ApiError = {
  code: string;
  message: string;
  requestId: string;
  retryable: boolean;
};

export type ApiResponse<T> = {
  data: T | null;
  error: ApiError | null;
  meta: { requestId: string };
};
