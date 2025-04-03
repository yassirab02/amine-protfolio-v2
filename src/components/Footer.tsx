"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  VideoIcon as Vimeo,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Footer() {
  const images = [
    "/src/assets/1RqbvEVlP2dlrkA03BbeiAA.png",
    "/src/assets/Nikon-D800E-Sample-19.png",
    "/src/assets/ro3293oeef-roberto-cavalli-logo.png",
    "/src/assets/th.png",
    "/src/assets/th.webp",
    "/src/assets/th2.png",
    "/src/assets/The-State-of-the-Photography-Ind.png",
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Create an animation that continuously scrolls in one direction
    let animationId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate scroll position based on time
      // This creates a continuous scroll effect
      const scrollPos = (elapsed / 50) % scrollContainer.scrollWidth;

      // Set scroll position
      scrollContainer.scrollLeft = scrollPos;

      // If we're near the end, reset the scroll position seamlessly
      if (scrollPos > scrollContainer.scrollWidth / 2) {
        // Reset the animation time when we're halfway through
        // This creates a seamless loop as the duplicated images come into view
        startTime = timestamp;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <footer className="w-full bg-black text-white">
      {/* Image Album with continuous scroll and fixed button */}
      <div className="relative h-[120px] overflow-hidden">
        {/* Fixed FOLLOW US button in the center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <a
            href="https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-orange-500 text-white px-4 py-1.5 rounded-md font-semibold text-sm 
              hover:bg-orange-600 transition-colors duration-200 cursor-pointer
              hover:scale-105 transform pointer-events-auto"
            >
              FOLLOW ME
            </button>
          </a>
        </div>

        {/* Scrolling images behind the button */}
        <div
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto scrollbar-hide absolute inset-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Double the images to create a seamless loop */}
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative h-[120px] flex-shrink-0"
              style={{ width: `${100 / 7}%` }} // 7 is the number of unique images
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links with orange hover effect */}
      <div className="flex justify-center items-center py-3 space-x-1">
        <span className="text-white/50 mx-2">•</span>
        <a
          href="https://www.linkedin.com/in/amine-rihani-66487a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white/80 hover:text-orange-500 transition-colors duration-200"
        >
          <Linkedin size={16} />
          <span className="text-sm">LinkedIn</span>
        </a>
        <span className="text-white/50 mx-2">•</span>
        <a
          href="https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white/80 hover:text-orange-500 transition-colors duration-200"
        >
          <Instagram size={16} />
          <span className="text-sm">Instagram</span>
        </a>
      </div>
    </footer>
  );
}
