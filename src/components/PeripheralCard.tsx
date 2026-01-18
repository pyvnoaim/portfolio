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
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <Icon className="h-4 w-4 text-zinc-500" />
          <span className="sub-text lowercase">{item.type}</span>
        </div>

        <div className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#ff9a9a]">
          {item.brand} {item.name}
        </div>

        {(item.using || item.sub) && (
          <div className="flex items-center space-x-1 text-xs">
            {item.using && (
              <span className="text-[#ff9a9a] duration-300 group-hover:text-[#ff9a9a]/70">
                in use
              </span>
            )}
            {item.using && item.sub && <span className="text-zinc-400">-</span>}
            {item.sub && <span className="text-zinc-400">{item.sub}</span>}
          </div>
        )}
      </div>
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
