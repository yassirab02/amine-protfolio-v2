"use client"

import { useState, useEffect, useRef } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  MessageSquare,
  Instagram,
  Twitter,
  Linkedin,
  Camera,
  Play,
  MoreHorizontal,
} from "lucide-react"

// Custom hook for intersection observer - same as in LatestProjects
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

export default function Contact() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)
  const [hoverButton, setHoverButton] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 5000)
    }, 1500)
  }

  // Track mouse position for button hover effect
  /*
  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setHoverButton(true)
    const handleMouseLeave = () => setHoverButton(false)

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [buttonRef.current])
  */

  // Animated background effect
  useEffect(() => {
    if (!isVisible) return

    const canvas = document.getElementById("contact-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      life: number
      maxLife: number
      pulse: number
      pulseSpeed: number
    }[] = []

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 0.5,
        color: `rgba(255, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.2 + 0.1})`,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        life: Math.random() * 100,
        maxLife: Math.random() * 200 + 100,
        pulse: Math.random(),
        pulseSpeed: Math.random() * 0.01 + 0.01,
      })
    }

    // Add some larger particles for depth
    for (let i = 0; i < 10; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 3,
        color: `rgba(255, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 50)}, 0.03)`,
        vx: Math.random() * 0.1 - 0.05,
        vy: Math.random() * 0.1 - 0.05,
        life: Math.random() * 100,
        maxLife: Math.random() * 200 + 200,
        pulse: Math.random(),
        pulseSpeed: Math.random() * 0.005 + 0.005,
      })
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      particles.forEach((p, index) => {
        p.x += p.vx
        p.y += p.vy
        p.life++
        p.pulse += p.pulseSpeed

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        if (p.life >= p.maxLife) {
          p.life = 0
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
        }

        const opacity = Math.sin((p.life / p.maxLife) * Math.PI) * 0.3
        const pulseRadius = p.radius * (1 + Math.sin(p.pulse) * 0.2)

        if (ctx) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2)
          ctx.fillStyle = p.color.replace(/[\d.]+\)$/g, `${opacity})`)
          ctx.fill()
        }

        // Add glow effect to some particles
        if (index % 5 === 0) {
          if (!ctx) return
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseRadius * 3)
          gradient.addColorStop(0, p.color.replace(/[\d.]+\)$/g, `${opacity * 0.5})`))
          gradient.addColorStop(1, p.color.replace(/[\d.]+\)$/g, "0)"))

          ctx.beginPath()
          ctx.arc(p.x, p.y, pulseRadius * 3, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup if needed
    }
  }, [isVisible])

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "CreativeMinds",
      image: "/placeholder.svg?height=80&width=80",
      text: "Working with this photographer was an absolute pleasure. The attention to detail and creativity brought our brand vision to life.",
    },
    {
      name: "Michael Chen",
      role: "Wedding Planner",
      company: "Perfect Day Events",
      image: "/placeholder.svg?height=80&width=80",
      text: "The photos captured every special moment of our clients' weddings. Truly exceptional work that we recommend to all our couples.",
    },
    {
      name: "Emma Rodriguez",
      role: "Art Director",
      company: "Visionary Studios",
      image: "/placeholder.svg?height=80&width=80",
      text: "The videography skills are unmatched. Our documentary received praise specifically for its stunning visual storytelling.",
    },
  ]

  return (
    <section ref={sectionRef} className="bg-black text-white py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Canvas background */}
      <canvas id="contact-canvas" className="absolute inset-0 w-full h-full"></canvas>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 pointer-events-none"></div>

      <div
        className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-1000 ${isVisible ? "w-full" : ""}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-1000 delay-300 ${isVisible ? "w-full" : ""}`}
      ></div>

      {/* Glowing orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/4 -left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl opacity-40 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 -right-20 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl opacity-40 animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Diagonal line decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-1 h-[200%] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent transform rotate-45 translate-x-full transition-transform duration-1000 ${isVisible ? "translate-x-0" : ""}`}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 overflow-hidden pointer-events-none">
        <div
          className={`absolute bottom-0 left-0 w-1 h-[200%] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent transform -rotate-45 -translate-x-full transition-transform duration-1000 delay-300 ${isVisible ? "translate-x-0" : ""}`}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYwNSIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-20 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col items-center text-center mb-6">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4 backdrop-blur-sm">
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              Let's Connect
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 relative inline-block text-gradient">
              Get In Touch
              <span
                className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300 transition-all duration-1000 delay-500 ${isVisible ? "w-2/3" : ""}`}
              ></span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg md:text-xl">
              Have a project in mind or want to discuss a collaboration? I'd love to hear from you and bring your vision
              to life through stunning photography and videography.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <div
              className={`grid gap-6 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: "150ms" }}
            >
              {/* Main contact card */}
              <div className="relative overflow-hidden bg-gradient-to-br from-black/80 via-black/95 to-black/90 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-500 group shadow-[0_10px_50px_-12px_rgba(255,115,0,0.15)]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/10 transition-all duration-700"></div>

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-1 h-8 bg-orange-500/50 transition-all duration-700 delay-100 ${isVisible ? "h-8" : "h-0"}`}
                  ></div>
                  <div
                    className={`absolute top-0 left-0 h-1 w-8 bg-orange-500/50 transition-all duration-700 delay-100 ${isVisible ? "w-8" : "w-0"}`}
                  ></div>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute bottom-0 right-0 w-1 h-8 bg-orange-500/50 transition-all duration-700 delay-300 ${isVisible ? "h-8" : "h-0"}`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 h-1 w-8 bg-orange-500/50 transition-all duration-700 delay-300 ${isVisible ? "w-8" : "w-0"}`}
                  ></div>
                </div>

                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-full flex items-center justify-center mb-6 border border-orange-500/30 group-hover:border-orange-500/50 transition-all duration-500 shadow-[0_0_20px_rgba(255,115,0,0.2)]">
                    <Mail className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-500">
                    Let's Talk
                  </h3>
                  <p className="text-gray-400 max-w-md">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                    vision.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,115,0,0.1)] hover:-translate-y-0.5">
                    <div className="bg-orange-500/10 rounded-full p-3 border border-orange-500/30">
                      <Mail className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Email Me At</h4>
                      <a
                        href="mailto:contact@example.com"
                        className="text-white hover:text-orange-300 transition-colors"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,115,0,0.1)] hover:-translate-y-0.5">
                    <div className="bg-orange-500/10 rounded-full p-3 border border-orange-500/30">
                      <Phone className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Call Me At</h4>
                      <a href="tel:+1234567890" className="text-white hover:text-orange-300 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,115,0,0.1)] hover:-translate-y-0.5">
                    <div className="bg-orange-500/10 rounded-full p-3 border border-orange-500/30">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Based In</h4>
                      <p className="text-white">New York, NY</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-orange-500/10">
                  <h4 className="text-center text-sm font-medium text-gray-400 mb-4">Connect With Me</h4>
                  <div className="flex justify-center gap-4">
                    {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="relative group/icon bg-black/60 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 rounded-full p-3 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,115,0,0.2)]"
                      >
                        <Icon className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover/icon:scale-110" />
                        <span className="absolute inset-0 rounded-full bg-orange-500/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-ping-slow"></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-7 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-black/80 via-black/95 to-black/90 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 md:p-10 hover:border-orange-500/30 transition-all duration-500 shadow-[0_10px_50px_-12px_rgba(255,115,0,0.15)] hover:shadow-[0_20px_60px_-15px_rgba(255,115,0,0.2)]">
              <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

              {/* Animated corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-1 h-8 bg-orange-500/50 transition-all duration-700 delay-200 ${isVisible ? "h-8" : "h-0"}`}
                ></div>
                <div
                  className={`absolute top-0 right-0 h-1 w-8 bg-orange-500/50 transition-all duration-700 delay-200 ${isVisible ? "w-8" : "w-0"}`}
                ></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                <div
                  className={`absolute bottom-0 left-0 w-1 h-8 bg-orange-500/50 transition-all duration-700 delay-400 ${isVisible ? "h-8" : "h-0"}`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 h-1 w-8 bg-orange-500/50 transition-all duration-700 delay-400 ${isVisible ? "w-8" : "w-0"}`}
                ></div>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-ping-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-full flex items-center justify-center border border-orange-500/30 animate-pulse">
                      <Send className="w-10 h-10 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gradient">Message Sent!</h3>
                  <p className="text-gray-300 max-w-md text-lg mb-8">
                    Thank you for reaching out. I'll get back to you as soon as possible to discuss your project.
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-500/50 to-orange-300/50 rounded-full"></div>
                </div>
              ) : (
                <>
                  <div className="mb-8 flex items-center">
                    <div className="mr-4 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                      <MessageSquare className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Send a Message</h3>
                      <p className="text-gray-400">Fill out the form below and I'll respond as soon as possible.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 relative group">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center">
                          <span className="relative">
                            Your Name
                            <span
                              className={`absolute -bottom-px left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 ${activeField === "name" ? "w-full" : "group-hover:w-full"}`}
                            ></span>
                          </span>
                          <span className="text-orange-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField(null)}
                            required
                            className="w-full bg-black/60 border border-orange-500/20 focus:border-orange-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                            placeholder="John Doe"
                          />
                          <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-500 ${activeField === "name" ? "w-[calc(100%-24px)]" : ""}`}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2 relative group">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center">
                          <span className="relative">
                            Email Address
                            <span
                              className={`absolute -bottom-px left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 ${activeField === "email" ? "w-full" : "group-hover:w-full"}`}
                            ></span>
                          </span>
                          <span className="text-orange-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => setActiveField("email")}
                            onBlur={() => setActiveField(null)}
                            required
                            className="w-full bg-black/60 border border-orange-500/20 focus:border-orange-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                            placeholder="john@example.com"
                          />
                          <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-500 ${activeField === "email" ? "w-[calc(100%-24px)]" : ""}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 relative group">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300 flex items-center">
                        <span className="relative">
                          Subject
                          <span
                            className={`absolute -bottom-px left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 ${activeField === "subject" ? "w-full" : "group-hover:w-full"}`}
                          ></span>
                        </span>
                        <span className="text-orange-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onFocus={() => setActiveField("subject")}
                          onBlur={() => setActiveField(null)}
                          required
                          className="w-full bg-black/60 border border-orange-500/20 focus:border-orange-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                          placeholder="Project Inquiry"
                        />
                        <div
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-500 ${activeField === "subject" ? "w-[calc(100%-24px)]" : ""}`}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2 relative group">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center">
                        <span className="relative">
                          Your Message
                          <span
                            className={`absolute -bottom-px left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 ${activeField === "message" ? "w-full" : "group-hover:w-full"}`}
                          ></span>
                        </span>
                        <span className="text-orange-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField("message")}
                          onBlur={() => setActiveField(null)}
                          required
                          rows={5}
                          className="w-full bg-black/60 border border-orange-500/20 focus:border-orange-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or inquiry..."
                        ></textarea>
                        <div
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-500 ${activeField === "message" ? "w-[calc(100%-24px)]" : ""}`}
                        ></div>
                      </div>
                    </div>

                    {/* Services checkboxes */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">Services You're Interested In</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { icon: Camera, label: "Photography" },
                          { icon: Play, label: "Videography" },
                          { icon: Instagram, label: "Social Media" },
                          { icon: Mail, label: "Marketing" },
                          { icon: MoreHorizontal, label: "Other" },
                        ].map((service, index) => (
                          <div key={index} className="flex items-center">
                            <label className="relative flex items-center w-full cursor-pointer">
                              <input type="checkbox" id={`service-${index}`} className="peer sr-only" />
                              <div className="w-5 h-5 border border-orange-500/30 rounded bg-black/60 peer-checked:bg-orange-500/20 peer-checked:border-orange-500 transition-all duration-200"></div>
                              <div className="absolute left-0.5 top-0.5 w-4 h-4 scale-0 peer-checked:scale-100 transition-transform duration-200 text-orange-500 flex items-center justify-center pointer-events-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-3 h-3"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                              <span className="ml-2 text-sm text-gray-300 flex items-center">
                                <service.icon className="w-4 h-4 mr-2 text-orange-500" />
                                {service.label}
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      ref={buttonRef}
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative hover:cursor-pointer overflow-hidden mt-4 px-8 py-4 rounded-full border border-orange-500/30 bg-orange-500 hover:bg-black/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,115,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 text-white font-medium flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
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

