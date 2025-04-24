"use client"

import {Link} from "react-router-dom"
import { Camera } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import MobileMenu from "./mobile-menu"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <nav className="w-full py-6 px-4 flex justify-between items-center">
      <div className="hidden lg:flex space-x-4">
        <Link
          to="/stills"
          className="px-4 py-2 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          STILLS
        </Link>
        <Link
          to="/motion"
          className="px-4 py-2 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          MOTION
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          ABOUT
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      <Link to="/" className="text-2xl font-serif text-gray-900 dark:text-white">
        Amine
      </Link>

      <div className="hidden lg:flex space-x-4 items-center">
        <Link
          to="https://instagram.com"
          className="px-4 py-2 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center"
        >
          INSTAGRAM
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center"
        >
          EMAIL
        </Link>
        <Link
          to="/portfolio"
          className="px-4 py-2 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center"
        >
          <Camera className="w-4 h-4 mr-1" />
          F/24
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
