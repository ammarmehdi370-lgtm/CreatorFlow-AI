"use client";

import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/ui/error-state";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="mx-auto grid min-h-screen max-w-xl content-center gap-5 p-6"><ErrorState title="This page hit a snag" description="The error has been contained. You can retry the page without losing the rest of your workspace." /><Button onClick={reset}>Try again</Button></main>;
}