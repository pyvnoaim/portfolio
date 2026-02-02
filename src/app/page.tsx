'use client'

import { useEffect, useState } from 'react'
import PeripheralCard from '@/components/PeripheralCard'
import PeripheralCardSkeleton from '@/components/PeripheralCardSkeleton'
import LinkCard from '@/components/LinkCard'
import Kovaaks from '@/components/Kovaaks'
import { Peripheral } from '@/types'
import SectionLayout from '@/components/SectionLayout'
import AchievementCard from '@/components/AchievementCard'
import TextType from '@/components/TextType'

export default function Home() {
  const [items, setItems] = useState<Peripheral[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeripherals = async () => {
      try {
        const res = await fetch('/api/peripherals/active')
        const data: Peripheral[] = await res.json()
        setItems(data)
      } catch (err) {
        console.error('failed to fetch peripherals', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPeripherals()
  }, [])

  const sortedItems = items.sort((a, b) => {
    const order = { mouse: 0, mousepad: 1, keyboard: 2, headset: 3 }
    return (order[a.type] ?? 99) - (order[b.type] ?? 99)
  })

  if (!items.length && !loading)
    return <p className="mt-8 text-center text-zinc-400">no active peripherals found</p>

  return (
    <div className="flex w-full flex-col items-center space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 md:space-y-12 md:px-8">
      {/* Links */}
      <SectionLayout title="links" maxWidth="max-w-2xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LinkCard url="https://gearz.gg/pyvno" title="peripherals" />
          <LinkCard url="https://x.com/pyvnoaim" title="twitter" />
          <LinkCard url="https://evxl.app/u/pyvno" title="benchmarks" />
          <LinkCard url="https://konect.gg/rtiaul" title="ritual" />
        </div>
      </SectionLayout>

      {/* Peripherals */}
      <SectionLayout title="active peripherals">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <PeripheralCardSkeleton key={i} />)
            : sortedItems.map((item) => <PeripheralCard key={item.id} item={item} />)}
        </div>
      </SectionLayout>

      {/* Achievements */}
      <SectionLayout title="achievements">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <AchievementCard title="valorant" rank="immortal 3" icon="/val_immortal_3.png" />
          <AchievementCard title="kovaak's / voltaic" rank="master s5" icon="/voltaic_master.svg" />
        </div>
      </SectionLayout>

      {/* Kovaaks Scores */}
      <SectionLayout title="latest kovaaks scores">
        <Kovaaks />
      </SectionLayout>

      {/* Social */}
      <SectionLayout title="social activity" maxWidth="max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="mx-auto aspect-video w-full max-w-lg sm:w-3/5 md:w-2/5">
            <iframe
              className="h-full w-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/ff4ka5-7khM"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </SectionLayout>

      {/* Kovaaks Playlists */}
      <SectionLayout title="kovaaks playlists">
        <div className="flex flex-wrap justify-center">
          <TextType
            text={['coming soon...', 'stay tuned!']}
            cursorCharacter="_"
            typingSpeed={75}
            deletingSpeed={75}
            className="text-sm text-zinc-400 italic"
          />
        </div>
      </SectionLayout>
    </div>
  )
}
