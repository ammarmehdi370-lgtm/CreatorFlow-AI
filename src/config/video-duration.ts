import { z } from "zod";

export const VIDEO_DURATIONS = [
  { id: "15s", label: "15 seconds", seconds: 15 },
  { id: "30s", label: "30 seconds", seconds: 30 },
  { id: "60s", label: "1 minute", seconds: 60 },
  { id: "90s", label: "90 seconds", seconds: 90 },
  { id: "2m", label: "2 minutes", seconds: 120 },
  { id: "3m", label: "3 minutes", seconds: 180 },
  { id: "5m", label: "5 minutes", seconds: 300 },
  { id: "10m", label: "10 minutes", seconds: 600 },
] as const;

export const MIN_VIDEO_DURATION_SECONDS = 15;
export const MAX_VIDEO_DURATION_SECONDS = 600;
export const videoDurationSchema = z.number().int()
  .min(MIN_VIDEO_DURATION_SECONDS)
  .max(MAX_VIDEO_DURATION_SECONDS);

export const durationSelectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("preset"),
    presetId: z.enum(VIDEO_DURATIONS.map(({ id }) => id) as [string, ...string[]]),
  }),
  z.object({ type: z.literal("custom"), seconds: videoDurationSchema }),
]);

export type VideoDurationPreset = (typeof VIDEO_DURATIONS)[number];
export type DurationSelection = z.infer<typeof durationSelectionSchema>;

export interface ContentBudget {
  words: { min: number; max: number };
  scenes: { min: number; max: number };
  narrationSeconds: number;
}

export function isValidDuration(seconds: number): boolean {
  return videoDurationSchema.safeParse(seconds).success;
}

export function formatDuration(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    throw new RangeError("Duration must be a finite, non-negative number.");
  }
  const seconds = Math.floor(totalSeconds);
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return minutes === 0 ? `${remainder}s` : remainder === 0 ? `${minutes}m` : `${minutes}m ${remainder}s`;
}

export function secondsToMilliseconds(seconds: number): number {
  if (!Number.isFinite(seconds) || seconds < 0) {
    throw new RangeError("Duration must be a finite, non-negative number.");
  }
  return Math.round(seconds * 1000);
}

export function getContentBudget(seconds: number): ContentBudget {
  if (!isValidDuration(seconds)) {
    throw new RangeError(`Duration must be an integer between ${MIN_VIDEO_DURATION_SECONDS} and ${MAX_VIDEO_DURATION_SECONDS} seconds.`);
  }
  const narrationSeconds = Math.round(seconds * 0.85);
  return {
    words: {
      min: Math.round((narrationSeconds * 130) / 60),
      max: Math.round((narrationSeconds * 160) / 60),
    },
    scenes: {
      min: Math.max(1, Math.floor(seconds / 8)),
      max: Math.ceil(seconds / 4),
    },
    narrationSeconds,
  };
}