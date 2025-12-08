import Link from 'next/link'
import { FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import DecryptedText from '@/components/DecryptedText'

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-900 py-8 select-none">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-4 text-white md:grid-cols-3">
        <div className="flex items-center space-x-3">
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
            <div className="inline-flex w-[72px] justify-center">
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

        <div className="text-center">
          made by <span className="text-[#ff9a9a]">@pyvnoaim</span>
        </div>

        <nav className="flex justify-end space-x-4" aria-label="Social media links">
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
    </footer>
  )
}
