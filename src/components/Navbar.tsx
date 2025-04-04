"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Videography", href: "/projects" },
  { name: "Photography", href: "/photography" },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className="sticky top-0 w-full bg-black z-40">
      {/* Shiny border */}
      <div className="absolute bottom-0 h-[1px] w-full overflow-hidden bg-gradient-to-r from-transparent via-white/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-105"
        >
          <div className="text-3xl font-extrabold tracking-tight text-white">
            <span className="relative inline-block h-8 w-32">
              <img src="/src/assets/my logo white.png" alt="Logo" className="h-full w-full object-contain block" />
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="rounded-full bg-zinc-900/90 px-6 py-2.5 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-orange-400 group" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <>
                        {/* Glowing underline effect */}
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-orange-500/80 via-orange-400 to-orange-500/80 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]"></span>

                        {/* Subtle background glow */}
                        <span className="absolute -inset-x-3 -inset-y-1 bg-orange-500/10 rounded-full blur-sm -z-10"></span>
                      </>
                    )}

                    {/* Hover effect for non-active items */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                    )}
                  </Link>
                )
              })}

              {scrolled && (
                <Link to="/book-now">
                  <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-1 text-sm font-medium text-white shadow-lg transition-all duration-300 ease-in-out animate-fadeIn hover:cursor-pointer">
                    Book Now
                  </button>
                </Link>
              )}
            </nav>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center space-x-5 md:flex">
          <Link to="/book-now">
            <button className="rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-2 text-sm font-medium text-white hover:cursor-pointer shadow-[0_4px_10px_rgba(249,115,22,0.3)] transition-all duration-200 hover:shadow-[0_6px_15px_rgba(249,115,22,0.4)]">
              Hire Me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          title="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-black p-6 shadow-lg transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button onClick={toggleMobileMenu} className="text-white" title="Close mobile menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-lg font-medium transition-all duration-300 ${
                    isActive ? "text-orange-400" : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                  )}
                </Link>
              )
            })}

            <div className="mt-8 flex flex-col gap-4">
              <Link to="/book-now">
                <button
                  className="rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-2 text-white shadow-[0_4px_10px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_15px_rgba(249,115,22,0.4)]"
                  title="Hire Me"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}

