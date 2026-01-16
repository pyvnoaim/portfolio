export interface KovaaksActivityItem {
  timestamp: string
  type: 'HIGH_SCORE' | string
  scenarioName: string
  score: number
  leaderboardId: number
  username: string
  webappUsername: string
  steamId: string
  steamAccountName: string
  steamAccountAvatar: string
  country: string
  kovaaksPlus: boolean
}

export interface Highscore {
  timestamp: string
  scenario: string
  score: number
  rank: number | null
  cm360: number | null
}
