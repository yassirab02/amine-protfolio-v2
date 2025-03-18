"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ProductDesignerHero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(".parallax");
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.left + container.width / 2;
      const centerY = container.top + container.height / 2;

      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = Number.parseFloat(element.dataset.speed || "0.05");
        const moveX = (e.clientX - centerX) * speed;
        const moveY = (e.clientY - centerY) * speed;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-4 md:p-8 lg:p-16 flex items-center justify-center overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-orange-500/30 blur-[100px] animate-pulse"></div>
          <div
            className="absolute top-[60%] left-[60%] w-80 h-80 rounded-full bg-lime-300/20 blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[30%] left-[80%] w-40 h-40 rounded-full bg-purple-500/20 blur-[80px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-[80%] left-[10%] w-60 h-60 rounded-full bg-blue-500/20 blur-[90px] animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 right-[15%] w-16 h-16 border border-orange-500/20 rounded-lg rotate-12 parallax"
        data-speed="0.03"
      ></div>
      <div
        className="absolute bottom-32 left-[20%] w-20 h-20 border border-lime-300/20 rounded-full parallax"
        data-speed="0.05"
      ></div>
      <div
        className="absolute top-[40%] left-[10%] w-12 h-12 border border-purple-400/20 rotate-45 parallax"
        data-speed="0.04"
      ></div>

      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row gap-12 lg:gap-20 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Card */}
        <div
          className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-7 text-white flex flex-col items-center max-w-[320px] shadow-[0_20px_50px_rgba(255,87,34,0.15)] border border-white/5 transition-all duration-700 delay-300 hover:shadow-[0_20px_60px_rgba(255,87,34,0.25)] ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative w-full aspect-square mb-7 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform transition-transform duration-500 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-white"></div>
            <img
              src="/src/assets/my logo.png"
              alt="Profile photo"
              width={320}
              height={320}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover mix-blend-luminosity transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shine_3s_ease-in-out_infinite]"></div>
            </div>
          </div>

          <h2 className="font-bold text-2xl uppercase mt-2 tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Amine Rihani
          </h2>

          <div className="relative mt-8 mb-7 w-full">
            <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-[0_5px_15px_rgba(255,87,34,0.4)] animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div className="border border-white/10 rounded-lg p-4 text-sm text-center bg-white/5 backdrop-blur-sm shadow-sm">
              <p className="text-gray-300">
                A Videographer and Photographer capturing moments through
                stunning visuals.
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            {/* Social Icons */}
            {["instagram", "twitter", "linkedin", "github"].map(
              (social, index) => (
                <div
                  key={social}
                  className="rounded-full p-2 border border-white/10 flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:text-white shadow-sm hover:shadow-[0_5px_15px_rgba(255,87,34,0.3)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <SocialIcon type={social} className="w-4 h-4" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`flex-1 flex flex-col justify-between transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-white inline-block transform transition-transform duration-700 delay-700 hover:scale-[1.02] origin-left relative">
                VIDEOGRAPHER
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
              </span>
              <br />
              <span className="text-gray-500 inline-block transform transition-transform duration-700 delay-800 hover:scale-[1.02] origin-left">
                PHOTOGRAPHER
              </span>
            </h1>
            <p className="text-gray-400 mt-8 max-w-xl text-lg leading-relaxed">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </p>

            <div className="flex flex-wrap gap-16 mt-12">
              {[
                { number: "+12", label: "Years Experience" },
                { number: "+46", label: "Projects Completed" },
                { number: "+20", label: "Happy Clients" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex flex-col group relative"
                  style={{ transitionDelay: `${index * 100 + 1000}ms` }}
                >
                  <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-white transition-all duration-500">
                    {stat.number}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider mt-2 group-hover:text-gray-300 transition-colors duration-500">
                    {stat.label}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-transparent group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <SkillCard
              title="Cinematography & Video Editing"
              bgClass="from-orange-600 to-orange-500"
              textColor="text-white"
              borderColor="border-white/30"
              delay={1200}
              icon="video"
            />

            <SkillCard
              title="Adobe Premiere Pro, After Effects, Lightroom, Photoshop"
              bgClass="from-lime-400 to-lime-300"
              textColor="text-black"
              borderColor="border-black/30"
              delay={1300}
              icon="camera"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Skill Card Component
function SkillCard({
  title,
  bgClass,
  textColor,
  borderColor,
  delay,
  icon,
}: {
  title: string;
  bgClass: string;
  textColor: string;
  borderColor: string;
  delay: number;
  icon: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-gradient-to-br ${bgClass} rounded-xl p-6 relative overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer ${textColor} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>

      {/* Animated shine effect */}
      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shine_8s_ease-in-out_infinite]"></div>

      {/* Content */}
      <div className="relative z-10">
        {icon === "animation" ? (
          <div className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M5 3v16h16"></path>
              <path d="m5 19 6-6"></path>
              <path d="m2 6 3-3 3 3"></path>
              <path d="m18 16 3-3 3 3"></path>
              <path d="m19 5-7 7"></path>
            </svg>
            <div className="h-px flex-1 bg-current opacity-30"></div>
          </div>
        ) : (
          <div className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <div className="h-px flex-1 bg-current opacity-30"></div>
          </div>
        )}

        <h3 className="font-bold uppercase text-xl relative z-10 tracking-wide">
          {title.split(" ").map((word, i) => (
            <React.Fragment key={i}>
              {word} {i % 2 === 0 && <br />}
            </React.Fragment>
          ))}
        </h3>
      </div>

      <div
        className={`absolute bottom-4 right-4 w-10 h-10 rounded-full border ${borderColor} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 group`}
      >
        <span className="text-sm transition-transform duration-300 group-hover:rotate-45">
          +
        </span>
      </div>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    default:
      return null;
  }
}
