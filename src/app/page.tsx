import { FiHeadphones } from 'react-icons/fi'
import { MdOutlineMouse } from 'react-icons/md'
import { FaRegKeyboard } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'

export default function Home() {
  const items = [
    {
      icon: <MdOutlineMouse />,
      label: 'mouse',
      title: 'pulsar x2f',
      sub: 'artisan mizugumo futae p8',
    },
    {
      icon: <LuSquareMousePointer />,
      label: 'mousepad',
      title: 'artisan fx raiden',
      sub: 'soft - daidai orange',
    },
    { icon: <FaRegKeyboard />, label: 'keyboard', title: 'wooting 60he', sub: '' },
    { icon: <FiHeadphones />, label: 'headphones', title: 'tekkusai lucid', sub: '' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center gap-8 py-8">
        <div className="grid grid-cols-1 gap-4 select-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex min-h-24 flex-col rounded-xl border border-zinc-700 p-4 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-zinc-500 dark:bg-zinc-900/40 dark:hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="text-zinc-500">{item.icon}</span>
                <span className="transition-colors duration-300 group-hover:text-[#ff9a9a]">
                  {item.label}
                </span>
              </div>
              <div className="mt-2 text-base font-semibold">{item.title}</div>
              {item.sub && <div className="mt-1 text-xs text-zinc-400">{item.sub}</div>}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
