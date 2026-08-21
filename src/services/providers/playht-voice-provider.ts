import { BaseProviderAdapter } from './base-provider';

export class PlayHTVoiceProvider extends BaseProviderAdapter {
  kind = 'voice' as const;
  name = 'playht-voice';

  async generate(input: Record<string, unknown>) {
    const text = typeof input.text === 'string' ? input.text : 'Generated narration';
    return {
      provider: this.name,
      text,
      outputUrl: 'https://example.com/generated-voice.wav',
      status: 'completed',
    };
  }
}
