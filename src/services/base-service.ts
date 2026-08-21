import { z } from 'zod';

import { ensureSeedData, memoryStore } from '@/lib/store';
import { getAuthContext } from '@/lib/auth';

export abstract class BaseService {
  protected ensureUser(userId: string) {
    ensureSeedData();
    const user = memoryStore.users.find((entry) => entry.id === userId);
    if (!user) {
      throw new Error('Authentication required');
    }
    return user;
  }

  protected ensureProject(projectId: string, userId: string) {
    const user = this.ensureUser(userId);
    const project = memoryStore.projects.find((entry) => entry.id === projectId && entry.workspaceId === user.workspaceId);
    if (!project) throw new Error('Project not found');
    return project;
  }

  protected ensureWorkspace(userId: string) {
    const user = this.ensureUser(userId);
    const workspace = memoryStore.workspaces.find((entry) => entry.id === user.workspaceId);
    if (!workspace) throw new Error('Workspace not found');
    return workspace;
  }

  protected authForRequest(request?: Request) {
    return getAuthContext(request);
  }

  protected validate<T>(schema: z.ZodSchema<T>, value: unknown): T {
    const result = schema.safeParse(value);
    if (!result.success) {
      throw new Error(result.error.issues.map((issue) => issue.message).join('; '));
    }
    return result.data;
  }
}
