import type { WorkspaceRole } from "@prisma/client";

const roleRank: Record<WorkspaceRole, number> = {
  VIEWER: 10,
  REVIEWER: 20,
  EDITOR: 30,
  ADMIN: 40,
  OWNER: 50,
};

export function canAccessRole(actual: WorkspaceRole, required: WorkspaceRole) {
  return roleRank[actual] >= roleRank[required];
}

export function assertWorkspaceRole(actual: WorkspaceRole, required: WorkspaceRole) {
  if (!canAccessRole(actual, required)) {
    throw new Error("FORBIDDEN");
  }
}
