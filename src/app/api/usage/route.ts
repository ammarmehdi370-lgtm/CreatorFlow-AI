import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { UsageService } from '@/services/usage-service';

export async function POST(request: NextRequest) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody<{ type: string; units?: number; amountCredits?: number; projectId?: string; jobId?: string; metadata?: Record<string, unknown> }>(request);
    const service = new UsageService();
    const usage = service.recordUsage(auth.userId, body);
    return jsonSuccess({ usage }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to record usage';
    return jsonError(message, message.includes('Authentication') ? 401 : 400);
  }
}
