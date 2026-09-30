import Link from "next/link";
import { ArrowLeft, Clapperboard, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthPlaceholder({ mode }: { mode: "login" | "signup" | "forgot" | "reset" }) {
  const titles = { login: "Welcome back", signup: "Create your account", forgot: "Reset your password", reset: "Choose a new password" };
  const descriptions = { login: "Sign in to return to your studio.", signup: "Set up your creator workspace.", forgot: "Enter your account email to request a reset link.", reset: "Choose a new password for your account." };
  return <main className="grid min-h-screen bg-canvas md:grid-cols-[minmax(280px,.85fr)_1.15fr]">
    <section className="relative hidden overflow-hidden bg-[#24332f] p-10 text-white md:flex md:flex-col md:justify-between lg:p-14">
      <Link href="/" className="flex items-center gap-3 font-display text-xl font-semibold"><span className="grid size-10 place-items-center rounded-xl bg-[#e3674e]"><Clapperboard size={20} /></span>CreatorFlow</Link>
      <div className="relative z-10 max-w-md"><p className="text-xs font-semibold uppercase tracking-[.14em] text-[#f39a7e]">Your ideas, in motion</p><p className="mt-4 font-display text-4xl leading-tight">From a spark to a story people stay for.</p><div className="mt-8 grid grid-cols-5 gap-2" aria-hidden="true">{[0, 1, 2, 3, 4].map((frame) => <div key={frame} className={`aspect-[.74] rounded-md border border-white/15 ${frame === 2 ? "bg-[#df765d]" : "bg-white/10"}`} />)}</div></div>
      <p className="text-xs text-white/55">A workspace for thoughtful video makers.</p>
    </section>
    <section className="flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-[390px]">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"><ArrowLeft size={15} />Back to CreatorFlow</Link>
        <div className="mt-10 grid size-11 place-items-center rounded-xl bg-coral/10 text-coral"><LockKeyhole size={19} /></div>
        <h1 className="mt-6 font-display text-3xl font-semibold">{titles[mode]}</h1>
        <p className="mt-2 text-sm leading-6 text-muted">{descriptions[mode]}</p>
        <div className="mt-7 grid gap-4">
          {(mode === "signup" ? ["Name", "Email", "Password", "Confirm password"] : mode === "reset" ? ["New password", "Confirm new password"] : mode === "forgot" ? ["Email"] : ["Email", "Password"]).map((label) => <Input key={label} label={label} type={label.toLowerCase().includes("password") ? "password" : label === "Email" ? "email" : "text"} autoComplete={label === "Email" ? "email" : undefined} />)}
          <Button className="mt-1" disabled>{mode === "login" ? "Sign in" : mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Reset password"}</Button>
        </div>
        <p className="mt-6 rounded-lg border border-line bg-panel p-3 text-xs leading-5 text-muted">Authentication is not active yet. Account flows will be implemented in the next development step.</p>
        <div className="mt-5 flex justify-between text-sm text-muted">
          {mode === "login" && <><Link href="/forgot-password" className="hover:text-coral">Forgot password?</Link><Link href="/signup" className="hover:text-coral">Create account</Link></>}
          {mode === "signup" && <><span>Already have an account?</span><Link href="/login" className="hover:text-coral">Sign in</Link></>}
          {mode === "forgot" && <Link href="/login" className="hover:text-coral">Return to sign in</Link>}
          {mode === "reset" && <Link href="/login" className="hover:text-coral">Return to sign in</Link>}
        </div>
      </div>
    </section>
  </main>;
}