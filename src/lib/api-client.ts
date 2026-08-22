'use client';

export type ApiProject = {
  id: string;
  title: string;
  description?: string;
  status: string;
  format: string;
  language: string;
  createdAt: string;
  updatedAt: string;
  scripts?: ApiScript[];
  scenes?: ApiScene[];
  timeline?: ApiTimeline[];
};

export type ApiScript = { id: string; projectId: string; title: string; content: string; metadata: Record<string, unknown>; updatedAt: string };
export type ApiScene = { id: string; title: string; narration: string; visualBrief: string; duration: number; position: number };
export type ApiTimeline = { id: string; kind: string; sourceId: string; start: number; duration: number; volume: number };
export type ApiAsset = { id: string; kind: string; url: string; mimeType: string; status: string; rightsStatus: string; createdAt: string };
export type ApiVoice = { id: string; provider: string; voiceId: string; language: string; duration: number; outputUrl: string; status: string; createdAt: string };
export type ApiJob = { id: string; projectId?: string; type: string; status: string; provider: string; progress: number; error?: string; updatedAt: string };
export type ApiUsage = { id: string; type: string; amountCredits: number; units: number; status: string; createdAt: string };

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options?.headers ?? {}) },
  });
  const payload = (await response.json().catch(() => ({}))) as { error?: string } & T;
  if (!response.ok) throw new Error(payload.error ?? `Request failed (${response.status})`);
  return payload;
}

const json = (body: unknown): RequestInit => ({ method: 'POST', body: JSON.stringify(body) });
const patch = (body: unknown): RequestInit => ({ method: 'PATCH', body: JSON.stringify(body) });

export const api = {
  listProjects: () => request<{ projects: ApiProject[] }>('/api/projects'),
  getProject: (id: string) => request<{ project: ApiProject }>(`/api/projects/${id}`),
  createProject: (body: { title: string; description?: string; format?: string; language?: string }) => request<{ project: ApiProject }>('/api/projects', json(body)),
  updateProject: (id: string, body: Partial<ApiProject>) => request<{ project: ApiProject }>(`/api/projects/${id}`, patch(body)),
  deleteProject: (id: string) => request<{ deleted: boolean }>(`/api/projects/${id}`, { method: 'DELETE' }),
  generateIdea: (body: { topic: string; audience?: string; tone?: string; goal?: string }) => request<{ result: Record<string, unknown> }>('/api/ai', json(body)),
  listScripts: (id: string) => request<{ scripts: ApiScript[] }>(`/api/projects/${id}/scripts`),
  createScript: (id: string, body: { title: string; content: string; metadata?: Record<string, unknown> }) => request<{ script: ApiScript }>(`/api/projects/${id}/scripts`, json(body)),
  updateScript: (projectId: string, scriptId: string, body: { title: string; content: string; metadata?: Record<string, unknown> }) => request<{ script: ApiScript }>(`/api/projects/${projectId}/scripts/${scriptId}`, patch(body)),
  listAssets: (id: string) => request<{ assets: ApiAsset[] }>(`/api/projects/${id}/assets`),
  createAsset: (id: string, body: { kind: string; url: string; mimeType: string; rightsStatus?: string }) => request<{ asset: ApiAsset }>(`/api/projects/${id}/assets`, json(body)),
  listVoices: (id: string) => request<{ voices: ApiVoice[] }>(`/api/projects/${id}/voice`),
  generateVoice: (id: string, body: Record<string, unknown>) => request<{ voice: ApiVoice }>(`/api/projects/${id}/voice`, json(body)),
  getTimeline: (id: string) => request<{ timeline: ApiTimeline[] }>(`/api/projects/${id}/timeline`),
  addTimelineClip: (id: string, body: Record<string, unknown>) => request<{ clip: ApiTimeline }>(`/api/projects/${id}/timeline`, json(body)),
  createRender: (id: string, body: { format: string; quality: string }) => request<{ render: ApiJob }>(`/api/projects/${id}/render`, json(body)),
  exportProject: (id: string, body: { format: string; fileName: string }) => request<{ exportRecord: { id: string; url: string; status: string } }>(`/api/projects/${id}/export`, json(body)),
  listJobs: () => request<{ jobs: ApiJob[] }>('/api/jobs'),
  listUsage: () => request<{ usage: ApiUsage[] }>('/api/usage'),
};

export function useJobPolling(onUpdate: (jobs: ApiJob[]) => void) {
  return async function poll() {
    const result = await api.listJobs();
    onUpdate(result.jobs);
    return result.jobs;
  };
}
