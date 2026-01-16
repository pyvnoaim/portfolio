export default function HighscoreCardSkeleton() {
  return (
    <div className="flex min-h-25 flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300">
      <div className="h-3 w-28 animate-pulse rounded bg-zinc-700" />
      <div className="mt-1 h-5 w-3/4 animate-pulse rounded bg-zinc-700" />
      <div className="mt-1 flex items-center gap-1">
        <div className="h-4 w-10 animate-pulse rounded bg-[#ff9a9a]/50" />
        <div className="h-4 w-3 animate-pulse rounded bg-zinc-700" />
        <div className="h-4 w-10 animate-pulse rounded bg-[#ff9a9a]/50" />
        <div className="h-4 w-3 animate-pulse rounded bg-zinc-700" />
        <div className="h-4 w-14 animate-pulse rounded bg-[#ff9a9a]/50" />
      </div>
    </div>
  )
}
