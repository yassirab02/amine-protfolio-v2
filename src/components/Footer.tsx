import { Link } from "react-router-dom";
import { Camera, Instagram, Mail, Linkedin } from "lucide-react";

import footer from "../assets/my logo white.png"


export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Footer top - Logo and main links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-white/10 pb-10">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="block">
              <div className="flex items-center gap-3">
                <img 
                  src= {footer}
                  alt="Amine Rihani Logo" 
                  className="w-18 h-12 mt-1 object-contain"
                />
                <div>
                  <h2 className="text-3xl font-serif text-white tracking-wider">
                    Amine Rihani
                  </h2>
                  <p className="mt-1 text-xs text-white/60 tracking-widest font-light">
                    PHOTOGRAPHER & FILMMAKER
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Mobile Grid, Desktop Row */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-2 md:flex md:flex-row md:gap-16">
            <div className="text-center md:text-left">
              <h3 className="text-white text-xs md:text-sm tracking-wider mb-2 md:mb-4">
                EXPLORE
              </h3>
              <div className="space-y-1 md:space-y-3">
                <Link to="/stills" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Stills
                </Link>
                <Link to="/motion" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Motion
                </Link>
                <Link to="/portfolio" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-white text-xs md:text-sm tracking-wider mb-2 md:mb-4">
                ABOUT
              </h3>
              <div className="space-y-1 md:space-y-3">
                <Link to="/about" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Bio
                </Link>
                <Link to="/about#philosophy" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Philosophy
                </Link>
                <Link to="/about#achievements" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Achievements
                </Link>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-white text-xs md:text-sm tracking-wider mb-2 md:mb-4">
                CONNECT
              </h3>
              <div className="space-y-1 md:space-y-3">
                <Link to="/contact" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Contact
                </Link>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Instagram
                </a>
                <Link to="/contact#booking" className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors duration-300">
                  Booking
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="hidden md:block">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Amine Rihani. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0 md:order-2">
            <a href="https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-300">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="mailto:rihani.amine111@gmail.com" className="text-white/50 hover:text-white transition-colors duration-300">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/amine-rihani-66487a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-300">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <Link to="/portfolio" className="text-white/50 hover:text-white transition-colors duration-300">
              <Camera className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>

          <div className="block md:hidden w-full text-center">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Amine Rihani. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
