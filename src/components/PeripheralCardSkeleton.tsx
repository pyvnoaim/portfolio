export default function PeripheralCardSkeleton() {
  return (
    <div className="group flex h-full animate-pulse flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <div className="h-4 w-4 rounded bg-zinc-700" />
          <div className="h-3 w-10 rounded bg-zinc-700" />
        </div>

        <div className="h-5 w-3/4 rounded bg-zinc-700" />

        <div className="flex items-center space-x-1 text-xs text-zinc-400">
          <div className="h-3 w-10 rounded bg-[#ff9a9a]/50" />
          <div className="h-3 w-12 rounded bg-zinc-700" />
          <div className="h-3 w-8 rounded bg-zinc-700" />
          <div className="h-3 w-14 rounded bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}
