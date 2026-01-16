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
  { label: 'peripherals.db', href: '/peripherals' },
]

export const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900/70 py-4 shadow-md backdrop-blur-sm select-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Desktop Links */}
        <div className="hidden gap-8 sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-[#ff9a9a]' : 'text-zinc-300 hover:text-[#ff9a9a]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#ff9a9a] transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  } origin-left`}
                ></span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden">
          <button
            className="text-2xl text-zinc-300 hover:text-[#ff9a9a] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 w-full origin-top transform transition-all duration-200 sm:hidden">
          <div className="flex flex-col gap-4 rounded-md bg-zinc-900/90 px-4 pb-4 shadow-lg backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#ff9a9a]' : 'text-zinc-300 hover:text-[#ff9a9a]'
                  }`}
                >
                  {item.label}
                  {/* Active underline on mobile moved below text */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#ff9a9a]"></span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
