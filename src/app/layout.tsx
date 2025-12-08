import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  description: '+aim +peripherals',
  keywords: ['gaming', 'peripherals', 'aim', 'tech', 'pyvolio', 'pyvno'],
  authors: [{ name: 'pyvno' }],
  openGraph: {
    title: 'pyvolio',
    description: '+aim +peripherals',
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
    description: '+aim +peripherals',
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
      <body className="flex h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
