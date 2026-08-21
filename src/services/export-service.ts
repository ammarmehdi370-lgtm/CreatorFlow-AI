import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { exportInputSchema } from '@/lib/validators';

export class ExportService extends BaseService {
  createExport(projectId: string, userId: string, input: unknown) {
    const validated = this.validate(exportInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const exportRecord = {
      id: randomUUID(),
      projectId: project.id,
      format: validated.format,
      fileName: validated.fileName,
      url: `https://example.com/exports/${validated.fileName}`,
      status: 'queued',
      createdAt: new Date().toISOString(),
    };
    memoryStore.exports.push(exportRecord);
    return exportRecord;
  }
}
