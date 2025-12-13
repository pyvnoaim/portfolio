'use client'

import { useEffect, useState } from 'react'
import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'
import { Peripheral } from '@/types'
import TextType from '@/components/TextType'

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
        const res = await fetch('/api/peripherals')
        const data: Peripheral[] = await res.json()
        setItems(data.filter((item) => item.using))
      } catch (err) {
        console.error('Failed to fetch peripherals', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPeripherals()
  }, [])

  if (loading) return <p className="mt-8 text-center text-zinc-400">loading peripherals...</p>
  if (!items.length)
    return <p className="mt-8 text-center text-zinc-400">no active peripherals found</p>

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center gap-8 py-8">
        <div className="flex items-center text-4xl font-bold text-white">
          <span>@</span>
          <TextType
            text={['pyvnoaim', 'rtiaul']}
            cursorCharacter="_"
            typingSpeed={75}
            deletingSpeed={75}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 select-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex min-h-24 flex-col rounded-xl border border-zinc-700 p-4 transition-all duration-300 hover:scale-[1.03] hover:border-zinc-500 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="text-zinc-500" aria-label={item.type}>
                  {iconsMap[item.type]}
                </span>
                <span className="transition-colors duration-300 group-hover:text-[#ff9a9a]">
                  {item.type}
                </span>
              </div>
              <div className="mt-2 text-base font-semibold">{`${item.brand} ${item.name}`}</div>
              {item.sub && <div className="mt-1 text-xs text-zinc-400">{item.sub}</div>}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
