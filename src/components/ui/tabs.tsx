"use client";

import { useState } from "react";

export function Tabs({ items }: { items: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return <div><div role="tablist" className="flex gap-1 border-b border-line">{items.map((item, index) => <button key={item.label} id={`tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls={`panel-${index}`} onClick={() => setActive(index)} className={`border-b-2 px-3 py-2 text-sm ${active === index ? "border-coral font-medium text-ink" : "border-transparent text-muted"}`}>{item.label}</button>)}</div>{items.map((item, index) => active === index && <div key={item.label} role="tabpanel" id={`panel-${index}`} aria-labelledby={`tab-${index}`} className="py-4">{item.content}</div>)}</div>;
}