import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { timelineInputSchema } from '@/lib/validators';

export class TimelineService extends BaseService {
  addClip(projectId: string, userId: string, input: unknown) {
    const validated = this.validate(timelineInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const entry = {
      id: randomUUID(),
      projectId: project.id,
      kind: validated.kind,
      sourceId: validated.sourceId,
      start: validated.start,
      duration: validated.duration,
      volume: validated.volume,
    };
    project.timeline.push(entry);
    project.updatedAt = new Date().toISOString();
    return entry;
  }

  listTimeline(projectId: string, userId: string) {
    const project = this.ensureProject(projectId, userId);
    return project.timeline;
  }
}
