import Link from 'next/link'
import type { Peripheral } from '@/types'
import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'

const ICONS: Record<Peripheral['type'], React.ReactElement> = {
  mouse: <MdOutlineMouse className="text-md" />,
  mousepad: <LuSquareMousePointer className="text-md" />,
  keyboard: <FaRegKeyboard className="text-md" />,
  headset: <FiHeadphones className="text-md" />,
}

interface PeripheralCardProps {
  item: Peripheral
}

export default function PeripheralCard({ item }: PeripheralCardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-lg border border-zinc-700 bg-zinc-900 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md">
      <div className="flex items-center gap-1 text-xs text-zinc-400">
        <span className="text-zinc-500">{ICONS[item.type]}</span>
        <span className="lowercase group-hover:text-[#ff9a9a]">{item.type}</span>
      </div>

      <div className="mt-2 text-sm font-semibold text-white">
        {item.brand} {item.name}
      </div>

      {item.sub && <div className="mt-1 text-xs text-zinc-400">{item.sub}</div>}
      {item.using && <div className="mt-1 text-xs text-[#ff9a9a]">in use</div>}
    </div>
  )

  if (!item.link) return content

  return (
    <Link
      href={item.link ?? '#'}
      target={item.link ? '_blank' : undefined}
      rel={item.link ? 'noopener noreferrer' : undefined}
      className="block h-full"
    >
      {content}
    </Link>
  )
}
