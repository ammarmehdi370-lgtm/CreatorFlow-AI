"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Dialog({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="w-full max-w-lg rounded-xl border border-line bg-panel p-5 shadow-xl"><header className="mb-5 flex items-center justify-between"><h2 id="dialog-title" className="font-display text-lg font-semibold">{title}</h2><Button variant="ghost" size="icon" aria-label="Close dialog" onClick={onClose}><X size={17} /></Button></header>{children}</section></div>;
}