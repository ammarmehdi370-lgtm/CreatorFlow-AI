import { Inbox } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="grid justify-items-center gap-2 py-12 text-center"><Inbox className="text-muted" size={24} aria-hidden="true" /><h2 className="font-medium">{title}</h2><p className="max-w-sm text-sm leading-6 text-muted">{description}</p></div>;
}