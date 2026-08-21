import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { assetInputSchema } from '@/lib/validators';

export class AssetService extends BaseService {
  uploadAsset(projectId: string, userId: string, input: unknown) {
    const validated = this.validate(assetInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const asset = {
      id: randomUUID(),
      projectId: project.id,
      workspaceId: project.workspaceId,
      kind: validated.kind,
      url: validated.url,
      mimeType: validated.mimeType,
      status: 'ready',
      rightsStatus: validated.rightsStatus,
      createdAt: new Date().toISOString(),
    };
    memoryStore.assets.push(asset);
    return asset;
  }

  listAssets(projectId: string, userId: string) {
    const project = this.ensureProject(projectId, userId);
    return memoryStore.assets.filter((entry) => entry.projectId === project.id);
  }
}
