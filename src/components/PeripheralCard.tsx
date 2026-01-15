import Link from 'next/link'
import type { Peripheral } from '@/types'
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

const cardClasses =
  'group flex h-full flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md'

interface PeripheralCardProps {
  item: Peripheral
}

export default function PeripheralCard({ item }: PeripheralCardProps) {
  const Icon = ICONS[item.type]

  const inner = (
    <div className={cardClasses}>
      <div className="flex items-center gap-1 text-xs text-zinc-400">
        <Icon className="text-md text-zinc-500" />
        <span className="lowercase group-hover:text-[#ff9a9a]">{item.type}</span>
      </div>

      <div className="mt-2 text-sm font-semibold text-white">
        {item.brand} {item.name}
      </div>

      {(item.using || item.sub) && (
        <div className="mt-1 flex items-center text-xs">
          {item.using && <span className="text-[#ff9a9a]">in use</span>}
          {item.using && item.sub && <span className="px-1 text-zinc-400">-</span>}
          {item.sub && <span className="text-zinc-400">{item.sub}</span>}
        </div>
      )}
    </div>
  )

  return item.link ? (
    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  )
}
