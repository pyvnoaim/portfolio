export interface Peripheral {
  id: number
  type: 'mouse' | 'mousepad' | 'keyboard' | 'headset'
  brand: string
  name: string
  sub: string | null
  using: boolean
  link: string | null
}
