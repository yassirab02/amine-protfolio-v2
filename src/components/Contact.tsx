"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Send, User, Camera, Video, Check, Calendar, Clock, ChevronDown } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Close dropdown when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest(".dropdown-container")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [openDropdown])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setOpenDropdown(null)
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)
      setSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        })
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  // Project type options
  const projectTypes = [
    { value: "photography", label: "Photography" },
    { value: "videography", label: "Videography" },
    { value: "both", label: "Both Photography & Videography" },
    { value: "other", label: "Other" },
  ]

  // Budget options
  const budgetOptions = [
    { value: "$500-$1000", label: "$500 - $1,000" },
    { value: "$1000-$2500", label: "$1,000 - $2,500" },
    { value: "$2500-$5000", label: "$2,500 - $5,000" },
    { value: "$5000+", label: "$5,000+" },
    { value: "not-sure", label: "Not sure yet" },
  ]

  // Timeline options
  const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "1-2-weeks", label: "1-2 weeks" },
    { value: "1-month", label: "Within a month" },
    { value: "3-months", label: "Within 3 months" },
    { value: "flexible", label: "Flexible / Not sure yet" },
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      {/* Enhanced Beautiful Form */}
      <section className="py-10 px-4 md:px-8 max-w-6xl mx-auto mb-20">
        <div
          className={`relative border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-1000 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.7)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="p-10 md:p-16 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mb-6 shadow-[0_0_20px_rgba(255,119,0,0.5)]">
                <Mail className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Fill out the form below and I'll get back to you as soon as possible. Let's discuss how we can bring
                your creative vision to life.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-16 px-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-6 shadow-[0_0_20px_rgba(74,222,128,0.5)]">
                  <Check className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-zinc-400 max-w-md mx-auto">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
                <div className="grid gap-8">
                  {/* Name Field */}
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedField === "name" ? "transform scale-[1.02]" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 transition-opacity duration-300 ${
                        focusedField === "name" ? "opacity-100" : ""
                      }`}
                    ></div>
                    <div
                      className={`relative bg-zinc-900/80 backdrop-blur-sm border ${errors.name ? "border-red-500" : "border-zinc-800"} rounded-xl p-1 overflow-hidden`}
                    >
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${
                          focusedField === "name" ? "w-full" : "w-0"
                        }`}
                      ></div>
                      <div className="flex items-center px-4 py-3">
                        <User
                          className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                            focusedField === "name" ? "text-orange-500" : errors.name ? "text-red-500" : "text-zinc-500"
                          }`}
                        />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={handleBlur}
                          className="w-full bg-transparent border-none focus:outline-none text-white placeholder-zinc-500"
                          placeholder="Your Name"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                      </div>
                    </div>
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1 ml-2">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedField === "email" ? "transform scale-[1.02]" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 transition-opacity duration-300 ${
                        focusedField === "email" ? "opacity-100" : ""
                      }`}
                    ></div>
                    <div
                      className={`relative bg-zinc-900/80 backdrop-blur-sm border ${errors.email ? "border-red-500" : "border-zinc-800"} rounded-xl p-1 overflow-hidden`}
                    >
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${
                          focusedField === "email" ? "w-full" : "w-0"
                        }`}
                      ></div>
                      <div className="flex items-center px-4 py-3">
                        <Mail
                          className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-orange-500"
                              : errors.email
                                ? "text-red-500"
                                : "text-zinc-500"
                          }`}
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={handleBlur}
                          className="w-full bg-transparent border-none focus:outline-none text-white placeholder-zinc-500"
                          placeholder="Your Email"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                      </div>
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1 ml-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-8">
                  {/* Project Type Field - Custom Dropdown */}
                  <div className="relative dropdown-container w-full">
                    <div
                      className={`relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-1 overflow-hidden cursor-pointer ${
                        openDropdown === "projectType" ? "ring-1 ring-orange-500" : ""
                      }`}
                      onClick={() => toggleDropdown("projectType")}
                    >
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${
                          openDropdown === "projectType" ? "w-full" : "w-0"
                        }`}
                      ></div>
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center">
                          <div className="flex items-center mr-3">
                            <Camera className="w-5 h-5 text-zinc-500" />
                            <span className="mx-0.5 text-zinc-500">/</span>
                            <Video className="w-5 h-5 text-zinc-500" />
                          </div>
                          <span className={formData.projectType ? "text-white" : "text-zinc-500"}>
                            {formData.projectType
                              ? projectTypes.find((type) => type.value === formData.projectType)?.label
                              : "Select project type"}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${openDropdown === "projectType" ? "rotate-180" : ""}`}
                        />
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    {openDropdown === "projectType" && (
                      <div className="absolute z-50 mt-1 w-full bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden animate-fade-in">
                        <div className="py-1 max-h-60 overflow-auto">
                          {projectTypes.map((option) => (
                            <div
                              key={option.value}
                              className="px-4 py-2 hover:bg-zinc-800 cursor-pointer flex items-center"
                              onClick={() => handleSelectChange("projectType", option.value)}
                            >
                              <span className="ml-2">{option.label}</span>
                              {formData.projectType === option.value && (
                                <Check className="ml-auto w-4 h-4 text-orange-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Field - Custom Dropdown */}
                <div className="relative dropdown-container">
                  <div
                    className={`relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-1 overflow-hidden cursor-pointer ${
                      openDropdown === "timeline" ? "ring-1 ring-orange-500" : ""
                    }`}
                    onClick={() => toggleDropdown("timeline")}
                  >
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${
                        openDropdown === "timeline" ? "w-full" : "w-0"
                      }`}
                    ></div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-zinc-500" />
                        <span className={formData.timeline ? "text-white" : "text-zinc-500"}>
                          {formData.timeline
                            ? timelineOptions.find((option) => option.value === formData.timeline)?.label
                            : "When do you need this completed?"}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${openDropdown === "timeline" ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {openDropdown === "timeline" && (
                    <div className="absolute z-50 mt-1 w-full bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden animate-fade-in">
                      <div className="py-1 max-h-60 overflow-auto">
                        {timelineOptions.map((option) => (
                          <div
                            key={option.value}
                            className="px-4 py-2 hover:bg-zinc-800 cursor-pointer flex items-center"
                            onClick={() => handleSelectChange("timeline", option.value)}
                          >
                            <span className="ml-2">{option.label}</span>
                            {formData.timeline === option.value && (
                              <Check className="ml-auto w-4 h-4 text-orange-500" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div
                  className={`relative transition-all duration-300 ${
                    focusedField === "message" ? "transform scale-[1.01]" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 transition-opacity duration-300 ${
                      focusedField === "message" ? "opacity-100" : ""
                    }`}
                  ></div>
                  <div
                    className={`relative bg-zinc-900/80 backdrop-blur-sm border ${errors.message ? "border-red-500" : "border-zinc-800"} rounded-xl p-1 overflow-hidden`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${
                        focusedField === "message" ? "w-full" : "w-0"
                      }`}
                    ></div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      rows={5}
                      className="w-full bg-transparent border-none focus:outline-none text-white placeholder-zinc-500 p-4"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1 ml-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(255,119,0,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,119,0,0.5)] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Additional Contact Info */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,119,0,0.1)]">
            <Mail className="w-8 h-8 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:rihani.amine111@gmail.com"
              className="text-zinc-400 hover:text-orange-400 transition-colors"
            >
              rihani.amine111@gmail.com
            </a>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,119,0,0.1)]">
            <Clock className="w-8 h-8 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold mb-2">Response Time</h3>
            <p className="text-zinc-400">Usually within 24 hours</p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,119,0,0.1)]">
            <Calendar className="w-8 h-8 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold mb-2">Availability</h3>
            <p className="text-zinc-400">Now booking for upcoming months</p>
          </div>
        </div>
      </section>
    </div>
  )
}

