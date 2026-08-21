import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { projectInputSchema } from '@/lib/validators';

export class ProjectService extends BaseService {
  createProject(input: unknown, userId: string) {
    const validated = this.validate(projectInputSchema, input);
    const user = this.ensureUser(userId);

    const project = {
      id: randomUUID(),
      workspaceId: user.workspaceId,
      ownerId: user.id,
      title: validated.title,
      description: validated.description ?? '',
      status: validated.status,
      format: validated.format ?? '16:9',
      language: validated.language ?? 'en',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      scripts: [],
      scenes: [],
      timeline: [],
    };

    memoryStore.projects.push(project);
    return project;
  }

  listProjects(userId: string) {
    const user = this.ensureUser(userId);
    return memoryStore.projects.filter((project) => project.workspaceId === user.workspaceId);
  }

  getProject(projectId: string, request?: Request) {
    const auth = request ? this.authForRequest(request) : undefined;
    const project = memoryStore.projects.find((entry) => entry.id === projectId);
    if (!project) throw new Error('Project not found');
    if (auth && project.workspaceId !== auth.workspaceId) {
      throw new Error('Forbidden');
    }
    return project;
  }

  updateProject(projectId: string, updates: Partial<unknown>, request?: Request) {
    const project = this.getProject(projectId, request);
    const validated = this.validate(projectInputSchema.partial(), updates);
    Object.assign(project, validated, {
      updatedAt: new Date().toISOString(),
    });
    return project;
  }

  deleteProject(projectId: string, request?: Request) {
    const project = this.getProject(projectId, request);
    const index = memoryStore.projects.findIndex((entry) => entry.id === project.id);
    if (index >= 0) memoryStore.projects.splice(index, 1);
    return { deleted: true, id: project.id };
  }
}
