'use client'

import { useEffect, useState } from 'react'
import type { Peripheral } from '@/types'
import PeripheralCard from '@/components/PeripheralCard'
import PeripheralLoading from './loading'

const TYPE_NAMES: Record<Peripheral['type'], string> = {
  mouse: 'mice',
  mousepad: 'mousepads',
  keyboard: 'keyboards',
  headset: 'headsets',
}

const TYPE_ORDER: Peripheral['type'][] = ['mouse', 'mousepad', 'keyboard', 'headset']

export default function Page() {
  const [items, setItems] = useState<Peripheral[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeripherals = async () => {
      try {
        const res = await fetch('/api/peripherals')
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

  const grouped = TYPE_ORDER.reduce(
    (acc, type) => {
      acc[type] = items
        .filter((item) => item.type === type)
        .sort((a, b) => Number(b.using) - Number(a.using))
      return acc
    },
    {} as Record<Peripheral['type'], Peripheral[]>,
  )

  if (!items.length && !loading) {
    return (
      <main className="flex flex-1 items-center justify-center px-4 sm:px-6 md:px-8">
        <p className="text-zinc-400">no active peripherals found</p>
      </main>
    )
  }

  return (
    <div className="flex w-full flex-col space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 md:space-y-12 md:px-8">
      {TYPE_ORDER.map((type) => (
        <section key={type} className="w-full">
          <h2 className="mb-4 text-center text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            {TYPE_NAMES[type]}
          </h2>

          {loading ? (
            <PeripheralLoading count={4} />
          ) : (
            <div className="grid auto-rows-fr grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {grouped[type]?.map((item) => (
                <PeripheralCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
