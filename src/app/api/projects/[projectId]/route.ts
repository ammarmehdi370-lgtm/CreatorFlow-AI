import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { projectInputSchema } from '@/lib/validators';
import { ProjectService } from '@/services/project-service';

export async function GET(_request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(_request);
    const service = new ProjectService();
    const project = service.getProject(params.projectId, _request);
    if (project.workspaceId !== auth.workspaceId) {
      return jsonError('Forbidden', 403);
    }
    return jsonSuccess({ project });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to load project', 401);
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody<Partial<{ title: string; description?: string; format?: string; language?: string; status?: string }>>(request);
    const parsed = projectInputSchema.partial().parse(body);
    const service = new ProjectService();
    const project = service.updateProject(params.projectId, parsed, request);
    if (project.workspaceId !== auth.workspaceId) {
      return jsonError('Forbidden', 403);
    }
    return jsonSuccess({ project });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to update project';
    return jsonError(message, message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400);
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(request);
    const service = new ProjectService();
    const project = service.getProject(params.projectId, request);
    if (project.workspaceId !== auth.workspaceId) {
      return jsonError('Forbidden', 403);
    }
    const deleted = service.deleteProject(params.projectId, request);
    return jsonSuccess({ deleted });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to delete project', 401);
  }
}
