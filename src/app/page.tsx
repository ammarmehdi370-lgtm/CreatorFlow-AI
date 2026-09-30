import Link from "next/link";
import { ArrowRight, Clapperboard, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <header className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold"><span className="grid size-9 place-items-center rounded-xl bg-coral text-white"><Clapperboard size={18} /></span>CreatorFlow AI</Link>
        <nav className="flex items-center gap-3"><Link href="/login" className="hidden px-3 py-2 text-sm text-muted hover:text-ink sm:block">Sign in</Link><Button asChild size="sm"><Link href="/signup">Get started <ArrowRight size={15} /></Link></Button></nav>
      </header>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[.9fr_1.1fr] md:px-10 md:pb-24 md:pt-14">
        <div className="animate-rise-in relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-medium text-muted"><Sparkles size={14} className="text-coral" />A calmer way to make video</div>
          <h1 className="mt-6 max-w-xl font-display text-[42px] font-semibold leading-[1.08] md:text-[56px]">Turn a good idea into a <span className="text-coral">video worth sharing.</span></h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted">Plan your script, scenes, voice, and edit in one creator-first workspace. Start with the story; build the rest as you go.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3"><Button asChild><Link href="/signup">Start creating <ArrowRight size={16} /></Link></Button><Link href="/dashboard" className="inline-flex h-10 items-center gap-2 px-3 text-sm font-medium text-muted hover:text-ink"><Play size={15} />Explore the studio</Link></div>
          <div className="mt-8 flex items-center gap-3 text-xs text-muted"><span className="flex -space-x-2">{["bg-[#d6a277]", "bg-[#7fa696]", "bg-[#d27660]"].map((color) => <span key={color} className={`size-7 rounded-full border-2 border-canvas ${color}`} />)}</span>Made for the work behind the watch time</div>
        </div>
        <div className="relative animate-rise-in [animation-delay:120ms]">
          <div className="absolute -inset-5 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_55%_40%,rgba(227,103,78,.13),transparent_65%)]" />
          <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_24px_70px_rgba(28,44,37,.12)]">
            <div className="flex h-12 items-center justify-between border-b border-line px-4"><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#d27660]" /><span className="size-2 rounded-full bg-[#e5b45e]" /><span className="size-2 rounded-full bg-[#80a787]" /></div><span className="text-xs text-muted">Untitled film · 03:00</span><span className="text-xs text-muted">Draft</span></div>
            <div className="grid min-h-[250px] grid-cols-[1fr_150px] gap-4 p-4 sm:grid-cols-[1fr_185px] sm:p-5">
              <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-lg bg-[#263a34] p-5 text-white sm:p-7"><div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(125deg, transparent 22%, rgba(223,118,93,.55) 22.2%, transparent 49%), linear-gradient(40deg, transparent 45%, rgba(113,154,127,.6) 45.3%, transparent 78%)" }} /><span className="relative text-[10px] font-semibold uppercase tracking-[.15em] text-[#f4b096]">Scene 01 · Opening</span><div className="relative"><p className="font-display text-2xl leading-tight sm:text-3xl">The shape of<br />a new story.</p><div className="mt-4 flex items-center gap-2 text-xs text-white/70"><span className="grid size-6 place-items-center rounded-full bg-white/15"><Play size={11} /></span>Preview scene</div></div></div>
              <div className="flex flex-col gap-3"><div className="rounded-lg border border-line p-3"><p className="text-[10px] uppercase tracking-wider text-muted">Script</p><div className="mt-3 space-y-1.5">{["w-4/5", "w-full", "w-3/4", "w-full", "w-2/3"].map((width, i) => <div key={i} className={`h-1.5 rounded-full bg-tint ${width}`} />)}</div><span className="mt-3 inline-block rounded-full bg-[#e6f1e9] px-2 py-1 text-[9px] font-medium text-[#46684f]">On track</span></div><div className="flex-1 rounded-lg border border-line p-3"><p className="text-[10px] uppercase tracking-wider text-muted">Voice &amp; mood</p><div className="mt-4 flex h-10 items-center gap-1">{Array.from({ length: 17 }, (_, i) => <span key={i} className="w-1 rounded-full bg-coral/75" style={{ height: `${8 + ((i * 19) % 27)}px` }} />)}</div><p className="mt-3 text-[10px] text-muted">Warm · measured</p></div></div>
            </div>
            <div className="border-t border-line px-4 py-3 sm:px-5"><p className="mb-2 text-[10px] font-medium text-muted">TIMELINE</p><div className="flex h-8 gap-1"><span className="w-[27%] rounded bg-[#df775f]" /><span className="w-[34%] rounded bg-[#75a28a]" /><span className="w-[21%] rounded bg-[#d9ae61]" /><span className="flex-1 rounded bg-[#8d9aa6]" /></div></div>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-panel/70"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 md:px-10">{[{ n: "01", title: "Find the story", text: "Shape an idea into a clear script and scene plan." }, { n: "02", title: "Build the moments", text: "Bring together voice, visuals, captions, and timing." }, { n: "03", title: "Prepare to publish", text: "Polish a YouTube-ready cut, thumbnail, and metadata." }].map((step) => <div key={step.n} className="flex gap-4"><span className="font-display text-xl text-coral">{step.n}</span><div><h2 className="font-medium">{step.title}</h2><p className="mt-1 text-sm leading-6 text-muted">{step.text}</p></div></div>)}</div></section>
      <footer className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 text-xs text-muted md:px-10"><span>CreatorFlow AI</span><span>A workspace for the next thing you make.</span></footer>
    </main>
  );
}
