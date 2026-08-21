import { ensureSeedData, memoryStore } from './store';

export type AuthContext = {
  userId: string;
  workspaceId: string;
  role: string;
};

export function getCurrentUserId(request?: Request): string {
  const userId = request?.headers.get('x-user-id') ?? 'dev-user';
  return userId;
}

export function getAuthContext(request?: Request): AuthContext {
  ensureSeedData();
  const userId = getCurrentUserId(request);
  const user = memoryStore.users.find((entry) => entry.id === userId) ?? memoryStore.users[0];

  if (!user) {
    throw new Error('Authentication required');
  }

  return {
    userId: user.id,
    workspaceId: user.workspaceId,
    role: user.role,
  };
}

export function requireAuth(request?: Request) {
  return getAuthContext(request);
}

export function requireProjectAccess(projectWorkspaceId: string, request?: Request) {
  const auth = getAuthContext(request);

  if (auth.workspaceId !== projectWorkspaceId) {
    throw new Error('Forbidden');
  }

  return auth;
}
