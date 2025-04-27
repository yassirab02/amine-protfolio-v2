import { Link } from "react-router-dom";
import { Camera, Instagram, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-gray-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Footer top - Logo and main links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-black/10 dark:border-white/10 pb-10">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="block">
              <h2 className="text-3xl font-serif text-black dark:text-white tracking-wider">
                Amine Rihani
              </h2>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60 tracking-widest font-light">
                PHOTOGRAPHER & FILMMAKER
              </p>
            </Link>
          </div>

          {/* Navigation Links - Mobile Column, Desktop Row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-black dark:text-white text-sm tracking-wider mb-4">
                EXPLORE
              </h3>
              <Link
                to="/stills"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Stills
              </Link>
              <Link
                to="/motion"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Motion
              </Link>
              <Link
                to="/portfolio"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Portfolio
              </Link>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-black dark:text-white text-sm tracking-wider mb-4">
                ABOUT
              </h3>
              <Link
                to="/about"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Bio
              </Link>
              <Link
                to="/about#philosophy"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Philosophy
              </Link>
              <Link
                to="/about#achievements"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Achievements
              </Link>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-black dark:text-white text-sm tracking-wider mb-4">
                CONNECT
              </h3>
              <Link
                to="/contact"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Contact
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Instagram
              </a>
              <Link
                to="/contact#booking"
                className="block text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
              >
                Booking
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom - Copyright and social */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/50 dark:text-white/50 text-xs mb-6 md:mb-0">
            © {new Date().getFullYear()} Amine Rihani. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:rihani.amine111@gmail.com"
              className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amine-rihani-66487a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <Link
              to="/portfolio"
              className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Camera className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
