import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("h-10 w-full rounded-lg border border-line bg-panel px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-coral", className)} {...props}>{children}</select>;
}