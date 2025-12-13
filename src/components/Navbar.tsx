'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'home', href: '/' },
  { label: 'peripherals', href: '/peripherals' },
  { label: 'kovaaks', href: '/kovaaks' },
  { label: 'tools', href: '/tools' },
]

export const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900/70 py-4 backdrop-blur-sm duration-300 select-none">
      <div className="flex items-center justify-between px-4 sm:px-0">
        <div className="hidden w-full justify-center gap-6 sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-md relative flex items-center justify-center px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? 'text-[#ff9a9a] hover:scale-105'
                    : 'text-zinc-300 hover:scale-105 hover:text-[#ff9a9a]'
                }`}
                aria-label={item.label}
              >
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#ff9a9a] transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="flex w-full justify-end sm:hidden">
          <button
            className="text-2xl text-zinc-300 hover:text-[#ff9a9a]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 flex flex-col gap-4 px-4 sm:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-md relative flex items-center justify-start px-4 py-2 transition-all duration-300 ${
                  isActive ? 'text-[#ff9a9a]' : 'text-zinc-300 hover:text-[#ff9a9a]'
                }`}
                aria-label={item.label}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`absolute top-1/2 left-0 h-0.5 w-6 origin-left bg-[#ff9a9a] transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  } -translate-y-1/2`}
                ></span>
                <span className="pl-8">{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
