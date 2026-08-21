import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { VoiceService } from '@/services/voice-service';

export async function GET(_request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(_request);
    const service = new VoiceService();
    const voices = service.listVoices(params.projectId, auth.userId);
    return jsonSuccess({ voices });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to load voices', 401);
  }
}

export async function POST(request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody(request);
    const service = new VoiceService();
    const voice = service.generateVoice(params.projectId, auth.userId, body);
    return jsonSuccess({ voice }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to generate voice';
    return jsonError(message, message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400);
  }
}
