"use client"

import { useState, useEffect, useRef } from "react"
import { File, ExternalLink, Star, Download, Eye, Clock } from "lucide-react"

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

export default function ProjectAttachmentViewer() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }) as [React.RefObject<HTMLElement>, boolean]

  const [selectedAttachment, setSelectedAttachment] = useState<number | null>(null)

  // Sample attachment data - replace with your actual data
  const attachments = [
    {
      id: 1,
      title: "Project Requirements",
      type: "document",
      description: "Detailed specifications and requirements",
      fileType: "PDF",
      fileSize: "2.4 MB",
      date: "April 2, 2025",
      featured: true,
    },
    {
      id: 2,
      title: "UI Wireframes",
      type: "design",
      description: "Initial interface mockups and layouts",
      fileType: "Figma",
      fileSize: "4.1 MB",
      date: "April 3, 2025",
      featured: false,
    },
    {
      id: 3,
      title: "API Documentation",
      type: "code",
      description: "Endpoints and integration details",
      fileType: "JSON",
      fileSize: "1.2 MB",
      date: "April 4, 2025",
      featured: false,
    },
    {
      id: 4,
      title: "Project Timeline",
      type: "document",
      description: "Milestones and delivery schedule",
      fileType: "XLSX",
      fileSize: "0.8 MB",
      date: "April 5, 2025",
      featured: true,
    },
    {
      id: 5,
      title: "Component Library",
      type: "code",
      description: "Reusable UI components and styles",
      fileType: "TSX",
      fileSize: "3.5 MB",
      date: "April 6, 2025",
      featured: false,
    },
    {
      id: 6,
      title: "User Flow Diagrams",
      type: "design",
      description: "Visual representation of user journeys",
      fileType: "SVG",
      fileSize: "1.7 MB",
      date: "April 7, 2025",
      featured: false,
    },
  ]

  // Get file icon based on type
  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return "bg-red-500/20 text-red-500"
      case "figma":
        return "bg-purple-500/20 text-purple-500"
      case "json":
      case "tsx":
        return "bg-blue-500/20 text-blue-500"
      case "xlsx":
        return "bg-green-500/20 text-green-500"
      case "svg":
        return "bg-orange-500/20 text-orange-500"
      default:
        return "bg-gray-500/20 text-gray-500"
    }
  }

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
            Project Attachments
            <span
              className={`absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 transition-all duration-1000 delay-500 ${isVisible ? "w-20" : ""}`}
            ></span>
          </h2>
          <p className="text-gray-400 max-w-md">View and download important files and resources for your project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attachments.map((attachment, index) => (
            <div
              key={attachment.id}
              className={`group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              } ${selectedAttachment === attachment.id ? "ring-2 ring-orange-500" : ""}`}
              style={{
                transitionDelay: `${index * 150}ms`,
                boxShadow: "0 10px 30px -15px rgba(255, 115, 0, 0.2)",
              }}
              onClick={() => setSelectedAttachment(attachment.id === selectedAttachment ? null : attachment.id)}
            >
              {/* Attachment card with preserved rounded corners */}
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 p-6 flex flex-col">
                {/* File type icon */}
                <div className="mb-4 flex justify-between items-start">
                  <div className={`rounded-xl p-4 ${getFileIcon(attachment.fileType)}`}>
                    <File size={24} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium bg-gray-800 px-2 py-1 rounded">{attachment.fileType}</span>
                    <span className="text-xs font-medium bg-gray-800 px-2 py-1 rounded">{attachment.fileSize}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                  {attachment.title}
                </h3>

                <p className="text-gray-400 text-sm mb-auto">{attachment.description}</p>

                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{attachment.date}</span>
                </div>
              </div>

              {/* Featured badge */}
              {attachment.featured && (
                <div className="absolute top-4 right-4 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Star size={12} className="mr-1" /> Featured
                </div>
              )}

              {/* Overlay with actions - preserving rounded corners */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end transform transition-all duration-500 rounded-xl opacity-0 group-hover:opacity-100">
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2 mb-4">
                    <button className="flex-1 flex items-center justify-center text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      <Download size={14} className="mr-2" /> Download
                    </button>
                    <button className="flex items-center justify-center text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      <Eye size={14} className="mr-2" /> Preview
                    </button>
                  </div>

                  <a
                    href={`/attachments/${attachment.id}`}
                    className="inline-flex items-center text-white bg-transparent hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/30"
                  >
                    View Details <ExternalLink size={14} className="ml-1" />
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
          style={{ transitionDelay: `${attachments.length * 100 + 200}ms` }}
        >
          <button className="group relative hover:cursor-pointer overflow-hidden px-6 py-3 rounded-full border border-orange-500/30 bg-orange-500 hover:bg-black/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,115,0,0.3)]">
            <span className="relative z-10 text-white font-medium flex items-center gap-2">
              View All Attachments
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

