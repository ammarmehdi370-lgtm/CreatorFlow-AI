import { BaseProviderAdapter } from './base-provider';

export class OpenAITextProvider extends BaseProviderAdapter {
  kind = 'text' as const;
  name = 'openai-text';

  async generate(input: Record<string, unknown>) {
    const prompt = typeof input.prompt === 'string' ? input.prompt : 'Create a creator-friendly video brief';
    return {
      provider: this.name,
      prompt,
      output: `Draft generated from: ${prompt}`,
      status: 'completed',
    };
  }
}
