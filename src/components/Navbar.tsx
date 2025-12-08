'use client'

import Link from 'next/link'

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

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full justify-center bg-transparent py-4">
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-center px-4 py-2 transition-all duration-300 hover:text-[#ff9a9a]"
            aria-label={item.label}
          >
            <span className="text-lg font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
