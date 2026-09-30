import { FoundationPage } from "@/components/foundation-page";

export default function ProjectsPage() {
  return <FoundationPage title="Projects" section="Your work" description="Keep every idea, draft, and finished video in one place." action={{ label: "New project", href: "/projects/new" }} />;
}