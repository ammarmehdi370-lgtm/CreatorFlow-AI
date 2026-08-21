import { randomUUID } from 'crypto';

export type JobStatus = 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled';

export type UserRecord = {
  id: string;
  email: string;
  name: string;
  workspaceId: string;
  role: string;
};

export type WorkspaceRecord = {
  id: string;
  slug: string;
  name: string;
  plan: string;
};

export type ProjectRecord = {
  id: string;
  workspaceId: string;
  ownerId: string;
  title: string;
  description?: string;
  status: string;
  format: string;
  language: string;
  createdAt: string;
  updatedAt: string;
  scripts: ScriptRecord[];
  scenes: SceneRecord[];
  timeline: TimelineEntry[];
};

export type ScriptRecord = {
  id: string;
  projectId: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export type SceneRecord = {
  id: string;
  projectId: string;
  title: string;
  narration: string;
  visualBrief: string;
  duration: number;
  position: number;
  createdAt: string;
};

export type TimelineEntry = {
  id: string;
  projectId: string;
  kind: 'video' | 'audio' | 'voice' | 'caption' | 'image';
  sourceId: string;
  start: number;
  duration: number;
  volume: number;
};

export type AssetRecord = {
  id: string;
  projectId: string;
  workspaceId: string;
  kind: string;
  url: string;
  mimeType: string;
  status: string;
  rightsStatus: string;
  createdAt: string;
};

export type VoiceRecord = {
  id: string;
  projectId: string;
  provider: string;
  voiceId: string;
  language: string;
  duration: number;
  outputUrl: string;
  status: JobStatus;
  createdAt: string;
};

export type JobRecord = {
  id: string;
  projectId: string;
  type: string;
  status: JobStatus;
  provider: string;
  progress: number;
  error?: string;
  createdAt: string;
  updatedAt: string;
};

export type ExportRecord = {
  id: string;
  projectId: string;
  format: string;
  url: string;
  status: string;
  createdAt: string;
};

export const memoryStore = {
  users: [] as UserRecord[],
  workspaces: [] as WorkspaceRecord[],
  projects: [] as ProjectRecord[],
  assets: [] as AssetRecord[],
  voices: [] as VoiceRecord[],
  jobs: [] as JobRecord[],
  exports: [] as ExportRecord[],
};

export function ensureSeedData() {
  if (memoryStore.workspaces.length === 0) {
    const workspaceId = 'workspace-default';
    memoryStore.workspaces.push({
      id: workspaceId,
      slug: 'default-workspace',
      name: 'Default Workspace',
      plan: 'starter',
    });

    const userId = 'dev-user';
    memoryStore.users.push({
      id: userId,
      email: 'creator@example.com',
      name: 'Creator',
      workspaceId,
      role: 'owner',
    });
  }

  if (memoryStore.projects.length === 0) {
    const user = memoryStore.users[0];
    const workspace = memoryStore.workspaces[0];
    const projectId = randomUUID();

    memoryStore.projects.push({
      id: projectId,
      workspaceId: workspace.id,
      ownerId: user.id,
      title: 'Demo project',
      description: 'Sample initial project',
      status: 'draft',
      format: '16:9',
      language: 'en',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      scripts: [
        {
          id: randomUUID(),
          projectId,
          title: 'Intro script',
          content: 'Welcome to CreatorFlow AI. Let us turn ideas into videos.',
          metadata: { tone: 'friendly' },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      scenes: [
        {
          id: randomUUID(),
          projectId,
          title: 'Opening scene',
          narration: 'Welcome to CreatorFlow AI.',
          visualBrief: 'Stylized open shot with title overlay.',
          duration: 12,
          position: 1,
          createdAt: new Date().toISOString(),
        },
      ],
      timeline: [
        {
          id: randomUUID(),
          projectId,
          kind: 'voice',
          sourceId: 'voice-demo',
          start: 0,
          duration: 12,
          volume: 0.9,
        },
      ],
    });
  }
}
