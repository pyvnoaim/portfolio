import TextType from '@/components/TextType'

export default function Settings() {
  return (
    <div className="flex w-full flex-col items-center space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 md:space-y-12 md:px-8">
      <TextType
        text={['settings page coming soon...', 'stay tuned!']}
        cursorCharacter="_"
        typingSpeed={50}
        deletingSpeed={50}
        className="text-sm text-zinc-400 italic"
      />
    </div>
  )
}
