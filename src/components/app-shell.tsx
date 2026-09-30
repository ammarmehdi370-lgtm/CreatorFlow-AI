"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clapperboard, FolderOpen, Gauge, LayoutDashboard, Settings2, Shield, Sparkles, CreditCard } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: Clapperboard },
  { href: "/assets", label: "Assets", icon: FolderOpen },
  { href: "/usage", label: "Usage", icon: Gauge },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-canvas text-ink md:grid md:grid-cols-[236px_minmax(0,1fr)]">
      <aside className="border-b border-line bg-panel px-4 py-4 md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r md:px-5 md:py-6">
        <Link href="/" className="flex items-center gap-3 px-2" aria-label="CreatorFlow home">
          <span className="grid size-9 place-items-center rounded-xl bg-coral text-white"><Clapperboard size={19} /></span>
          <span className="font-display text-[17px] font-semibold tracking-tight">CreatorFlow</span>
        </Link>
        <div className="mt-8 hidden px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted md:block">Workspace</div>
        <nav aria-label="Main navigation" className="mt-4 flex gap-1 overflow-x-auto md:flex-col">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined} className={cn("flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors", active ? "bg-tint text-ink font-medium" : "text-muted hover:bg-tint/60 hover:text-ink")}>
                <Icon size={17} aria-hidden="true" />{label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 hidden px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted md:block">Account</div>
        <nav aria-label="Account navigation" className="mt-3 hidden flex-col gap-1 md:flex">
          <Link href="/settings" className="nav-link"><Settings2 size={17} />Settings</Link>
          <Link href="/settings/security" className="nav-link"><Shield size={17} />Security</Link>
          <Link href="/settings/billing" className="nav-link"><CreditCard size={17} />Billing</Link>
        </nav>
        <div className="mt-auto hidden md:block">
          <div className="mt-10 rounded-xl border border-line bg-tint/60 p-4">
            <Sparkles size={17} className="text-coral" />
            <p className="mt-3 text-sm font-medium">Your studio, in flow.</p>
            <p className="mt-1 text-xs leading-5 text-muted">Plan, write, and shape your next video.</p>
          </div>
          <p className="mt-5 px-2 text-xs text-muted">Foundation preview</p>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex h-[68px] items-center justify-between border-b border-line bg-panel/85 px-5 md:px-9">
          <div className="text-sm text-muted">Creator workspace <span className="px-1.5 text-line">/</span> <span className="text-ink">Studio</span></div>
          <ThemeToggle />
        </header>
        <main className="mx-auto w-full max-w-[1240px] px-5 py-8 md:px-9 md:py-10">{children}</main>
      </div>
    </div>
  );
}