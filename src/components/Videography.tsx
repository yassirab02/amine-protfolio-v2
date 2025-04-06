"use client"

import { useState, useEffect } from "react"
import { Film, Play, ChevronRight, ChevronLeft, Clock, User, Award } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Videography() {
  const [activeProject, setActiveProject] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Urban Documentary",
      category: "Documentary",
      thumbnail: "/src/assets/1RqbvEVlP2dlrkA03BbeiAA.png",
      description: "A cinematic exploration of urban architecture and the human stories behind city landscapes",
      year: "2023",
      client: "City Arts Foundation",
      duration: "18:45",
      awards: ["Best Cinematography", "Official Selection"],
    },
    {
      id: 2,
      title: "Mountain Expedition",
      category: "Adventure",
      thumbnail: "/src/assets/th.png",
      description: "Following elite climbers through breathtaking landscapes and treacherous terrain",
      year: "2022",
      client: "Summit Productions",
      duration: "24:10",
      awards: ["Audience Choice"],
    },
    {
      id: 3,
      title: "Wedding Collection",
      category: "Events",
      thumbnail: "/src/assets/th2.png",
      description: "Capturing intimate moments and celebrations of love with cinematic storytelling",
      year: "2023",
      client: "Various Clients",
      duration: "Various",
      awards: [],
    },
    {
      id: 4,
      title: "Product Launch",
      category: "Commercial",
      thumbnail: "/src/assets/my logo white.png",
      description: "High-end product showcase with dynamic visuals and compelling narrative",
      year: "2022",
      client: "TechVision Inc.",
      duration: "02:30",
      awards: ["Silver - Advertising Excellence"],
    },
  ]

  const nextProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [activeProject])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const featuredProjectVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.2 } },
  }

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="container mx-auto px-4 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
          <motion.div
            className="bg-orange-500 p-2 rounded-lg"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Film className="text-black w-6 h-6" />
          </motion.div>
          <motion.h2
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Featured Project with AnimatePresence for smooth transitions */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-10 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                variants={featuredProjectVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                <img
                  src={projects[activeProject].thumbnail || "/placeholder.svg"}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-8 md:p-12 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <motion.span
                        className="bg-orange-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 w-fit"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full bg-black"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                        ></motion.span>
                        {projects[activeProject].category}
                      </motion.span>
                      <div className="flex gap-4">
                        <AnimatePresence>
                          {projects[activeProject].awards.map((award, index) => (
                            <motion.div
                              key={award}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                              className="flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full"
                            >
                              <Award className="w-4 h-4 text-orange-500" />
                              <span className="text-xs font-medium">{award}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                    <motion.h3
                      className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {projects[activeProject].title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-8 max-w-3xl text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {projects[activeProject].description}
                    </motion.p>
                    <motion.div
                      className="flex flex-col md:flex-row gap-6 md:items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.button
                        className="bg-orange-500 text-black px-6 py-4 rounded-xl hover:cursor-pointer hover:bg-orange-600 transition-colors flex items-center gap-3 font-semibold shadow-lg shadow-orange-500/20 w-fit group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <motion.div
                          className="bg-black/20 p-2 rounded-full"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Play className="w-5 h-5" fill="currentColor" />
                        </motion.div>
                        <span>Watch Trailer</span>
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                      <div className="flex gap-6">
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                        >
                          <Clock className="w-5 h-5 text-orange-500" />
                          <span>{projects[activeProject].duration}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 }}
                        >
                          <User className="w-5 h-5 text-orange-500" />
                          <span>{projects[activeProject].client}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Absolute positioned on the featured project */}
            <motion.div
              className="absolute top-1/2 left-4 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={prevProject}
                className="p-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 transition-colors text-white hover:text-black"
                aria-label="Previous project"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={nextProject}
                className="p-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 transition-colors text-white hover:text-black"
                aria-label="Next project"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>

          {/* Project Info and Progress Bar */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
            variants={itemVariants}
          >
            <div className="flex gap-8">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="text-gray-400 text-sm mb-1">Client</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={projects[activeProject].client}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-lg"
                  >
                    {projects[activeProject].client}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-gray-400 text-sm mb-1">Year</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={projects[activeProject].year}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-lg"
                  >
                    {projects[activeProject].year}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </div>
            <motion.div className="w-full md:w-1/2" variants={itemVariants}>
              <div className="flex justify-between text-sm mb-2">
                <motion.span
                  className="text-orange-500 font-medium"
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Project {activeProject + 1} of {projects.length}
                </motion.span>
                <div className="flex gap-3">
                  <motion.button
                    onClick={prevProject}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1"
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev</span>
                  </motion.button>
                  <motion.button
                    onClick={nextProject}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              <div className="h-1.5 bg-zinc-800 rounded-full w-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group cursor-pointer rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                  index === activeProject
                    ? "ring-2 ring-orange-500 shadow-lg shadow-orange-500/20"
                    : "shadow-md shadow-black/30 hover:shadow-lg hover:shadow-orange-500/10"
                }`}
                onClick={() => setActiveProject(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <motion.div
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-orange-500 p-3 rounded-full"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1, rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.4, type: "spring" }}
                    >
                      <Play className="w-5 h-5 text-black" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                  {index === activeProject && (
                    <motion.div
                      className="absolute top-3 right-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <motion.div
                        className="bg-orange-500 p-1.5 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      >
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800">
                  <motion.h4
                    className="font-semibold mb-1 group-hover:text-orange-500 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h4>
                  <div className="flex justify-between items-center">
                    <motion.p
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.category}
                    </motion.p>
                    {project.awards.length > 0 && (
                      <motion.div
                        className="flex items-center gap-1 text-xs text-orange-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Award className="w-3 h-3" />
                        <span>{project.awards.length}</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

