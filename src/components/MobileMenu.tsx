"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative bg-transparent text-white/80 hover:text-white text-xs tracking-wider px-5 py-2 overflow-hidden group transition-all duration-500"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              className="block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="relative overflow-hidden inline-block">
                <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
                  CLOSE
                </span>
                <span className="absolute top-0 left-0 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  CLOSE
                </span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></span>
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              className="block relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="relative overflow-hidden inline-block">
                <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
                  MENU
                </span>
                <span className="absolute top-0 left-0 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  MENU
                </span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></span>
            </motion.span>
          )}
        </AnimatePresence>
        <span className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-out"></span>
        <span className="absolute inset-0 rounded-lg border border-white/0 group-hover:border-white/10 transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-[5.5rem] z-50 flex items-start justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop - semi-transparent overlay */}
            <div className="absolute inset-0 backdrop-blur-md" onClick={() => setIsOpen(false)} />

            {/* Menu card */}
            <motion.div
              className="relative w-[95%] max-w-md overflow-hidden z-10 flex flex-col"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Glass effect container */}
              <div className="bg-black backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10">
                {/* Menu items */}
                <div className="flex flex-col items-center py-10 space-y-7">
                  <MobileNavLink to="/stills" onClick={() => setIsOpen(false)}>
                    STILLS
                  </MobileNavLink>
                  <MobileNavLink to="/motion" onClick={() => setIsOpen(false)}>
                    MOTION
                  </MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
                    ABOUT
                  </MobileNavLink>
                  <MobileNavLink 
                    to="https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr" 
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM
                  </MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </MobileNavLink>
                </div>

                {/* Photographer & Filmmaker section */}
                <div className="relative h-20 w-full mt-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=200&width=400')",
                      filter: "brightness(0.3) contrast(1.2)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/70 via-black/50 to-zinc-900/70 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-serif tracking-wider text-white text-center">Amine Rihani</h2>
                    <div className="mt-1 text-xs text-white/70 font-light tracking-widest">
                      PHOTOGRAPHER & FILMMAKER
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Custom Mobile NavLink component with enhanced hover effects and active state
function MobileNavLink({ to, children, onClick, target, rel }: { 
  to: string; 
  children: React.ReactNode; 
  onClick?: () => void;
  target?: string;
  rel?: string;
}) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`group relative px-5 py-2 text-xl tracking-wider transition-all duration-500 ${
        isActive 
          ? "text-white font-normal" 
          : "text-white/80 hover:text-white font-light"
      }`}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {/* Decorative elements */}
      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></span>
      <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></span>

      {/* Main content */}
      <span className="relative z-10 overflow-hidden inline-block">
        {isActive ? (
          <span>{children}</span>
        ) : (
          <>
            <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
              {children}
            </span>
            <span className="absolute top-0 left-0 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              {children}
            </span>
          </>
        )}
      </span>

      {/* Active indicator dots and line */}
      {isActive && (
        <>
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"></span>
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"></span>
        </>
      )}
      
      {/* Hover/active effects */}
      <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-700 ease-out ${
        isActive 
          ? "scale-x-100" 
          : "scale-x-0 group-hover:scale-x-100"
      }`}></span>
      
      <span className={`absolute -inset-1 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-lg transition-all duration-500 ease-out ${
        isActive 
          ? "opacity-100 scale-y-100" 
          : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
      }`}></span>
    </Link>
  )
}