import Link from 'next/link'
import { FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import DecryptedText from '@/components/DecryptedText'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-900 py-8 duration-300 select-none hover:border-zinc-500">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center space-x-3 md:justify-start">
            <div className="relative h-5 w-5">
              <span className="absolute inset-0 z-0 h-5 w-5 animate-ping rounded-sm bg-[#ff9a9a] opacity-30" />
              <span className="absolute inset-0 z-10 h-5 w-5 rounded-sm bg-[#ff9a9a]" />
            </div>

            <Link
              href="https://x.com/rtiaul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit @rtiaul on X"
              className="p-2 duration-300 hover:text-[#ff9a9a]"
            >
              <div className="inline-flex w-18 justify-center md:justify-start">
                <DecryptedText
                  text="@rtiaul"
                  initialText="ritual"
                  speed={25}
                  sequential={false}
                  animateOn="hover"
                />
              </div>
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
