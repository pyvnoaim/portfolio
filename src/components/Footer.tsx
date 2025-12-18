import Link from 'next/link'
import { FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import DecryptedText from '@/components/DecryptedText'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-900 py-8 duration-300 select-none hover:border-zinc-500">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image src="/ritual_logo.svg" alt="Ritual Logo" width={20} height={20} priority />

            <Link
              href="https://x.com/rtiaul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit @rtiaul on X"
              className="group inline-flex items-center rounded-md px-2 py-1 transition-colors duration-200 hover:text-[#ff9a9a]"
            >
              <DecryptedText
                text="@rtiaul"
                initialText="ritual"
                speed={15}
                sequential={false}
                animateOn="hover"
                className="whitespace-nowrap"
              />
            </Link>
          </div>

          <div className="text-center text-sm md:text-base">
            made by <span className="text-[#ff9a9a]">@pyvnoaim</span>
          </div>

          <nav
            className="flex justify-center space-x-4 md:justify-end"
            aria-label="Social media links"
          >
            <Link
              href="https://x.com/@pyvnoaim"
              target="_blank"
              aria-label="X/Twitter"
              rel="noopener noreferrer"
              className="p-2 duration-300 hover:scale-125 hover:text-[#ff9a9a]"
            >
              <FaXTwitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/pyvnoaim"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
              className="p-2 duration-300 hover:scale-125 hover:text-[#ff9a9a]"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/@pyvno"
              target="_blank"
              aria-label="YouTube"
              rel="noopener noreferrer"
              className="p-2 duration-300 hover:scale-125 hover:text-[#ff9a9a]"
            >
              <FaYoutube className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
