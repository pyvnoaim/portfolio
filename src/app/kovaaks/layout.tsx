import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'kovaaks',
}

export default function KovaaksLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full flex-1 flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-8">
      {children}
    </main>
  )
}
