import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { scriptInputSchema } from '@/lib/validators';

export class ScriptService extends BaseService {
  createScript(projectId: string, userId: string, input: unknown) {
    const validated = this.validate(scriptInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const script = {
      id: randomUUID(),
      projectId: project.id,
      title: validated.title,
      content: validated.content,
      metadata: validated.metadata,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    project.scripts.push(script);
    project.updatedAt = new Date().toISOString();
    return script;
  }

  listScripts(projectId: string, userId: string) {
    const project = this.ensureProject(projectId, userId);
    return project.scripts;
  }

  updateScript(projectId: string, scriptId: string, userId: string, input: unknown) {
    const validated = this.validate(scriptInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const script = project.scripts.find((entry) => entry.id === scriptId);
    if (!script) throw new Error('Script not found');

    Object.assign(script, {
      ...validated,
      updatedAt: new Date().toISOString(),
    });
    project.updatedAt = new Date().toISOString();
    return script;
  }
}
