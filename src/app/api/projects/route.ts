import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { projectInputSchema } from '@/lib/validators';
import { ProjectService } from '@/services/project-service';

export async function GET() {
  try {
    const auth = requireAuth();
    const service = new ProjectService();
    return jsonSuccess({ projects: service.listProjects(auth.userId) });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to load projects', 401);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody<{ title: string; description?: string; format?: string; language?: string; status?: string }>(request);
    const parsed = projectInputSchema.parse(body);
    const service = new ProjectService();
    const project = service.createProject(parsed, auth.userId);
    return jsonSuccess({ project }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to create project';
    const status = message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400;
    return jsonError(message, status);
  }
}
