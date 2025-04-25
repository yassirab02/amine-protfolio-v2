"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
        className="relative bg-transparent border border-white/70 text-white text-xs rounded-full px-4 py-1 overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              className="block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              CLOSE
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              className="block"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              MENU
            </motion.span>
          )}
        </AnimatePresence>
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
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Menu card */}
            <motion.div
              className="relative w-[95%] max-w-md bg-black rounded-2xl overflow-hidden z-10 flex flex-col"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Menu items */}
              <div className="flex flex-col items-center py-8 space-y-5">
                <Link
                  to="/stills"
                  className="text-xl font-medium text-white hover:text-blue-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  STILLS
                </Link>
                <Link
                  to="/motion"
                  className="text-xl font-medium text-white hover:text-blue-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  MOTION
                </Link>
                <Link
                  to="/about"
                  className="text-xl font-medium text-white hover:text-blue-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  to="https://instagram.com"
                  className="text-xl font-medium text-white hover:text-blue-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  INSTAGRAM
                </Link>
                <Link
                  to="/contact"
                  className="text-xl font-medium text-white hover:text-blue-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  EMAIL
                </Link>
              </div>

              {/* Photographer & Filmmaker section */}
              <div className="relative h-16 w-full mt-4">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/placeholder.svg?height=200&width=400')",
                    filter: "brightness(0.4) contrast(1.2)",
                  }}
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                  <h2 className="text-lg font-bold text-white text-center">Amine Rihani</h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
