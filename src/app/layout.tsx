import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pyvno.xyz'),
  title: {
    template: '%s | pyvolio',
    default: 'home | pyvolio',
  },
  description: "pyvno's portfolio",
  keywords: ['gaming', 'peripherals', 'aim', 'tech', 'pyvolio', 'pyvno'],
  authors: [{ name: 'pyvno' }],
  openGraph: {
    title: 'pyvolio',
    description: "pyvno's portfolio",
    url: 'https://pyvno.xyz/',
    siteName: 'pyvolio',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'pyvolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pyvolio',
    description: "pyvno's portfolio",
    images: ['/banner.png'],
    creator: '@pyvnoaim',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff9a9a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex w-full flex-1 flex-col items-center justify-start overflow-auto pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
