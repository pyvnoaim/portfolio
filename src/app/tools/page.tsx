import TextType from '@/components/TextType'

export default function Peripherals() {
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
