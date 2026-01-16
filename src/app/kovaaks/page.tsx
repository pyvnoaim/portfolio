'use client'

import { useEffect, useState } from 'react'
import type { Highscore, KovaaksActivityItem } from '@/types/kovaaks'
import HighscoreCard from '@/components/HighscoreCard'
import KovaaksLoading from './loading'

const buildHighscore = (item: KovaaksActivityItem, entry?: Partial<Highscore>): Highscore => ({
  timestamp: new Date(item.timestamp).toISOString(),
  scenario: item.scenarioName,
  score: entry?.score ?? item.score,
  rank: entry?.rank ?? null,
  cm360: entry?.cm360 ?? null,
})

async function fetchRecentActivity(username: string): Promise<KovaaksActivityItem[]> {
  const res = await fetch(
    `https://kovaaks.com/webapp-backend/user/activity/recent?username=${username}`,
    { next: { revalidate: 60 } },
  )
  if (!res.ok) throw new Error('Failed to fetch recent activity')
  return res.json()
}

async function fetchLeaderboardRank(
  username: string,
  item: KovaaksActivityItem,
): Promise<Partial<Highscore> | null> {
  if (!item.leaderboardId) return null
  try {
    const res = await fetch(
      `https://kovaaks.com/webapp-backend/leaderboard/scores/global?leaderboardId=${item.leaderboardId}&page=0&max=1&usernameSearch=${username}`,
      { next: { revalidate: 60 } },
    )
    if (!res.ok) return null
    const data = await res.json()
    const entry = data.data?.[0]
    if (!entry) return null
    return {
      score: entry.score,
      rank: entry.rank,
      cm360: entry.attributes?.cm360 ?? null,
    }
  } catch {
    return null
  }
}

const formatDate = (timestamp?: string) => {
  if (!timestamp) return 'unknown date'
  const parsed = new Date(timestamp)
  if (isNaN(parsed.getTime())) return 'unknown date'
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(parsed)
}

export default function Kovaaks() {
  const [highscores, setHighscores] = useState<Highscore[]>([])
  const [loading, setLoading] = useState(true)
  const username = 'pyvno'

  useEffect(() => {
    const loadHighscores = async () => {
      try {
        const recentActivity = await fetchRecentActivity(username)
        const initialHighscores = recentActivity.map((item) => buildHighscore(item))
        setHighscores(initialHighscores)
        setLoading(false)

        const leaderboardCache = new Map<number, Partial<Highscore> | null>()
        const updatedHighscores = await Promise.all(
          recentActivity.map(async (item) => {
            if (!item.leaderboardId) return buildHighscore(item)
            if (!leaderboardCache.has(item.leaderboardId)) {
              const entry = await fetchLeaderboardRank(username, item)
              leaderboardCache.set(item.leaderboardId, entry)
            }
            const entry = leaderboardCache.get(item.leaderboardId)
            return buildHighscore(item, entry ?? undefined)
          }),
        )
        setHighscores(updatedHighscores)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }
    loadHighscores()
  }, [username])

  if (loading) return <KovaaksLoading />

  return (
    <div className="flex w-full flex-col items-center space-y-6 sm:px-6 md:px-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">latest highscores</h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {highscores.length ? (
          highscores.map((h) => (
            <HighscoreCard key={h.timestamp} highscore={h} formatDate={formatDate} />
          ))
        ) : (
          <p className="col-span-full text-center text-zinc-400">no highscores found</p>
        )}
      </div>
    </div>
  )
}
