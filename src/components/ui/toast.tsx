"use client";

import { useEffect } from "react";
import { CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Toast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, 4000);
    return () => window.clearTimeout(timer);
  }, [onDismiss]);
  return <div role="status" className="fixed bottom-5 right-5 z-50 flex max-w-sm items-center gap-3 rounded-lg border border-line bg-panel p-3 shadow-lg"><CircleCheck size={18} className="shrink-0 text-emerald-600" /><span className="flex-1 text-sm">{message}</span><Button size="icon" variant="ghost" aria-label="Dismiss notification" onClick={onDismiss}><X size={15} /></Button></div>;
}