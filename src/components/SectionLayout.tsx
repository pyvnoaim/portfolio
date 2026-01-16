export default function LayoutSection({
  title,
  children,
  maxWidth = 'max-w-7xl',
}: {
  title: string
  children: React.ReactNode
  maxWidth?: string
}) {
  return (
    <div className={`w-full ${maxWidth} space-y-4`}>
      <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">{title}</h1>
      {children}
    </div>
  )
}
