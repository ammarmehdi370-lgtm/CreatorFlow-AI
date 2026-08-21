import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';

export class CaptionService extends BaseService {
  generateCaptions(projectId: string, userId: string, input: { text: string; format?: 'srt' | 'vtt' }) {
    this.ensureProject(projectId, userId);
    const format = input.format ?? 'srt';
    const captions = {
      id: randomUUID(),
      projectId,
      format,
      content: `1\n00:00:00,000 --> 00:00:03,000\n${input.text}\n`,
      createdAt: new Date().toISOString(),
    };
    return captions;
  }
}
