import type { Highscore } from '@/types'

interface HighscoreCardProps {
  highscore: Highscore
  formatDate: (timestamp?: string) => string
}

export default function HighscoreCard({ highscore, formatDate }: HighscoreCardProps) {
  return (
    <div className="group flex flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md">
      <div className="sub-text text-xs text-zinc-400">{formatDate(highscore.timestamp)}</div>
      <div className="mt-1 text-sm font-semibold text-white duration-300 group-hover:text-[#ff9a9a]">
        {highscore.scenario}
      </div>
      <div className="mt-1 flex items-center gap-1 text-sm">
        <span className="text-[#ff9a9a] duration-300 group-hover:text-[#ff9a9a]/70">
          {highscore.score}
        </span>
        <span className="text-zinc-400"> | #</span>
        <span className="text-[#ff9a9a] duration-300 group-hover:text-[#ff9a9a]/70">
          {highscore.rank !== null ? (
            highscore.rank
          ) : (
            <span className="inline-block h-3 w-5 animate-pulse rounded bg-zinc-700"></span>
          )}
        </span>
        <span className="text-zinc-400"> | </span>
        <span className="text-[#ff9a9a] duration-300 group-hover:text-[#ff9a9a]/70">
          {highscore.cm360 !== null ? (
            highscore.cm360.toFixed(2)
          ) : (
            <span className="inline-block h-3 w-8 animate-pulse rounded bg-zinc-700"></span>
          )}
        </span>

        <span className="text-zinc-400"> cm/360</span>
      </div>
    </div>
  )
}
