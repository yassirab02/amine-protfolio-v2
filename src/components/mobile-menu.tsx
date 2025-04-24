"use client"

import { useState } from "react"
import {Link} from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Camera } from "lucide-react"
import MenuBackground from "./mobile-background"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center space-x-2 px-3 py-1 border border-gray-700 dark:border-gray-700 rounded-full text-sm text-gray-900 dark:text-white"
      >
        <span>MENU</span>
      </button>

      {/* Animated mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            {/* Background effect */}
            <MenuBackground />

            <div className="relative z-10 flex justify-between items-center p-4 border-b border-gray-800">
              <Link to="/" className="text-2xl font-serif text-white" onClick={() => setIsOpen(false)}>
                Amine
              </Link>
              <div className="flex items-center space-x-4">
                <div className="px-3 py-1 border border-gray-700 rounded-full text-sm text-white flex items-center">
                  <Camera className="w-4 h-4 mr-1" />
                  F/24
                </div>
                <button
                  onClick={toggleMenu}
                  className="px-3 py-1 border border-gray-700 rounded-full text-sm text-white"
                >
                  CLOSE
                </button>
              </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center items-center space-y-8 p-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link
                  to="/stills"
                  className="text-3xl font-serif text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  STILLS
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Link
                  to="/motion"
                  className="text-3xl font-serif text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  MOTION
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Link
                  to="/about"
                  className="text-3xl font-serif text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link
                  to="https://instagram.com"
                  className="text-3xl font-serif text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  INSTAGRAM
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link
                  to="/contact"
                  className="text-3xl font-serif text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  EMAIL
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="relative z-10 p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight tracking-wide">
                PHOTOGRAPHER
                <br />& FILMMAKER
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
