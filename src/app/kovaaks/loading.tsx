export default function Loading() {
  return (
    <main className="flex w-full flex-col items-center gap-6 px-4 py-8 sm:px-6 md:px-8">
      {/* Page title placeholder */}
      <div className="h-10 w-64 animate-pulse rounded-md bg-zinc-700/30" />
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="flex animate-pulse flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4"
          >
            {/* Timestamp placeholder */}
            <div className="h-3.25 w-24 rounded bg-zinc-700" />

            {/* Scenario name placeholder */}
            <div className="mt-2 h-4.5 w-full rounded bg-zinc-700" />

            {/* Score placeholder */}
            <div className="mt-1 h-4 w-16 rounded bg-[#ff9a9a]/50" />
          </div>
        ))}
      </div>
    </main>
  )
}
