import TextType from '@/components/TextType'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <TextType
        text={['page not found', 'error 404']}
        cursorCharacter="_"
        typingSpeed={75}
        deletingSpeed={75}
        className="text-3xl font-semibold"
      />
      <p className="text-zinc-400">the resource you’re looking for doesn’t exist</p>
    </div>
  )
}
