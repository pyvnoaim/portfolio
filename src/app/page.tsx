'use client'

import { useEffect, useState } from 'react'
import { Peripheral } from '@/types'
import PeripheralSkeleton from '@/components/PeripheralCardSkeleton'
import PeripheralCard from '@/components/PeripheralCard'

export default function Home() {
  const [items, setItems] = useState<Peripheral[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeripherals = async () => {
      try {
        const res = await fetch('/api/peripherals/active')
        const data: Peripheral[] = await res.json()

        const order = ['mouse', 'mousepad', 'keyboard', 'headset']
        const sortedItems = data.sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type))

        setItems(sortedItems)
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <PeripheralSkeleton key={i} />
          ))}
        </div>
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
          <PeripheralCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}
