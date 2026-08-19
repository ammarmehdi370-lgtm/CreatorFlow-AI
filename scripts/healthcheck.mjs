import { access } from 'node:fs/promises';

const requiredPaths = [
  'apps/web',
  'apps/api',
  'services/ai-worker',
  'services/render-worker',
  'packages/database',
  'packages/shared',
  'packages/ai',
  'packages/config',
  'infrastructure',
  'docs'
];

for (const path of requiredPaths) {
  await access(path);
}

console.log(`VidForge AI scaffold is healthy (${requiredPaths.length} workspaces found).`);
