import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'peripherals',
}

export default function PeripheralsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  )
}
