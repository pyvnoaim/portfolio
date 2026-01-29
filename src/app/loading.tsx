import PeripheralSkeleton from '@/components/PeripheralCardSkeleton'
import LinkCardSkeleton from '@/components/LinkCardSkeleton'
import HighscoreCardSkeleton from '@/components/HighscoreCardSkeleton'
import AchievementCardSkeleton from '@/components/AchievementCardSkeleton'

/** Reusable section wrapper */
function Section({
  title,
  children,
  maxWidth = 'max-w-7xl',
}: {
  title: string
  children: React.ReactNode
  maxWidth?: string
}) {
  return (
    <div className={`w-full ${maxWidth} space-y-4`}>
      <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">{title}</h1>
      {children}
    </div>
  )
}

export default function Loading() {
  const kovaaksSkeletonCount = 6
  const peripheralSkeletonCount = 4
  const linkSkeletonCount = 4
  const achievementSkeletonCount = 2 // adjust based on number of achievements you show

  return (
    <div className="flex w-full flex-col items-center space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 md:space-y-12 md:px-8">
      {/* Links */}
      <Section title="links" maxWidth="max-w-2xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: linkSkeletonCount }).map((_, i) => (
            <LinkCardSkeleton key={i} />
          ))}
        </div>
      </Section>

      {/* Peripherals */}
      <Section title="active peripherals">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: peripheralSkeletonCount }).map((_, i) => (
            <PeripheralSkeleton key={i} />
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section title="achievements">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {Array.from({ length: achievementSkeletonCount }).map((_, i) => (
            <AchievementCardSkeleton key={i} />
          ))}
        </div>
      </Section>

      {/* Kovaaks */}
      <Section title="latest kovaaks scores">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: kovaaksSkeletonCount }).map((_, i) => (
            <HighscoreCardSkeleton key={i} />
          ))}
        </div>
      </Section>

      {/* Social */}
      <Section title="social activity" maxWidth="max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="aspect-video w-full max-w-lg animate-pulse rounded-lg bg-zinc-800/40 sm:w-3/5 md:w-2/5" />
        </div>
      </Section>
    </div>
  )
}
