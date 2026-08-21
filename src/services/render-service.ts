import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { renderInputSchema } from '@/lib/validators';

export class RenderService extends BaseService {
  createRender(projectId: string, userId: string, input: unknown) {
    const validated = this.validate(renderInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const job = {
      id: randomUUID(),
      projectId: project.id,
      type: 'render',
      status: 'queued' as const,
      provider: 'local-renderer',
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      format: validated.format,
      quality: validated.quality,
    };
    memoryStore.jobs.push(job as never);
    return job;
  }
}
