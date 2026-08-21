import { describe, expect, it } from 'vitest';

import { AIService } from '@/services/ai-service';
import { AssetService } from '@/services/asset-service';
import { ProjectService } from '@/services/project-service';
import { ScriptService } from '@/services/script-service';
import { TimelineService } from '@/services/timeline-service';
import { UsageService } from '@/services/usage-service';
import { VoiceService } from '@/services/voice-service';
import { memoryStore } from '@/lib/store';

describe('CreatorFlow backend flow', () => {
  it('runs the happy path from user to export', () => {
    memoryStore.users.length = 0;
    memoryStore.workspaces.length = 0;
    memoryStore.projects.length = 0;
    memoryStore.assets.length = 0;
    memoryStore.voices.length = 0;
    memoryStore.jobs.length = 0;
    memoryStore.exports.length = 0;

    const workspaceId = 'workspace-test';
    memoryStore.workspaces.push({
      id: workspaceId,
      slug: 'workspace-test',
      name: 'Test Workspace',
      plan: 'starter',
    });
    const userId = 'user-1';
    memoryStore.users.push({
      id: userId,
      email: 'tester@example.com',
      name: 'Tester',
      workspaceId,
      role: 'owner',
    });

    const projectService = new ProjectService();
    const project = projectService.createProject({ title: 'Test project', description: 'A backend flow test' }, userId);
    expect(project.title).toBe('Test project');

    const scriptService = new ScriptService();
    const script = scriptService.createScript(project.id, userId, {
      title: 'Intro script',
      content: 'This is the final script body.',
      metadata: { tone: 'friendly' },
    });
    expect(script.content).toContain('final script');

    const voiceService = new VoiceService();
    const voice = voiceService.generateVoice(project.id, userId, {
      provider: 'playht',
      voiceId: 'voice-01',
      language: 'en-US',
      text: 'This is a short narration.',
    });
    expect(voice.status).toBe('queued');

    const assetService = new AssetService();
    const asset = assetService.uploadAsset(project.id, userId, {
      kind: 'image',
      url: 'https://example.com/image.png',
      mimeType: 'image/png',
      rightsStatus: 'approved',
    });
    expect(asset.kind).toBe('image');

    const timelineService = new TimelineService();
    const clip = timelineService.addClip(project.id, userId, {
      kind: 'voice',
      sourceId: voice.id,
      start: 0,
      duration: 8,
      volume: 1,
    });
    expect(clip.start).toBe(0);

    const aiService = new AIService();
    const idea = aiService.generateIdea(userId, { topic: 'CreatorFlow AI' });
    expect(idea.ideas.length).toBeGreaterThan(0);

    const usageService = new UsageService();
    const usage = usageService.recordUsage(userId, { type: 'voice_generation', units: 1, projectId: project.id });
    expect(usage.type).toBe('voice_generation');
  });
});
