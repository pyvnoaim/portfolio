export default function PeripheralSkeleton() {
  return (
    <div className="flex h-full w-60 animate-pulse flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      <div className="flex items-center gap-1 text-xs text-zinc-400">
        <div className="h-4 w-4 rounded bg-zinc-700" />
        <div className="h-3 w-12 rounded bg-zinc-700" />
      </div>
      <div className="mt-2 h-4 w-[95%] rounded bg-zinc-700" />
      <div className="mt-1 h-3 w-[75%] rounded bg-zinc-800" />
      <div className="mt-1 h-3 w-10 rounded bg-zinc-700" />
    </div>
  )
}
