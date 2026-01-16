import PeripheralSkeleton from '@/components/PeripheralCardSkeleton'

export default function PeripheralLoading({ count = 4 }: { count?: number }) {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <PeripheralSkeleton key={i} />
      ))}
    </div>
  )
}
