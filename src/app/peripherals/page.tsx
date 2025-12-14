'use client'

import { useEffect, useState } from 'react'
import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'
import { Peripheral } from '@/types'

const iconsMap: Record<string, React.ReactElement> = {
  mouse: <MdOutlineMouse className="text-lg" />,
  mousepad: <LuSquareMousePointer className="text-lg" />,
  keyboard: <FaRegKeyboard className="text-lg" />,
  headset: <FiHeadphones className="text-lg" />,
}

const typeNames: Record<string, string> = {
  mouse: 'mice',
  mousepad: 'mousepads',
  keyboard: 'keyboards',
  headset: 'headsets',
}

export default function Peripherals() {
  const [items, setItems] = useState<Peripheral[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeripherals = async () => {
      try {
        const res = await fetch('/api/peripherals')
        const data: Peripheral[] = await res.json()

        const sorted = data.sort((a, b) => {
          if (a.type !== b.type) return a.type.localeCompare(b.type)
          const brandNameA = `${a.brand} ${a.name}`
          const brandNameB = `${b.brand} ${b.name}`
          return brandNameA.localeCompare(brandNameB)
        })

        setItems(sorted)
      } catch (err) {
        console.error('Failed to fetch peripherals', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPeripherals()
  }, [])

  if (loading)
    return (
      <main className="flex flex-1 items-center justify-center">
        <p className="text-zinc-400">loading peripherals...</p>
      </main>
    )

  if (!items.length)
    return (
      <main className="flex flex-1 items-center justify-center">
        <p className="text-zinc-400">no peripherals found</p>
      </main>
    )

  const grouped: Record<string, Peripheral[]> = {}
  items.forEach((item) => {
    if (!grouped[item.type]) grouped[item.type] = []
    grouped[item.type].push(item)
  })
  Object.keys(grouped).forEach((type) => {
    grouped[type].sort((a, b) => Number(b.using) - Number(a.using))
  })

  return (
    <div className="flex min-h-screen px-4 pb-4 sm:px-6 sm:pb-0 md:px-8">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-7xl">
          {Object.keys(grouped).map((type) => (
            <div key={type} className="mb-8 w-full last:mb-0">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                {iconsMap[type]} {typeNames[type] || type + 's'}
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {grouped[type].map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md"
                  >
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <span className="text-zinc-500">{iconsMap[item.type]}</span>
                      <span className="lowercase group-hover:text-[#ff9a9a]">{item.type}</span>
                    </div>

                    <div className="mt-2 text-sm font-semibold text-white">
                      {item.brand} {item.name}
                    </div>

                    {item.sub && <div className="mt-1 text-xs text-zinc-400">{item.sub}</div>}
                    {item.using && <div className="mt-1 text-xs text-[#ff9a9a]">in use</div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
