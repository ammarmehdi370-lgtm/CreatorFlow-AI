import Link from "next/link";
import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FoundationPage({ title, description, section = "Workspace", action }: {
  title: string;
  description: string;
  section?: string;
  action?: { label: string; href: string };
}) {
  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-coral">{section}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[34px]">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{description}</p>
        </div>
        {action && <Button asChild><Link href={action.href}><Plus size={16} />{action.label}</Link></Button>}
      </div>
      <Card className="mt-9 flex min-h-[310px] flex-col items-center justify-center border-dashed bg-panel/70 px-6 text-center">
        <span className="grid size-12 place-items-center rounded-2xl bg-coral/10 text-coral"><Sparkles size={21} /></span>
        <h2 className="mt-5 font-display text-xl font-semibold">A clear canvas, ready when you are</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted">This area is part of the CreatorFlow foundation. Its data and workflows will arrive in the next development steps.</p>
        <Link href="/projects/new" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-coral hover:underline">Start with a project <ArrowUpRight size={15} /></Link>
      </Card>
    </AppShell>
  );
}