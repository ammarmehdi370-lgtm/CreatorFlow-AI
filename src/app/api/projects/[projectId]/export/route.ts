import { NextRequest } from 'next/server';

import { jsonError, jsonSuccess, parseBody } from '@/lib/api';
import { requireAuth } from '@/lib/auth';
import { ExportService } from '@/services/export-service';

export async function POST(request: NextRequest, { params }: { params: { projectId: string } }) {
  try {
    const auth = requireAuth(request);
    const body = await parseBody(request);
    const service = new ExportService();
    const exportRecord = service.createExport(params.projectId, auth.userId, body);
    return jsonSuccess({ exportRecord }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to export project';
    return jsonError(message, message.includes('Authentication') ? 401 : message.includes('Forbidden') ? 403 : 400);
  }
}
