"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Film, Home, ArrowLeft, RefreshCw, Camera, Clapperboard, AlertTriangle, Info, X } from "lucide-react"
import { Link, Router } from "react-router-dom"

interface CinematicErrorProps {
  error?: Error
  reset?: () => void
  statusCode?: number | string
  title?: string
  description?: string
  brandName?: string
}

export default function ErrorPage({
  error,
  reset,
  statusCode = 404,
  title,
  description,
  brandName = "Amine Rihani Films",
}: CinematicErrorProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  // Removed unused router variable as it was not being used

  // Error type definitions
  const errorTypes = {
    404: {
      title: "Scene Not Found",
      description: "The footage you're looking for seems to be missing from our archives.",
      icon: <Film className="w-6 h-6 md:w-8 md:h-8" />,
      suggestion: "Check the URL or navigate back to our main gallery.",
    },
    500: {
      title: "Technical Difficulties",
      description: "We're experiencing some issues with our equipment.",
      icon: <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />,
      suggestion: "Our crew is working on it. Please try again later.",
    },
    default: {
      title: "Unexpected Error",
      description: "Something went wrong during this production.",
      icon: <Info className="w-6 h-6 md:w-8 md:h-8" />,
      suggestion: "Please try refreshing or contact our support team.",
    },
  }

  // Get error info based on status code or use custom title/description if provided
  const errorInfo = {
    title:
      title ||
      (statusCode === 404
        ? errorTypes[404].title
        : statusCode === 500
          ? errorTypes[500].title
          : errorTypes.default.title),
    description:
      description ||
      (statusCode === 404
        ? errorTypes[404].description
        : statusCode === 500
          ? errorTypes[500].description
          : errorTypes.default.description),
    icon:
      statusCode === 404 ? errorTypes[404].icon : statusCode === 500 ? errorTypes[500].icon : errorTypes.default.icon,
    suggestion:
      statusCode === 404
        ? errorTypes[404].suggestion
        : statusCode === 500
          ? errorTypes[500].suggestion
          : errorTypes.default.suggestion,
  }

  useEffect(() => {
    setIsLoaded(true)

    // Add film grain effect
    const filmGrain = document.createElement("div")
    filmGrain.classList.add("film-grain")
    document.body.appendChild(filmGrain)

    return () => {
      if (document.body.contains(filmGrain)) {
        document.body.removeChild(filmGrain)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Format the brand name with the first word in orange
  const formatBrandName = () => {
    const words = brandName.split(" ")
    if (words.length === 1) return <span className="text-orange-500">{words[0]}</span>

    return (
      <>
        <span className="text-orange-500">{words[0]}</span>
        <span className="text-white"> {words.slice(1).join(" ")}</span>
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col overflow-hidden">
        {/* Animated film strip at top */}
        <motion.div
          className="h-6 md:h-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="flex"
            animate={{ x: [-500, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear", repeatType: "loop" }}
          >
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="w-10 md:w-12 h-6 md:h-8 bg-zinc-800 border-r-2 border-black flex items-center justify-center"
              >
                <div className="w-4 md:w-6 h-4 md:h-6 rounded-full border-2 border-black"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Brand Header - More prominent */}
        <motion.div
          className="py-4 md:py-6 border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                className="bg-orange-500 p-2 md:p-3 rounded-lg"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Film className="text-black w-5 h-5" />
              </motion.div>
              <motion.div
                className="font-bold text-xl md:text-2xl tracking-tight"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {formatBrandName()}
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/"
                className="bg-zinc-800 hover:bg-zinc-700 px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base flex items-center gap-2 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col items-center justify-center p-4 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="max-w-3xl w-full text-center my-6 md:my-12">
            {/* Main Error Display */}
            <motion.div
              className="mb-8 md:mb-12 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="relative"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              >
                {/* Clapperboard top */}
                <motion.div
                  className="relative h-12 md:h-16 bg-zinc-800 rounded-t-lg overflow-hidden mb-1 flex items-center justify-center"
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: [0, 70, 0] }}
                  transition={{ duration: 1.5, delay: 1, times: [0, 0.2, 1] }}
                >
                  <div className="absolute inset-0 flex items-center px-4 md:px-6 justify-between">
                    <div className="flex items-center gap-2">
                      <Clapperboard className="text-orange-500 w-5 h-5 md:w-6 md:h-6" />
                      <span className="font-mono text-xs md:text-sm">ERROR</span>
                    </div>
                    <div className="font-mono text-xs md:text-sm">TAKE {Math.floor(Math.random() * 10) + 1}</div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-1/2 border-r-2 border-black"></div>
                  <div className="absolute inset-0 grid grid-cols-8">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="border-r border-zinc-700 h-full"></div>
                    ))}
                  </div>
                </motion.div>

                {/* Error Code Display */}
                <motion.div
                  className="relative bg-zinc-900 py-8 md:py-12 px-4 overflow-hidden border-2 border-zinc-800"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(251, 146, 60, 0)",
                      "0 0 30px rgba(251, 146, 60, 0.3)",
                      "0 0 0px rgba(251, 146, 60, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    className="absolute top-3 md:top-4 left-3 md:left-4 bg-zinc-800 px-2 py-1 md:px-3 md:py-1 rounded-full flex items-center gap-1 md:gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <span className="text-[10px] md:text-xs font-mono">REC</span>
                  </motion.div>

                  <motion.div
                    className="absolute top-3 md:top-4 right-3 md:right-4 bg-zinc-800 px-2 py-1 md:px-3 md:py-1 rounded-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <span className="text-[10px] md:text-xs font-mono text-orange-500">SCENE {statusCode}</span>
                  </motion.div>

                  <motion.h1
                    className="text-[80px] sm:text-[120px] md:text-[180px] font-bold leading-none tracking-tighter"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(251, 146, 60, 0)",
                        "0 0 30px rgba(251, 146, 60, 0.5)",
                        "0 0 10px rgba(251, 146, 60, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {statusCode
                      .toString()
                      .split("")
                      .map((digit, index) => (
                        <motion.span
                          key={index}
                          className={index % 2 === 0 ? "text-orange-500" : "text-white"}
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                        >
                          {digit}
                        </motion.span>
                      ))}
                  </motion.h1>

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-[1px] w-full bg-orange-500/30"
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      style={{ position: "absolute" }}
                    />
                  </motion.div>

                  {/* Vignette effect */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-lg"
                    style={{
                      background: "radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  ></div>
                </motion.div>

                {/* Film strip bottom */}
                <div className="h-6 md:h-8 bg-zinc-800 flex justify-around mt-1 rounded-b-lg">
                  {[...Array(16)].map((_, j) => (
                    <div key={j} className="w-2 md:w-3 h-full bg-black"></div>
                  ))}
                </div>
              </motion.div>

              {/* Camera icons */}
              <motion.div
                className="absolute -left-8 sm:-left-12 md:-left-16 top-1/2 -translate-y-1/2 hidden sm:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div
                  className="bg-zinc-800 p-3 md:p-4 rounded-full"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Camera className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 hidden sm:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div
                  className="bg-zinc-800 p-3 md:p-4 rounded-full"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  <Clapperboard className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-3"
              variants={itemVariants}
            >
              <div className="bg-zinc-800/50 p-2 md:p-3 rounded-full">{errorInfo.icon}</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
                <span className="text-orange-500">{errorInfo.title}</span>
              </h2>
            </motion.div>

            <motion.p className="text-lg sm:text-xl text-gray-300 mb-4 px-4" variants={itemVariants}>
              {errorInfo.description}
            </motion.p>

            <motion.p className="text-gray-400 mb-8 px-4" variants={itemVariants}>
              {errorInfo.suggestion}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 px-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/"
                  className="bg-orange-500 text-black px-5 py-3 md:px-6 md:py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-3 font-semibold shadow-lg shadow-orange-500/20 w-full justify-center"
                >
                  <Home className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </motion.div>

              {reset && (
                <motion.button
                  onClick={reset}
                  className="border border-orange-500 text-orange-500 px-5 py-3 md:px-6 md:py-4 rounded-xl hover:bg-orange-500/10 transition-colors flex items-center gap-3 font-semibold w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </motion.button>
              )}

              <motion.button
                onClick={() => router.back()}
                className="border border-zinc-700 text-white px-5 py-3 md:px-6 md:py-4 rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-3 font-semibold w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </motion.button>
            </motion.div>

            {/* Error details section */}
            {error && (
              <motion.div variants={itemVariants} className="px-4">
                <motion.button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Info className="w-4 h-4" />
                  <span>{showDetails ? "Hide" : "Show"} Error Details</span>
                </motion.button>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      className="mt-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-left"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-mono text-sm text-orange-500">Error Details</h3>
                        <button onClick={() => setShowDetails(false)} className="text-gray-400 hover:text-white">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm font-mono text-gray-400 break-all">{error.message || "Unknown error"}</p>
                      {error.stack && (
                        <pre className="mt-2 text-xs font-mono text-gray-500 overflow-x-auto p-2 bg-black/30 rounded border border-zinc-800">
                          {error.stack}
                        </pre>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          {/* Animated timeline at bottom */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 h-8 md:h-12 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="relative h-full">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-700 transform -translate-y-1/2"></div>
              <motion.div
                className="absolute top-0 left-0 h-full flex items-center"
                animate={{ x: ["0%", "100%"] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear", repeatType: "loop" }}
              >
                <div className="h-3 md:h-4 w-1 bg-orange-500"></div>
              </motion.div>

              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute top-1/2 transform -translate-y-1/2" style={{ left: `${i * 5}%` }}>
                  <div className="h-1.5 md:h-2 w-0.5 md:w-1 bg-zinc-600"></div>
                  <div className="mt-1 md:mt-2 text-[6px] md:text-[8px] text-zinc-600 font-mono">
                    {i.toString().padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="py-4 md:py-6 border-t border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Film className="w-4 h-4 text-orange-500" />
              <p className="text-sm font-medium">{formatBrandName()}</p>
            </motion.div>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </motion.footer>
      </div>
    </>
  )
}

