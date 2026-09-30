import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <main className="grid min-h-screen content-center justify-items-center gap-4 bg-canvas p-6 text-center"><p className="text-xs font-semibold uppercase tracking-wider text-coral">404 · Not found</p><h1 className="font-display text-3xl font-semibold">That page is off the timeline.</h1><p className="max-w-sm text-sm leading-6 text-muted">The link may have moved, or the page is not part of this foundation yet.</p><Button asChild><Link href="/">Back to CreatorFlow</Link></Button></main>;
}