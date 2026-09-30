import { MoreHorizontal } from "lucide-react";

export function Dropdown({ label = "More options", children }: { label?: string; children: React.ReactNode }) {
  return <details className="group relative"><summary aria-label={label} className="grid size-9 cursor-pointer list-none place-items-center rounded-lg text-muted hover:bg-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"><MoreHorizontal size={18} /></summary><div className="absolute right-0 top-10 z-20 min-w-40 rounded-lg border border-line bg-panel p-1 shadow-lg">{children}</div></details>;
}