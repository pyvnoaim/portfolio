'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  return (
    <nav className="fixed top-0 z-50 flex w-full justify-center py-4 select-none">
      <div className="flex space-x-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center justify-center px-4 py-2 transition-all duration-300 hover:scale-105 ${
                isActive ? 'font-semibold text-[#ff9a9a]' : 'hover:text-[#ff9a9a]'
              }`}
              aria-label={item.label}
            >
              <span
                className={`absolute top-1/2 left-[-4] -translate-y-1/2 text-[#ff9a9a] transition-all duration-300 ease-out ${
                  isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                {'//'}
              </span>

              <span className="text-lg">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
