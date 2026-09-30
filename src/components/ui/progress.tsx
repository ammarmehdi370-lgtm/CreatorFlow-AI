import { cn } from "@/lib/utils";

export function Progress({ value, className, label }: { value: number; className?: string; label?: string }) {
  const safeValue = Math.min(100, Math.max(0, value));
  return <div role="progressbar" aria-label={label ?? "Progress"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue} className={cn("h-2 overflow-hidden rounded-full bg-tint", className)}><div className="h-full rounded-full bg-coral transition-[width]" style={{ width: `${safeValue}%` }} /></div>;
}