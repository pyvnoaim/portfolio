export default function PeripheralCardSkeleton() {
  return (
    <div className="group flex h-full animate-pulse flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      {/* Icon and type */}
      <div className="flex items-center gap-1 text-xs text-zinc-400">
        <div className="h-4 w-4 rounded bg-zinc-700" />
        <div className="h-4 w-12 rounded bg-zinc-700" />
      </div>

      {/* Brand and name */}
      <div className="mt-2 h-5 w-3/4 rounded bg-zinc-700" />

      {/* Status and sub */}
      <div className="mt-1 flex items-center gap-1">
        <div className="h-3 w-10 rounded bg-[#ff9a9a]/50" />
        <div className="h-3 w-4 rounded bg-zinc-700" />
        <div className="h-3 w-16 rounded bg-zinc-700" />
      </div>
    </div>
  )
}
