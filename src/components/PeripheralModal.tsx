'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import type { Peripheral, PeripheralType } from '@/types'
import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'
import { X } from 'lucide-react'

interface PeripheralModalProps {
  item: Peripheral
  open: boolean
  onClose: () => void
}

const ICONS: Record<PeripheralType, React.ComponentType<{ className?: string }>> = {
  mouse: MdOutlineMouse,
  mousepad: LuSquareMousePointer,
  keyboard: FaRegKeyboard,
  headset: FiHeadphones,
}

export default function PeripheralModal({ item, open, onClose }: PeripheralModalProps) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const TypeIcon = ICONS[item.type]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* modal */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-md overflow-x-hidden overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900 shadow-lg">
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 cursor-pointer text-zinc-400 transition-all duration-300 hover:text-[#ff9a9a]"
        >
          <X size={20} />
        </button>

        {/* image banner */}
        {item.image && (
          <div className="relative flex h-40 w-full items-center justify-center bg-zinc-900 sm:h-52 md:h-56">
            <Image
              src={`/${item.image}`}
              alt={`${item.brand} ${item.name}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* content */}
        <div className="p-4 sm:p-6">
          <div className="mb-1 flex items-center gap-2 text-xs text-zinc-400">
            <TypeIcon className="h-4 w-4 text-zinc-500" />
            <span className="lowercase">{item.type}</span>
          </div>

          <h2 className="text-lg font-semibold text-white sm:text-xl">
            {item.brand} {item.name}
          </h2>

          <div className="mt-3 space-y-2 text-sm text-zinc-300 sm:text-base">
            {item.using && <div className="text-[#ff9a9a]">currently in use</div>}
            {item.variant && <div>variant: {item.variant}</div>}
            {item.color && <div>color: {item.color}</div>}
            {item.info && <div>info: {item.info}</div>}
            {item.since && <div>since: {item.since}</div>}
          </div>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-[#ff9a9a] hover:underline sm:text-base"
            >
              view product {'->'}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
