import { z } from 'zod';

export const projectInputSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().max(1000).optional(),
  format: z.enum(['16:9', '9:16', '1:1']).optional(),
  language: z.string().default('en'),
  status: z.enum(['draft', 'active', 'archived']).default('draft'),
});

export const scriptInputSchema = z.object({
  title: z.string().min(1).max(120),
  content: z.string().min(1).max(20000),
  metadata: z.record(z.unknown()).default({}),
});

export const voiceInputSchema = z.object({
  provider: z.string().min(1),
  voiceId: z.string().min(1),
  language: z.string().min(1),
  text: z.string().min(1).max(20000),
  emotion: z.string().optional(),
  pace: z.number().min(0.5).max(2).optional(),
  pitch: z.number().min(-12).max(12).optional(),
});

export const assetInputSchema = z.object({
  kind: z.enum(['image', 'audio', 'video', 'document', 'thumbnail']),
  url: z.string().url(),
  mimeType: z.string().min(1),
  rightsStatus: z.enum(['unknown', 'approved', 'restricted']).default('unknown'),
  metadata: z.record(z.unknown()).optional(),
});

export const timelineInputSchema = z.object({
  kind: z.enum(['video', 'audio', 'voice', 'caption', 'image']),
  sourceId: z.string().min(1),
  start: z.number().min(0),
  duration: z.number().min(0),
  volume: z.number().min(0).max(1).default(1),
});

export const renderInputSchema = z.object({
  format: z.enum(['mp4', 'mov', 'webm']).default('mp4'),
  quality: z.enum(['480p', '720p', '1080p']).default('720p'),
});

export const exportInputSchema = z.object({
  format: z.enum(['mp4', 'srt', 'vtt', 'zip']).default('mp4'),
  fileName: z.string().min(1).max(120),
});
