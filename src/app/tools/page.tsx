import TextType from '@/components/TextType'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'tools',
}

export default function Tools() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900">
      <main className="flex flex-1 items-center justify-center">
        <div className="flex items-center text-4xl font-bold text-white">
          <span>@</span>
          <TextType text={['tools']} cursorCharacter="_" typingSpeed={75} deletingSpeed={75} />
        </div>
      </main>
    </div>
  )
}
