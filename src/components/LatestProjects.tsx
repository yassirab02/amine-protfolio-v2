"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Camera, ExternalLink, Star } from "lucide-react"

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // If element is intersecting and hasn't been visible before
      if (entry.isIntersecting && !hasBeenVisible) {
        setIsIntersecting(true)
        setHasBeenVisible(true)
      } else if (!entry.isIntersecting && !hasBeenVisible) {
        setIsIntersecting(false)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options, hasBeenVisible])

  return [ref, isIntersecting]
}

export default function LatestProjects() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  })

  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      title: "Mountain Sunrise",
      type: "photo",
      description: "Landscape photography at dawn",
      image: "/src/assets/1RqbvEVlP2dlrkA03BbeiAA.png",
      date: "June 2023",
      featured: true,
    },
    {
      id: 2,
      title: "Urban Documentary",
      type: "video",
      description: "City life captured in motion",
      image: "/src/assets/Nikon-D800E-Sample-19.png",
      date: "July 2023",
      featured: false,
    },
    {
      id: 3,
      title: "Wildlife Series",
      type: "photo",
      description: "Animals in their natural habitat",
      image: "/src/assets/th.png",
      date: "August 2023",
      featured: false,
    },
    {
      id: 4,
      title: "Wedding Highlights",
      type: "video",
      description: "Special moments from a beautiful ceremony",
      image: "/src/assets/th.webp",
      date: "September 2023",
      featured: true,
    },
    {
      id: 5,
      title: "Architectural Study",
      type: "photo",
      description: "Modern buildings and structures",
      imageUrl: "/src/assets/th2.png",
      date: "October 2023",
      featured: false,
    },
    {
      id: 6,
      title: "Travel Vlog",
      type: "video",
      description: "Adventures across continents",
      image: "/src/assets/The-State-of-the-Photography-Ind.png",
      date: "November 2023",
      featured: false,
    },
  ]

  return (
    <section ref={sectionRef} className="bg-black text-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-1000 ${isVisible ? "w-full" : ""}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-1000 delay-300 ${isVisible ? "w-full" : ""}`}
      ></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-16 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 relative">
            Latest Projects
            <span
              className={`absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 transition-all duration-1000 delay-500 ${isVisible ? "w-20" : ""}`}
            ></span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Showcasing my recent work and creative endeavors in photography and videography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                boxShadow: "0 10px 30px -15px rgba(255, 115, 0, 0.2)",
              }}
            >
              {/* Project image with preserved rounded corners */}
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-16 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Star size={12} className="mr-1" /> Featured
                </div>
              )}

              {/* Media type icon */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2 border border-orange-500/30 transform transition-transform duration-500 group-hover:rotate-12">
                {project.type === "video" ? (
                  <Play size={16} className="text-orange-500" />
                ) : (
                  <Camera size={16} className="text-orange-500" />
                )}
              </div>

              {/* Overlay with project info - preserving rounded corners */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end transform transition-all duration-500 rounded-xl">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  <p className="text-orange-400 text-sm mb-2 font-medium tracking-wider">{project.date}</p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>

                  <a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`flex justify-center mt-12 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${projects.length * 100 + 200}ms` }}
        >
          <button className="group relative hover:cursor-pointer overflow-hidden px-6 py-3 rounded-full border border-orange-500/30 bg-orange-500 hover:bg-black/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,115,0,0.3)]">
            <span className="relative z-10 text-white font-medium flex items-center gap-2">
              View More Projects
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Decorative dots */}
        <div
          className={`hidden md:block absolute -right-4 top-1/4 grid grid-cols-3 gap-2 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-orange-500/30"></div>
          ))}
        </div>

        <div
          className={`hidden md:block absolute -left-4 bottom-1/4 grid grid-cols-3 gap-2 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-orange-500/30"></div>
          ))}
        </div>
      </div>
    </section>
  )
}

