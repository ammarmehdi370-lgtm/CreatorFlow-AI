export type ProviderUsage = {
  units: number;
  unitType: "tokens" | "characters" | "seconds" | "minutes" | "images";
  estimatedCostUsd?: number;
};

export type ProviderResultMeta = {
  provider: string;
  model: string;
  requestId: string;
  usage: ProviderUsage;
  contentSafety: "UNKNOWN" | "PASSED" | "FLAGGED" | "BLOCKED";
};

export type TextRequest = { prompt: string; schema?: Record<string, unknown>; temperature?: number };
export type TextResult<T = unknown> = { value: T; meta: ProviderResultMeta };
export type VoiceRequest = { text: string; voiceId: string; language: string; format: "mp3" | "wav" };
export type MediaResult = { storageKey: string; mimeType: string; durationMs?: number; width?: number; height?: number; meta: ProviderResultMeta };

export interface TextAIProvider { generate<T>(request: TextRequest): Promise<TextResult<T>>; }
export interface ResearchAIProvider { research(request: { query: string; limit: number }): Promise<TextResult<{ claims: unknown[]; sources: unknown[] }>>; }
export interface VoiceAIProvider { synthesize(request: VoiceRequest): Promise<MediaResult>; }
export interface ImageAIProvider { generate(request: { prompt: string; width: number; height: number }): Promise<MediaResult>; }
export interface VideoAIProvider { generate(request: { prompt: string; durationMs: number; width: number; height: number }): Promise<MediaResult>; }
export interface SpeechToTextProvider { transcribe(request: { storageKey: string; language?: string }): Promise<TextResult<{ cues: unknown[] }>>; }
export interface VisionAIProvider { analyze(request: { storageKey: string }): Promise<TextResult<{ observations: unknown[] }>>; }
