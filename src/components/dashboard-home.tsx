import Link from "next/link";
import { ArrowRight, Clapperboard, Clock3, Film, Plus, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DashboardHome() {
  return (
    <AppShell>
      <div className="animate-rise-in flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-coral">Wednesday, September 30</p>
          <h1 className="mt-2 font-display text-3xl font-semibold md:text-[34px]">Make something worth watching.</h1>
          <p className="mt-2 text-sm text-muted">Your next video starts with one clear idea.</p>
        </div>
        <Button asChild><Link href="/projects/new"><Plus size={16} />New project</Link></Button>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-[1.4fr_.8fr]">
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-medium"><Sparkles size={16} className="text-coral" />Your studio</div>
            <Badge>Ready to begin</Badge>
          </div>
          <div className="grid min-h-[220px] place-items-center bg-[linear-gradient(135deg,rgba(227,103,78,.07),transparent_55%),linear-gradient(315deg,rgba(105,160,135,.10),transparent_50%)] p-7 text-center">
            <div className="max-w-sm">
              <span className="mx-auto grid size-12 place-items-center rounded-2xl border border-line bg-panel text-coral"><Clapperboard size={21} /></span>
              <h2 className="mt-4 font-display text-xl font-semibold">A fresh canvas for your ideas</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Bring a topic, choose a duration, and build toward a YouTube-ready video.</p>
              <Link href="/projects/new" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral">Create a project <ArrowRight size={15} /></Link>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 text-sm font-medium"><Clock3 size={16} className="text-coral" />Recent activity</div>
          <div className="mt-6 flex min-h-[155px] flex-col items-center justify-center text-center">
            <Film size={23} className="text-muted" />
            <p className="mt-3 text-sm font-medium">No projects yet</p>
            <p className="mt-1 text-xs text-muted">Your latest work will show up here.</p>
          </div>
        </Card>
      </div>

      <section className="mt-9">
        <div className="flex items-center justify-between"><div><h2 className="font-display text-xl font-semibold">Start with a format</h2><p className="mt-1 text-sm text-muted">Choose a length that fits the story.</p></div><Link href="/projects/new" className="text-sm font-medium text-coral hover:underline">All formats</Link></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[{ name: "Quick take", length: "60 sec", detail: "A focused short" }, { name: "Story arc", length: "3 min", detail: "Room to build an idea" }, { name: "Deep dive", length: "5 min", detail: "A richer explanation" }, { name: "Custom", length: "Your length", detail: "Set your own pace" }].map((item, index) => (
            <Link key={item.name} href="/projects/new" className="group rounded-xl border border-line bg-panel p-4 transition-transform hover:-translate-y-0.5 hover:border-coral/50">
              <div className="flex items-center justify-between"><span className="text-xs font-medium text-muted">0{index + 1}</span><ArrowRight size={15} className="text-muted transition-transform group-hover:translate-x-1" /></div>
              <p className="mt-5 font-display text-lg font-semibold">{item.name}</p>
              <p className="mt-1 text-sm text-coral">{item.length}</p>
              <p className="mt-2 text-xs text-muted">{item.detail}</p>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}