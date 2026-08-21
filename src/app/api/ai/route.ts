import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { AIService } from '@/services/ai-service';

export async function POST(request: NextRequest) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody<{ topic: string; audience?: string; tone?: string; goal?: string }>(request);
    const service = new AIService();
    const result = service.generateIdea(auth.userId, body);
    return jsonSuccess({ result }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to generate AI idea';
    return jsonError(message, message.includes('Authentication') ? 401 : 400);
  }
}
