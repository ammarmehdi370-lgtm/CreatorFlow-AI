import { BaseProviderAdapter } from './base-provider';

export class StabilityImageProvider extends BaseProviderAdapter {
  kind = 'image' as const;
  name = 'stability-image';

  async generate(input: Record<string, unknown>) {
    const prompt = typeof input.prompt === 'string' ? input.prompt : 'A cinematic thumbnail';
    return {
      provider: this.name,
      prompt,
      outputUrl: 'https://example.com/generated-image.png',
      status: 'completed',
    };
  }
}
