// Kovaaks.tsx
import type { KovaaksActivityItem, Highscore } from '@/types'

async function getHighscores(username: string): Promise<Highscore[]> {
  const res = await fetch(
    `https://kovaaks.com/webapp-backend/user/activity/recent?username=${username}`,
    { next: { revalidate: 60 } },
  )
  if (!res.ok) throw new Error('Failed to fetch highscores')

  const data: KovaaksActivityItem[] = await res.json()

  return data
    .map((item) => ({
      timestamp: item.timestamp,
      scenario: item.scenarioName,
      score: item.score,
    }))
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
}

const formatDate = (timestamp?: string) => {
  if (!timestamp) return 'unknown date'
  const parsed = new Date(timestamp)
  if (isNaN(parsed.getTime())) return 'unknown date'
  const pad = (n: number) => n.toString().padStart(2, '0')
  const day = pad(parsed.getDate())
  const month = pad(parsed.getMonth() + 1)
  const year = parsed.getFullYear()
  const hours = pad(parsed.getHours())
  const minutes = pad(parsed.getMinutes())
  return `${day}.${month}.${year} ${hours}:${minutes}`
}

export default async function Kovaaks() {
  const highscores: Highscore[] = await getHighscores('pyvno')

  if (!highscores.length) {
    return <p className="mt-4 text-center text-zinc-400">no highscores found</p>
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">latest highscores</h1>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {highscores.map((h, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md"
          >
            <div className="text-xs text-zinc-400">{formatDate(h.timestamp)}</div>
            <div className="mt-1 text-sm font-semibold text-white">{h.scenario}</div>
            <div className="mt-1 text-sm text-[#ff9a9a]">{h.score}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
