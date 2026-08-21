export type ProviderKind = 'text' | 'voice' | 'image' | 'video';

export interface AIProviderAdapter {
  kind: ProviderKind;
  name: string;
  generate(input: Record<string, unknown>): Promise<Record<string, unknown>>;
}

export class ProviderRegistry {
  private adapters = new Map<string, AIProviderAdapter>();

  register(adapter: AIProviderAdapter) {
    this.adapters.set(adapter.name, adapter);
    return adapter;
  }

  get(name: string) {
    return this.adapters.get(name);
  }

  list() {
    return Array.from(this.adapters.values());
  }
}

export const providerRegistry = new ProviderRegistry();
