"use client"

import type React from "react"

import {Link} from "react-router-dom"
import { Camera } from "lucide-react"
import MobileMenu from "./mobile-menu"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
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
      className={`w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-zinc-900/90 via-black/90 to-zinc-900/90 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]"
          : "bg-gradient-to-r from-zinc-900/30 via-black/30 to-zinc-900/30 backdrop-blur-sm"
      }`}
    >
      {/* Left navigation */}
      <div className="hidden lg:flex space-x-6">
        <NavLink to="/stills">STILLS</NavLink>
        <NavLink to="/motion">MOTION</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>

      {/* Logo - desktop centered */}
      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block group">
        <span className="text-2xl font-serif text-white tracking-wider relative overflow-hidden inline-block px-2">
          <span className="relative z-10 group-hover:text-zinc-100 transition-colors duration-300">Amine</span>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span className="absolute -inset-1 bg-white/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </span>
      </Link>

      {/* Mobile logo - left aligned */}
      <Link to="/" className="text-2xl font-serif text-white tracking-wider lg:hidden">
        Amine
      </Link>

      {/* Mobile menu - right aligned */}
      <div className="lg:hidden ml-auto">
        <MobileMenu />
      </div>

      {/* Right navigation */}
      <div className="hidden lg:flex space-x-6 ml-auto">
        <NavLink to="https://instagram.com">INSTAGRAM</NavLink>
        <NavLink to="/contact">EMAIL</NavLink>
        <NavLink to="/portfolio" icon={<Camera className="w-4 h-4 mr-1.5" />}>
          F/24
        </NavLink>
      </div>
    </nav>
  )
}

// Custom NavLink component with enhanced hover effects
function NavLink({ to, children, icon }: { to: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group relative px-3 py-2 text-sm font-light tracking-wider text-white/80 hover:text-white transition-all duration-500"
    >
      {/* Decorative elements */}
      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></span>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></span>

      {/* Main content */}
      <span className="relative z-10 flex items-center">
        {icon && (
          <span className="mr-1.5 transform group-hover:scale-110 transition-transform duration-500">{icon}</span>
        )}
        <span className="relative overflow-hidden">
          <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            {children}
          </span>
          <span className="absolute top-0 left-0 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            {children}
          </span>
        </span>
      </span>

      {/* Hover effects */}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
      <span className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-out"></span>
      <span className="absolute inset-0 rounded-lg border border-white/0 group-hover:border-white/10 transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
    </Link>
  )
}
