import { WorkspaceView } from '@/components/studio';

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return <WorkspaceView projectId={params.projectId} />;
}
