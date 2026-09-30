import { CircleAlert } from "lucide-react";

export function ErrorState({ title, description }: { title: string; description: string }) {
  return <div role="alert" className="flex gap-3 rounded-lg border border-danger/30 bg-danger/5 p-4"><CircleAlert className="mt-0.5 shrink-0 text-danger" size={18} aria-hidden="true" /><div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-1 text-sm text-muted">{description}</p></div></div>;
}