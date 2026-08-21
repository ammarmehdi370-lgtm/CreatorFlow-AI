import { randomUUID } from 'crypto';

import { BaseService } from './base-service';

export class ThumbnailService extends BaseService {
  generateThumbnail(projectId: string, userId: string, prompt: string) {
    this.ensureProject(projectId, userId);
    return {
      id: randomUUID(),
      projectId,
      prompt,
      status: 'completed',
      selected: true,
      metadata: { provider: 'local' },
      createdAt: new Date().toISOString(),
    };
  }
}
