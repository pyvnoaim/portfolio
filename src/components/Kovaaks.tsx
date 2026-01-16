'use client'

import { useEffect, useState } from 'react'
import type { Highscore, KovaaksActivityItem } from '@/types'
import HighscoreCard from '@/components/HighscoreCard'
import HighscoreCardSkeleton from '@/components/HighscoreCardSkeleton'
import { useFormatDate } from '@/lib/useFormatDate'

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

export default function Kovaaks() {
  const [highscores, setHighscores] = useState<Highscore[]>([])
  const [loading, setLoading] = useState(true)
  const username = 'pyvno'
  const formatDate = useFormatDate()

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

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {loading ? (
        Array.from({ length: 6 }).map((_, i) => <HighscoreCardSkeleton key={i} />)
      ) : highscores.length ? (
        highscores
          .slice(0, 6)
          .map((h) => <HighscoreCard key={h.timestamp} highscore={h} formatDate={formatDate} />)
      ) : (
        <p className="col-span-full text-center text-zinc-400">no highscores found</p>
      )}
    </div>
  )
}
