"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Brands() {
  const brands = [
    { id: 1, name: "BMW", logo: "/src/assets/bmw-brands-logo-image-1.png" },
    { id: 2, name: "Chanel", logo: "/src/assets/Chanel-Logo.png" },
    { id: 3, name: "Jewelry", logo: "/src/assets/jewelry-logo-design-ring-with-di.png" },
    { id: 4, name: "Mercedes", logo: "/src/assets/mercedes-benz-car-logo-png-brand.png" },
    { id: 5, name: "Nikon", logo: "/src/assets/Nikon-D800E-Sample-19.png" },
    { id: 6, name: "Rolex", logo: "/src/assets/rolex-emblem-png-logo-4.png" },
    { id: 7, name: "Roberto Cavalli", logo: "/src/assets/ro3293oeef-roberto-cavalli-logo.png" },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const visibleBrands = 5
  const extendedBrands = [...brands, ...brands]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % brands.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [brands.length])
  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 relative">
      <h3 className="text-center mb-8 text-2xl font-medium">
          <span className="text-white">TRUSTED BY</span>
          <div className="h-0.5 w-16 bg-orange-500 mx-auto mt-2"></div>
        </h3>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${(activeIndex * 100) / visibleBrands}%`,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
            }}
          >
            {extendedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-1/5 px-4"
                style={{ minWidth: `${100 / visibleBrands}%` }}
              >
                <div className="relative h-32 w-full flex flex-col items-center justify-center py-4">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="object-contain h-24 w-full" // Increased logo size
                    sizes="(max-width: 768px) 20vw, 150px"
                  />
                  <p className="mt-2 text-orange-500 text-sm font-medium text-center">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}