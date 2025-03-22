  "use client"

  import { useState, useEffect } from "react"
  import { Link } from "react-router-dom"

  const navLinks = [
    { name: "Home", href: "/", active: false },
    { name: "Services", href: "/services", active: false },
    { name: "Projects", href: "/projects", active: false },
    { name: "About", href: "/about", active: false },
    { name: "Contact", href: "/contact", active: false },
  ]

  export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen)
    }

    // Add scroll event listener
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
        {/* Shiny border - using Tailwind gradient and animation */}
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

          {/* Center Navigation Pills */}
          <div className="hidden md:block">
            <div className="rounded-full bg-zinc-900/90 px-6 py-2.5 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <nav className="flex items-center space-x-8">
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

                {/* Get started button appears after Contact when scrolled */}
                {scrolled && (
                  <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-1 text-sm font-medium text-white shadow-lg transition-all duration-300 ease-in-out animate-fadeIn hover:cursor-pointer">
                    Book Now
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden items-center space-x-5 md:flex">
            <button className="rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-2 text-sm font-medium text-white hover:cursor-pointer shadow-[0_4px_10px_rgba(124,58,237,0.3)] transition-all duration-200 hover:shadow-[0_6px_15px_rgba(124,58,237,0.4)]">
              Hire Me
            </button>
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
                <button
                  className="rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-2 text-white shadow-[0_4px_10px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_15px_rgba(124,58,237,0.4)]"
                  title="Hire Me"
                >
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

