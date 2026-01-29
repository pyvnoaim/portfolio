'use client'

import { useState } from 'react'
import type { Peripheral } from '@/types'
import PeripheralModal from '@/components/PeripheralModal'
import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'

const ICONS: Record<Peripheral['type'], React.ComponentType<{ className?: string }>> = {
  mouse: MdOutlineMouse,
  mousepad: LuSquareMousePointer,
  keyboard: FaRegKeyboard,
  headset: FiHeadphones,
}

function isNewSince(dateStr: string | null | undefined, days = 30): boolean {
  if (!dateStr) return false

  const [dd, mm, yyyy] = dateStr.split('.').map(Number)
  if (!dd || !mm || !yyyy) return false

  const sinceDate = new Date(yyyy, mm - 1, dd)
  const now = new Date()

  const diffMs = now.getTime() - sinceDate.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)

  return diffDays <= days
}

const cardClasses =
  'relative group flex h-full cursor-pointer flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md'

export default function PeripheralCard({ item }: { item: Peripheral }) {
  const Icon = ICONS[item.type]
  const isNew = isNewSince(item.since)
  const [open, setOpen] = useState(false)

  const details = [
    item.using ? (
      <span key="using" className="text-[#ff9a9a]">
        in use
      </span>
    ) : null,
    item.variant && <span key="variant">{item.variant}</span>,
    item.color && <span key="color">{item.color}</span>,
    item.info && <span key="info">{item.info}</span>,
  ].filter(Boolean)

  return (
    <>
      <div className={cardClasses} onClick={() => setOpen(true)}>
        {isNew && (
          <span className="absolute top-2 right-2 rounded bg-[#ff9a9a] px-1.5 py-0.5 text-[10px] font-semibold text-zinc-900">
            new
          </span>
        )}

        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <Icon className="h-4 w-4 text-zinc-500" />
            <span className="lowercase">{item.type}</span>
          </div>

          <div className="text-sm font-semibold text-white transition-all duration-300 group-hover:text-[#ff9a9a]">
            {item.brand} {item.name}
          </div>

          {details.length > 0 && (
            <div className="flex items-center space-x-1 text-xs text-zinc-400">
              {details.map((d, i) => (
                <span key={i}>
                  {d}
                  {i < details.length - 1 && ' | '}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <PeripheralModal item={item} open={open} onClose={() => setOpen(false)} />
    </>
  )
}
