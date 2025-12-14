'use client'

import { useEffect, useState } from 'react'
import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'
import { Peripheral } from '@/types'

const iconsMap = {
  mouse: <MdOutlineMouse />,
  mousepad: <LuSquareMousePointer />,
  keyboard: <FaRegKeyboard />,
  headset: <FiHeadphones />,
}

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
        <p className="text-zinc-400">no active peripherals found</p>
      </main>
    )

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex min-h-24 flex-col rounded-xl border border-zinc-700 p-4 transition-all duration-300 hover:scale-[1.03] hover:border-zinc-500 hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-zinc-500">{iconsMap[item.type]}</span>
              <span className="group-hover:text-[#ff9a9a]">{item.type}</span>
            </div>
            <div className="mt-2 text-base font-semibold">
              {item.brand} {item.name}
            </div>
            {item.sub && <div className="mt-1 text-xs text-zinc-400">{item.sub}</div>}
          </div>
        ))}
      </div>
    </main>
  )
}
