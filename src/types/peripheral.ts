export type PeripheralType = 'mouse' | 'mousepad' | 'keyboard' | 'headset'

export interface Peripheral {
  id: number
  type: PeripheralType
  brand: string
  name: string
  variant: string | null
  color: string | null
  info: string | null
  using: boolean
  link: string | null
  since: string | null
  image: string | null
}
