import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { memoryStore } from '@/lib/store';
import { AIService } from '@/services/ai-service';

export async function GET(request: NextRequest) {
  try {
    const auth = requireAuth(request);
    const jobs = memoryStore.jobs.filter((job) => !job.projectId || memoryStore.projects.some((project) => project.id === job.projectId && project.workspaceId === auth.workspaceId));
    return jsonSuccess({ jobs });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to list jobs', 401);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody<{ type: string; provider: string; projectId?: string }>(request);
    const service = new AIService();
    const job = service.createJob(auth.userId, body.type, body.provider, body.projectId);
    return jsonSuccess({ job }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to create job';
    return jsonError(message, message.includes('Authentication') ? 401 : 400);
  }
}
