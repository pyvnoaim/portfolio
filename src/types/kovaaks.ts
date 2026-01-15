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

// Optional simplified type for frontend display
export interface Highscore {
  timestamp: string
  scenario: string
  score: number
}
