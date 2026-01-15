export default function LinkCardSkeleton() {
  return (
    <div className="group flex h-full animate-pulse flex-row items-center justify-between rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      {/* Left side: favicon + text */}
      <div className="flex items-center gap-4">
        {/* Favicon */}
        <div className="h-8 w-8 rounded-md bg-zinc-700" />

        {/* Title and URL */}
        <div className="flex flex-col gap-1">
          <div className="h-4 w-32 rounded bg-zinc-700" />
          <div className="h-3 w-24 rounded bg-zinc-700" />
        </div>
      </div>

      {/* Icon placeholder */}
      <div className="h-5 w-5 rounded bg-zinc-700" />
    </div>
  )
}
