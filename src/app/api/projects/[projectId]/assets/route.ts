import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { AssetService } from '@/services/asset-service';

export async function GET(_request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(_request);
    const service = new AssetService();
    const assets = service.listAssets(params.projectId, auth.userId);
    return jsonSuccess({ assets });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : 'Failed to load assets', 401);
  }
}

export async function POST(request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody(request);
    const service = new AssetService();
    const asset = service.uploadAsset(params.projectId, auth.userId, body);
    return jsonSuccess({ asset }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to upload asset';
    return jsonError(message, message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400);
  }
}
