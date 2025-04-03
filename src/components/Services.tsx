"use client"

import { useEffect, useState } from "react"
import { Camera, Video, Check, ArrowRight } from "lucide-react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-black">
      <section id="services" className="py-6 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden text-white">
        <div
          className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold mb-5 relative inline-block">
             Services
            <span
              className={`absolute -bottom-2 left-0 h-1 bg-orange-500 ${isVisible ? "animate-line" : "w-0"}`}
            ></span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mt-6">
            We offer a comprehensive range of professional photography and videography services to meet your creative
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Videography Services */}
          <div
            className={`border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,119,0,0.3)] group ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="p-10 bg-gradient-to-r from-black to-zinc-900 flex items-center border-b border-zinc-800 group-hover:border-orange-500/30 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mr-6 relative animate-pulse-slow">
                <Video className="w-10 h-10 text-black" />
                <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping-slow opacity-75"></span>
              </div>
              <h3 className="text-4xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                Videography
              </h3>
            </div>
            <div className="p-10 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <p className="text-zinc-400 mb-8 text-lg">
                Our videography services capture the essence of your story through dynamic and engaging visual
                narratives.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 relative">
                {[
                  "Social Media Reels",
                  "Personal Projects",
                  "Wedding Ceremonies",
                  "Fashion Showcases",
                  "Restaurant Promotions",
                  "Real Estate Tours",
                  "Corporate Events",
                  "Sports Highlights",
                  "Product Demonstrations",
                  "Brand Storytelling",
                  "Short Films",
                  "Music Videos",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center group/item"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.5s ease ${0.1 + index * 0.05}s`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center mr-3 group-hover/item:bg-orange-500 transition-all duration-300 hover:scale-110">
                      <Check className="w-4 h-4 text-orange-500 group-hover/item:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-zinc-300 text-lg group-hover/item:text-white transition-colors duration-300 relative">
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover/item:w-full transition-all duration-300"></span>
                    </span>
                  </li>
                ))}
              </ul>

              <button className="mt-10 px-6 py-3 text-lg font-medium bg-transparent hover:bg-orange-500/10 hover:cursor-pointer text-orange-500 border border-orange-500 rounded-lg flex items-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                View Videography Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Photography Services */}
          <div
            className={`border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,119,0,0.3)] group ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="p-10 bg-gradient-to-r from-black to-zinc-900 flex items-center border-b border-zinc-800 group-hover:border-orange-500/30 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mr-6 relative animate-pulse-slow">
                <Camera className="w-10 h-10 text-black" />
                <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping-slow opacity-75"></span>
              </div>
              <h3 className="text-4xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                Photography
              </h3>
            </div>
            <div className="p-10 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <p className="text-zinc-400 mb-8 text-lg">
                Our photography services freeze moments in time with stunning compositions and expert technical
                execution.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 relative">
                {[
                  "Wedding Photography",
                  "Fashion Editorials",
                  "Real Estate Listings",
                  "Food & Restaurant",
                  "Automotive Photography",
                  "Event Coverage",
                  "Sports Action Shots",
                  "Couples & Portraits",
                  "Brand Campaigns",
                  "Product Photography",
                  "Landscape & Nature",
                  "Corporate Headshots",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center group/item"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.5s ease ${0.1 + index * 0.05}s`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center mr-3 group-hover/item:bg-orange-500 transition-all duration-300 hover:scale-110">
                      <Check className="w-4 h-4 text-orange-500 group-hover/item:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-zinc-300 text-lg group-hover/item:text-white transition-colors duration-300 relative">
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover/item:w-full transition-all duration-300"></span>
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 px-6 py-3 text-lg font-medium bg-transparent hover:bg-orange-500/10  hover:cursor-pointer text-orange-500 border border-orange-500 rounded-lg flex items-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                View Photography Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

