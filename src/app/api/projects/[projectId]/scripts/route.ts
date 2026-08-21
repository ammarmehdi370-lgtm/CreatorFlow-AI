import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { ScriptService } from '@/services/script-service';

export async function GET(_request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(_request);
    const service = new ScriptService();
    const scripts = service.listScripts(params.projectId, auth.userId);
    return jsonSuccess({ scripts });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to load scripts', 401);
  }
}

export async function POST(request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody(request);
    const service = new ScriptService();
    const script = service.createScript(params.projectId, auth.userId, body);
    return jsonSuccess({ script }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to create script';
    return jsonError(message, message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400);
  }
}
