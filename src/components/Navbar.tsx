"use client"

import { Link } from "react-router-dom"
import { Camera } from "lucide-react"
import MobileMenu from "./mobile-menu"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      // Change to black glassy effect after scrolling 20px
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <nav
      className={`w-full py-6 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-black/30"
      }`}
    >
      {/* Left navigation */}
      <div className="hidden lg:flex space-x-3">
        <Link
          to="/stills"
          className="px-5 py-2 border border-white/70 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
        >
          STILLS
        </Link>
        <Link
          to="/motion"
          className="px-5 py-2 border border-white/70 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
        >
          MOTION
        </Link>
        <Link
          to="/about"
          className="px-5 py-2 border border-white/70 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
        >
          ABOUT
        </Link>
      </div>

      {/* Logo - desktop centered, mobile left */}
      <Link
        to="/"
        className="text-2xl font-serif text-white border border-white/70 rounded-full px-8 py-2 absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        Amine
      </Link>

      {/* Mobile logo - left aligned */}
      <Link to="/" className="text-2xl font-serif text-white lg:hidden">
        Amine
      </Link>

      {/* Mobile menu - right aligned */}
      <div className="lg:hidden ml-auto">
        <MobileMenu />
      </div>

      {/* Right navigation */}
      <div className="hidden lg:flex space-x-3 ml-auto">
        <Link
          to="https://instagram.com"
          className="px-5 py-2 border border-white/70 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
        >
          INSTAGRAM
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2 border border-white/70 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
        >
          EMAIL
        </Link>
        <Link
          to="/portfolio"
          className="px-5 py-2 border border-white/70 rounded-full text-sm text-white hover:bg-white/10 transition-colors flex items-center"
        >
          <Camera className="w-4 h-4 mr-1" />
          F/24
        </Link>
      </div>
    </nav>
  )
}
