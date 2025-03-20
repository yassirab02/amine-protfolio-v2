"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Filter, ArrowUpRight, ExternalLink, Star, Play } from "lucide-react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

// Project type definition
type Project = {
  id: number
  title: string
  category: string
  imageUrl: string
  description: string
  link: string
  featured?: boolean
  client?: string
  year?: string
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Cinematic Wedding Film",
    category: "Cinematography",
    imageUrl: "/src/assets/1RqbvEVlP2dlrkA03BbeiAA.png",
    description:
      "Capturing beautiful moments of a destination wedding in Bali with drone footage and emotional storytelling.",
    link: "/projects/cinematic-wedding",
    featured: true,
    client: "Emma & James",
    year: "2023",
  },
  {
    id: 2,
    title: "Corporate Brand Shoot",
    category: "Photography",
    imageUrl: "/src/assets/Nikon-D800E-Sample-19.png",
    description: "Professional photography for a tech startup's marketing campaign and brand identity.",
    link: "/projects/corporate-brand",
    client: "TechVision Inc.",
    year: "2023",
  },
  {
    id: 3,
    title: "Music Video Production",
    category: "Cinematography",
    imageUrl: "/src/assets/th.png",
    description: "Directed and shot a music video for an indie band's latest single with creative visual storytelling.",
    link: "/projects/music-video",
    featured: true,
    client: "The Resonants",
    year: "2022",
  },
  {
    id: 4,
    title: "Product Photography",
    category: "Photography",
    imageUrl: "/src/assets/th.webp",
    description: "High-end product photography for a luxury watch brand with meticulous attention to detail.",
    link: "/projects/product-photography",
    client: "Chrono Elegance",
    year: "2023",
  },
  {
    id: 5,
    title: "Documentary Short Film",
    category: "Cinematography",
    imageUrl: "/src/assets/th2.png",
    description: "A short documentary about local artisans and their crafts, showcasing traditional techniques.",
    link: "/projects/documentary",
    client: "Cultural Heritage Foundation",
    year: "2022",
  },
  {
    id: 6,
    title: "Portrait Series",
    category: "Photography",
    imageUrl: "/src/assets/The-State-of-the-Photography-Ind.png",
    description: "A series of artistic portraits capturing diverse personalities and emotions in studio lighting.",
    link: "/projects/portrait-series",
    featured: true,
    client: "Diversity Magazine",
    year: "2023",
  },
]

// Categories for filtering
const categories = ["All", "Cinematography", "Photography"]

// Floating particle component
const FloatingParticle = ({ delay = 0, size = 6, left = "50%", top = "50%" }) => {
  return (
    <div
      className="absolute rounded-full bg-[#ff5722]/20 z-0 animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        top,
        animationDelay: `${delay}s`,
      }}
    ></div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHeaderVisible, headerRef] = useIntersectionObserver({ threshold: 0.3 })
  const [isGridVisible, gridRef] = useIntersectionObserver({ threshold: 0.1 })
  const [isButtonVisible, buttonRef] = useIntersectionObserver({ threshold: 0.5 })

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  // Animate projects in on category change
  useEffect(() => {
    setVisibleProjects([])

    const timer = setTimeout(() => {
      setVisibleProjects(filteredProjects)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory, filteredProjects])

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setVisibleProjects(filteredProjects)
    }, 500)

    return () => clearTimeout(timer)
  }, [filteredProjects])

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    size: Math.random() * 8 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }))

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1020] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5722] to-transparent opacity-30"></div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff5722] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff5722] opacity-5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Animated floating particles */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          delay={particle.delay}
          size={particle.size}
          left={particle.left}
          top={particle.top}
        />
      ))}

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-5 animate-grid-movement pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerRef}
          className={`flex flex-col items-center mb-16 transition-all duration-1000 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 text-[#ff5722] mb-3">
            <div className="h-[1px] w-6 bg-[#ff5722] animate-width-expand"></div>
            <span className="uppercase text-sm font-medium tracking-wider animate-text-fade-in">PROJECTS</span>
            <div className="h-[1px] w-6 bg-[#ff5722] animate-width-expand"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center relative overflow-hidden">
            <span className="animate-title-reveal inline-block">FEATURED</span>{" "}
            <span className="text-[#6c7a93] animate-title-reveal inline-block" style={{ animationDelay: "0.2s" }}>
              PROJECTS
            </span>
          </h2>

          <div className="h-1 w-20 bg-[#ff5722] mb-8 relative animate-width-expand">
            <div className="absolute -top-[2px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#ff5722] rounded-full animate-pulse"></div>
          </div>

          <p
            className="text-[#a0a8b8] text-lg max-w-2xl text-center leading-relaxed animate-text-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Explore my portfolio of creative work spanning cinematography and photography projects. Each project
            represents a unique story captured through my lens with passion and precision.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center bg-[#161927]/80 backdrop-blur-sm rounded-full p-1.5 border border-[#2a2e45] shadow-lg animate-float-slow">
            <Filter className="text-[#6c7a93] ml-3 mr-2 animate-spin-slow" size={18} />
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/20 animate-button-pulse"
                    : "text-[#a0a8b8] hover:text-white hover:bg-[#2a2e45]/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visibleProjects.map((project, index) => (
            <Link
              to={project.link}
              key={project.id}
              className={`group transition-all duration-700 ease-out ${
                isGridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-[#161927]/80 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:translate-y-[-8px] h-full flex flex-col border border-[#2a2e45]/50 shadow-xl hover:shadow-2xl hover:shadow-[#ff5722]/5 group-hover:border-[#2a2e45] relative">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#ff5722]/0 group-hover:border-[#ff5722]/70 transition-all duration-500 rounded-tl-md"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#ff5722]/0 group-hover:border-[#ff5722]/70 transition-all duration-500 rounded-tr-md"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#ff5722]/0 group-hover:border-[#ff5722]/70 transition-all duration-500 rounded-bl-md"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#ff5722]/0 group-hover:border-[#ff5722]/70 transition-all duration-500 rounded-br-md"></div>

                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent opacity-70"></div>
                    <div className="absolute inset-0 bg-[#0a0b14]/20 group-hover:bg-[#0a0b14]/10 transition-all duration-500"></div>

                    {/* Play button for cinematography projects */}
                    {project.category === "Cinematography" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full bg-[#ff5722]/80 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 animate-pulse">
                          <Play size={24} className="text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-[#ff5722] text-white text-xs font-medium py-1.5 px-3 rounded-full shadow-lg shadow-[#ff5722]/20 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                    {project.category}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs font-medium py-1.5 px-3 rounded-full border border-white/20 flex items-center gap-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      <Star size={12} className="text-[#ffcc00] animate-pulse" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-grow relative">
                  {/* Client & Year */}
                  <div className="flex justify-between items-center mb-3 text-xs text-[#6c7a93]">
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {project.client}
                    </span>
                    <span className="transform group-hover:translate-x-[-1px] transition-transform duration-300">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff5722] transition-colors duration-300 relative">
                    {project.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff5722]/50 group-hover:w-1/3 transition-all duration-500"></span>
                  </h3>

                  <p className="text-[#a0a8b8] mb-5 flex-grow leading-relaxed transform group-hover:translate-y-[-2px] transition-transform duration-500">
                    {project.description}
                  </p>

                  <div className="flex items-center text-[#ff5722] font-medium overflow-hidden">
                    <span className="relative inline-block">
                      View Project
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#ff5722] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px] group-hover:rotate-[-15deg]"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          ref={buttonRef}
          className={`flex justify-center transition-all duration-1000 delay-500 ${
            isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            to="/projects"
            className="group flex items-center gap-2 bg-gradient-to-r from-[#ff5722] to-[#ff7a50] hover:from-[#ff4713] hover:to-[#ff6b3d] text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#ff5722]/20 hover:shadow-xl hover:shadow-[#ff5722]/30 animate-button-pulse"
          >
            <span className="relative overflow-hidden inline-block">
              <span className="inline-block transition-transform duration-500 group-hover:translate-y-[-100%]">
                Explore All Projects
              </span>
              <span className="absolute top-0 left-0 translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                View Portfolio
              </span>
            </span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all duration-500 group-hover:rotate-[135deg] group-hover:bg-white/30">
              <ExternalLink size={14} className="text-white" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

