import Link from 'next/link';
import { FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import DecryptedText from '@/components/DecryptedText';

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center text-white">
        <div className="flex items-center space-x-3">
          <div className="relative h-5 w-5">
            <span className="absolute inset-0 h-5 w-5 rounded-sm bg-[#ff9a9a] opacity-30 animate-ping z-0" />
            <span className="absolute inset-0 h-5 w-5 rounded-sm bg-[#ff9a9a] z-10" />
          </div>

          <Link
            href="https://x.com/rtiaul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit @rtiaul on X"
            className="hover:text-[#ff9a9a] duration-300"
          >
            <DecryptedText
              text="@rtiaul"
              initialText="ritual"
              speed={75}
              sequential={false}
              animateOn="hover"
            />
          </Link>
        </div>

        <div className="text-center">
          made by <span className="text-[#ff9a9a]">@pyvnoaim</span>{' '}
        </div>

        <nav
          className="flex justify-end space-x-4"
          aria-label="Social media links"
        >
          <Link
            href="https://x.com/@pyvnoaim"
            target="_blank"
            aria-label="X/Twitter"
            rel="noopener noreferrer"
            className="hover:text-[#ff9a9a] hover:scale-125 duration-300"
          >
            <FaXTwitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/pyvnoaim"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
            className="hover:text-[#ff9a9a] hover:scale-125 duration-300"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://youtube.com/@pyvno"
            target="_blank"
            aria-label="YouTube"
            rel="noopener noreferrer"
            className="hover:text-[#ff9a9a] hover:scale-125 duration-300"
          >
            <FaYoutube className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
