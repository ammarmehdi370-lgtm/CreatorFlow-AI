import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';
import { voiceInputSchema } from '@/lib/validators';

export class VoiceService extends BaseService {
  generateVoice(projectId: string, userId: string, input: unknown) {
    const validated = this.validate(voiceInputSchema, input);
    const project = this.ensureProject(projectId, userId);
    const voice = {
      id: randomUUID(),
      projectId: project.id,
      provider: validated.provider,
      voiceId: validated.voiceId,
      language: validated.language,
      duration: Math.max(1, Math.ceil(validated.text.length / 8)),
      outputUrl: `https://example.com/voices/${randomUUID()}.wav`,
      status: 'queued' as const,
      createdAt: new Date().toISOString(),
    };
    memoryStore.voices.push(voice);
    return voice;
  }

  listVoices(projectId: string, userId: string) {
    const project = this.ensureProject(projectId, userId);
    return memoryStore.voices.filter((entry) => entry.projectId === project.id);
  }
}
