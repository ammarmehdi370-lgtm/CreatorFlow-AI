import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { ScriptService } from '@/services/script-service';

export async function PATCH(request: NextRequest, { params }: { params: { projectId: string; scriptId: string } }) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody(request);
    const service = new ScriptService();
    const script = service.updateScript(params.projectId, params.scriptId, auth.userId, body);
    return jsonSuccess({ script });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to update script';
    return jsonError(message, message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400);
  }
}
