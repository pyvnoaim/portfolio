import PeripheralCard from '@/components/PeripheralCard'
import LinkCard from '@/components/LinkCard'
import Kovaaks from '@/components/Kovaaks'
import { Peripheral } from '@/types'
import SectionLayout from '@/components/SectionLayout'
import AchievementCard from '@/components/AchievementCard'

async function getPeripherals(): Promise<Peripheral[]> {
  const res = await fetch('http://pyvno.xyz/api/peripherals/active')
  if (!res.ok) throw new Error('failed to fetch peripherals')
  return res.json()
}

export default async function Home() {
  const items = await getPeripherals()
  const sortedItems = items.sort((a, b) => {
    const order = { mouse: 0, mousepad: 1, keyboard: 2, headset: 3 }
    return (order[a.type] ?? 99) - (order[b.type] ?? 99)
  })

  if (!items.length)
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
          {sortedItems.map((item) => (
            <PeripheralCard key={item.id} item={item} />
          ))}
        </div>
      </SectionLayout>

      {/* Achievements */}
      <SectionLayout title="achievements">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <AchievementCard title="valorant" rank="immortal 3" icon="/val_immortal_3.png" />
          <AchievementCard title="kovaak's / voltaic" rank="master s5" icon="/voltaic_master.svg" />
        </div>
      </SectionLayout>

      {/* Kovaaks */}
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
    </div>
  )
}
