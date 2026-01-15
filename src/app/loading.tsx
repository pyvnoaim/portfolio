import PeripheralSkeleton from '@/components/PeripheralCardSkeleton'
import LinkCardSkeleton from '@/components/LinkCardSkeleton'

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center space-y-12 px-4 py-8 sm:px-6 md:px-8">
      {/* Links */}
      <div className="w-full max-w-2xl space-y-4">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">links</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <LinkCardSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Peripherals */}
      <div className="w-full max-w-7xl space-y-4">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">active peripherals</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <PeripheralSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="w-full max-w-6xl space-y-4">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">social activity</h1>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="aspect-video w-full animate-pulse rounded-lg bg-zinc-800/40 sm:w-3/5 md:w-2/5" />
        </div>
      </div>
    </div>
  )
}
