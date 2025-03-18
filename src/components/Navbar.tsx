"use client"

import { useState } from "react"
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="relative w-full bg-black">
      {/* Shiny border */}
      <div className="absolute bottom-0 h-[1px] w-full overflow-hidden">
        <div className="shiny-border"></div>
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="group flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-105">
  <div className="text-3xl font-extrabold tracking-tight text-white">
    <span className="relative inline-block h-8 w-32"> {/* Added fixed dimensions */}
      <img 
        src="/src/assets/my logo white.png" // Removed /src from path
        alt="Logo" 
        className="h-full w-full object-contain block" // Added block display and full sizing
      />
    </span>
  </div>
</Link>

        {/* Center Navigation Pills */}
        <div className="hidden md:block">
          <div className="rounded-full bg-zinc-900/90 px-6 py-2.5 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-all duration-200 hover:text-white
                    ${
                      link.active
                        ? "text-purple-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-purple-500/50 after:content-['']"
                        : "text-white/90 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-white/20 hover:after:content-['']"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center space-x-5 md:flex bg-gray-500/55 backdrop-blur-md">
          <button className="rounded-md bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 text-sm font-medium text-white shadow-[0_4px_10px_rgba(124,58,237,0.3)] transition-all duration-200 hover:shadow-[0_6px_15px_rgba(124,58,237,0.4)]" title="Sign up">
          Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="flex h-10 w-10 items-center justify-center text-white md:hidden" title="Toggle mobile menu">
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-lg font-medium transition-colors hover:text-white ${
                  link.active ? "text-purple-400" : "text-white/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <button className="rounded-md bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-2 text-white shadow-[0_4px_10px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_15px_rgba(124,58,237,0.4)]" title="Sign up">
              Hire Me
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}

