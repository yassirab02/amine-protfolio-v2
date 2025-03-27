"use client"

import { useEffect, useState } from "react"
import { Camera, Video, Check } from "lucide-react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-black">
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-white overflow-hidden">
      <div className={`text-center mb-16 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <h2 className="text-4xl font-bold mb-3 relative inline-block">
          Services
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Videography Services */}
        <div
          className={`border border-zinc-800 rounded-xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_15px_rgba(255,119,0,0.3)] group ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="p-8 bg-gradient-to-r from-black to-zinc-900 flex items-center border-b border-zinc-800 group-hover:border-orange-500/30 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mr-5 relative animate-pulse-slow">
              <Video className="w-7 h-7 text-black" />
              <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping-slow opacity-75"></span>
            </div>
            <h3 className="text-3xl font-bold group-hover:text-orange-500 transition-colors duration-300">
              Videography
            </h3>
          </div>
          <div className="p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 relative">
              {[
                "Reels",
                "Personal work",
                "Wedding",
                "Fashion",
                "Restaurant",
                "Real estate",
                "Events",
                "Sports",
                "Products",
                "Brands",
                "Short film",
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
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 group-hover/item:bg-orange-500 transition-all duration-300 hover:scale-110">
                    <Check className="w-3.5 h-3.5 text-orange-500 group-hover/item:text-black transition-colors duration-300" />
                  </div>
                  <span className="text-zinc-300 group-hover/item:text-white transition-colors duration-300 relative">
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover/item:w-full transition-all duration-300"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Photography Services */}
        <div
          className={`border border-zinc-800 rounded-xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_15px_rgba(255,119,0,0.3)] group ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="p-8 bg-gradient-to-r from-black to-zinc-900 flex items-center border-b border-zinc-800 group-hover:border-orange-500/30 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mr-5 relative animate-pulse-slow">
              <Camera className="w-7 h-7 text-black" />
              <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping-slow opacity-75"></span>
            </div>
            <h3 className="text-3xl font-bold group-hover:text-orange-500 transition-colors duration-300">
              Photography
            </h3>
          </div>
          <div className="p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 relative">
              {["Wedding", "Fashion", "Real estate", "Restaurant", "Cars", "Events", "Sports", "Couples", "Brands"].map(
                (service, index) => (
                  <li
                    key={index}
                    className="flex items-center group/item"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.5s ease ${0.1 + index * 0.05}s`,
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 group-hover/item:bg-orange-500 transition-all duration-300 hover:scale-110">
                      <Check className="w-3.5 h-3.5 text-orange-500 group-hover/item:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-zinc-300 group-hover/item:text-white transition-colors duration-300 relative">
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover/item:w-full transition-all duration-300"></span>
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>

  )
}

