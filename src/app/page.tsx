import PeripheralCard from '@/components/PeripheralCard'
import LinkCard from '@/components/LinkCard'
import { Peripheral } from '@/types'

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

  if (!items.length) {
    return <p className="mt-8 text-center text-zinc-400">no active peripherals found</p>
  }

  return (
    <div className="flex w-full flex-col items-center space-y-12 px-4 py-8 sm:px-6 md:px-8">
      {/* Links */}
      <div className="w-full max-w-2xl space-y-4">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">links</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LinkCard url="https://gearz.gg/pyvno" title="gearz" />
          <LinkCard url="https://x.com/pyvnoaim" title="twitter" />
          <LinkCard url="https://evxl.app/u/pyvno" title="benchmarks" />
          <LinkCard url="https://konect.gg/rtiaul" title="ritual" />
        </div>
      </div>

      {/* Peripherals */}
      <div className="w-full max-w-7xl space-y-4">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">active peripherals</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedItems.map((item) => (
            <PeripheralCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="w-full max-w-6xl space-y-4">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">social activity</h1>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="aspect-video w-full sm:w-3/5 md:w-2/5">
            <iframe
              className="h-full w-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/ff4ka5-7khM"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
