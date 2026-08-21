import { randomUUID } from 'crypto';

import { BaseService } from './base-service';
import { memoryStore } from '@/lib/store';

export class AIService extends BaseService {
  generateIdea(userId: string, input: { topic: string; audience?: string; tone?: string; goal?: string }) {
    this.ensureUser(userId);
    return {
      id: randomUUID(),
      topic: input.topic,
      audience: input.audience ?? 'new creators',
      tone: input.tone ?? 'engaging',
      goal: input.goal ?? 'increase watch time',
      ideas: [
        `Hook-driven outline for ${input.topic}`,
        `A clear value proposition for ${input.audience ?? 'new creators'}`,
      ],
      status: 'completed',
      createdAt: new Date().toISOString(),
    };
  }

  generateScriptSuggestion(projectId: string, userId: string, input: { brief: string }) {
    this.ensureProject(projectId, userId);
    return {
      projectId,
      generatedTitle: `Script for ${input.brief.slice(0, 40)}`,
      summary: `Draft script generated from ${input.brief}`,
      sections: [
        { title: 'Hook', body: 'Open with a strong question or promise.' },
        { title: 'Body', body: 'Explain the problem, value, and process.' },
        { title: 'CTA', body: 'End with a specific next step.' },
      ],
    };
  }

  createJob(userId: string, type: string, provider: string, projectId?: string) {
    const user = this.ensureUser(userId);
    const job = {
      id: randomUUID(),
      projectId: projectId ?? memoryStore.projects[0]?.id ?? 'demo-project',
      type,
      status: 'queued' as const,
      provider,
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    memoryStore.jobs.push(job);
    return job;
  }
}
