export abstract class BaseProviderAdapter {
  abstract kind: 'text' | 'voice' | 'image' | 'video';
  abstract name: string;

  protected normalizeError(error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Unknown provider error';
  }

  async generate(_input: Record<string, unknown>): Promise<Record<string, unknown>> {
    throw new Error('Provider generate() must be implemented');
  }
}
