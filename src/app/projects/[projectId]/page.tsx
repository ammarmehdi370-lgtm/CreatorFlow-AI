import { FoundationPage } from "@/components/foundation-page";

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  return <FoundationPage title="Project workspace" section={`Project ${params.projectId}`} description="Script, scenes, media, voice, captions, timeline, preview, and export will come together here." />;
}