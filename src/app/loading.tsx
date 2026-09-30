import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return <main className="mx-auto min-h-screen max-w-5xl p-8" aria-label="Loading CreatorFlow"><Skeleton className="h-8 w-48" /><Skeleton className="mt-4 h-4 w-72" /><Skeleton className="mt-10 h-64 w-full" /></main>;
}