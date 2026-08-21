import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';

export class UsageService extends BaseService {
  recordUsage(userId: string, payload: { type: string; units?: number; amountCredits?: number; projectId?: string; jobId?: string; metadata?: Record<string, unknown> }) {
    const user = this.ensureUser(userId);
    const entry = {
      id: randomUUID(),
      workspaceId: user.workspaceId,
      userId: user.id,
      projectId: payload.projectId,
      jobId: payload.jobId,
      type: payload.type,
      units: payload.units ?? 1,
      amountCredits: payload.amountCredits ?? 0,
      status: 'reserved',
      metadata: payload.metadata ?? {},
      createdAt: new Date().toISOString(),
    };
    memoryStore.projects.forEach((project) => {
      if (project.id === payload.projectId) {
        project.updatedAt = new Date().toISOString();
      }
    });
    return entry;
  }
}
