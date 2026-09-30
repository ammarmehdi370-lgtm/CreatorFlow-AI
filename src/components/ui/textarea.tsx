import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-24 w-full resize-y rounded-lg border border-line bg-panel px-3 py-2.5 text-sm outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-coral disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />;
}