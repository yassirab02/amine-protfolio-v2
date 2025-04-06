"use client";

import React, { useEffect, useState, useRef } from "react";
import {Camera, Video, Plus, Circle } from "lucide-react"

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
      className="w-full min-h-screen bg-black text-white p-4 md:p-8 lg:p-16 flex items-center justify-center overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-orange-500/20 blur-[120px] animate-pulse"></div>
          <div
            className="absolute top-[60%] left-[60%] w-96 h-96 rounded-full bg-lime-300/15 blur-[120px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[30%] left-[80%] w-48 h-48 rounded-full bg-purple-500/15 blur-[100px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-[80%] left-[10%] w-64 h-64 rounded-full bg-blue-500/15 blur-[110px] animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Enhanced floating geometric shapes */}
      <div
        className="absolute top-20 right-[15%] w-16 h-16 border border-orange-500/30 rounded-lg rotate-12 parallax animate-float-slow"
        data-speed="0.03"
      ></div>
      <div
        className="absolute bottom-32 left-[20%] w-20 h-20 border border-lime-300/30 rounded-full parallax animate-float"
        data-speed="0.05"
      ></div>
      <div
        className="absolute top-[40%] left-[10%] w-12 h-12 border border-purple-400/30 rotate-45 parallax animate-float-medium"
        data-speed="0.04"
      ></div>
      <div
        className="absolute bottom-[20%] right-[25%] w-14 h-14 border border-blue-400/30 rounded-lg rotate-45 parallax animate-float-medium"
        data-speed="0.035"
      ></div>

      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Center the profile card on mobile */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          {/* Profile Card */}
          <div
            className={`bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 backdrop-blur-xl rounded-3xl p-8 text-white flex flex-col items-center max-w-[340px] shadow-[0_20px_80px_rgba(255,87,34,0.15)] border border-white/10 transition-all duration-700 delay-300 hover:shadow-[0_20px_80px_rgba(255,87,34,0.25)] hover:border-orange-500/30 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 -z-10 bg-black rounded-3xl">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </div>

            <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] transform transition-transform duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
              <img
                src="/src/assets/my logo.png"
                alt="Profile photo"
                width={320}
                height={320}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Enhanced animated overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shine_3s_ease-in-out_infinite]"></div>
              </div>
            </div>

            <h2 className="font-bold text-2xl uppercase mt-2 tracking-wide bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Amine Rihani
            </h2>

            <div className="relative mt-8 mb-8 w-full">
              <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-[0_5px_20px_rgba(255,87,34,0.5)] animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              <div className="border border-white/15 rounded-xl p-5 text-sm text-center bg-black/50 backdrop-blur-sm shadow-lg">
                <p className="text-gray-300 leading-relaxed">
                  A Videographer and Photographer capturing moments through
                  stunning visuals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              {/* Social Icons */}
              {["instagram", "whatsapp", "linkedin"].map((social, index) => {
                const socialLinks: Record<string, string> = {
                  instagram: "https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr",
                  whatsapp: "https://wa.me/your-number",
                  linkedin: "https://www.linkedin.com/in/amine-rihani-66487a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                };

                return (
                  <a
                    key={social}
                    href={socialLinks[social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2.5 border border-white/15 flex items-center justify-center w-11 h-11 bg-black/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:text-white shadow-md hover:shadow-[0_5px_20px_rgba(255,87,34,0.4)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <SocialIcon type={social} className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`flex-1 flex flex-col justify-between transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-white inline-block transform transition-transform duration-700 delay-700 hover:scale-[1.02] origin-left relative">
                VIDEOGRAPHER
                <div className="absolute -bottom-2 left-0 w-2/5 h-1.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
              </span>
              <br />
              <span className="text-gray-500 inline-block transform transition-transform duration-700 delay-800 hover:scale-[1.02] origin-left">
                PHOTOGRAPHER
              </span>
            </h1>
            <p className="text-gray-400 mt-6 md:mt-10 max-w-xl text-base md:text-lg leading-relaxed">
              Passionate about creating intuitive and engaging visual
              experiences. Specializing in transforming moments into beautifully
              crafted memories that last forever.
            </p>

            <div className="flex flex-wrap gap-8 md:gap-16 mt-10 md:mt-14">
              {[
                { number: "+5", label: "Years Experience" },
                { number: "+46", label: "Projects Completed" },
                { number: "+30", label: "Happy Clients" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex flex-col group relative"
                  style={{ transitionDelay: `${index * 100 + 1000}ms` }}
                >
                  <span className="text-4xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-white group-hover:to-orange-100 transition-all duration-500">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
          <SkillCard
          title="Cinematography & Video Editing"
          bgClass="from-orange-600 via-orange-500 to-orange-600"
          textColor="text-white"
          borderColor="border-white/30"
          delay={1200}
          icon="video"
        />

        <SkillCard
          title="Adobe Premiere Pro, After Effects, Lightroom, Photoshop"
          bgClass="from-gray-50 via-white to-gray-50"
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
    className={`bg-gradient-to-br ${bgClass} rounded-xl p-5 sm:p-7 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.3)] transform transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] cursor-pointer ${textColor} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Enhanced background effects */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

    {/* Enhanced animated shine effect */}
    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] animate-[shine_8s_ease-in-out_infinite]"></div>

    {/* Content */}
    <div className="relative z-10">
      <div className="mb-4 flex items-center">
        {icon === "video" ? <Video className="mr-3" /> : <Camera className="mr-3" />}
        <div className="h-px flex-1 bg-current opacity-30"></div>
      </div>

      <h3 className="font-bold uppercase text-lg sm:text-xl md:text-xl relative z-10 tracking-wide leading-relaxed">
        {title.split(" ").map((word, i) => (
          <React.Fragment key={i}>
            {word} {i % 2 === 0 && <br />}
          </React.Fragment>
        ))}
      </h3>
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
    case "whatsapp":
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
          <path d="M21.5 12.1c0-5.2-4.2-9.4-9.4-9.4S2.7 6.9 2.7 12.1c0 1.7.4 3.3 1.3 4.7L3 22l5.3-1.4c1.3.7 2.7 1 4.2 1 5.1 0 9.3-4.2 9.3-9.3z"></path>
          <path d="M8.9 9.6c-.2-.4-.4-.4-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.8.7-.8 1.7s.8 2 1 2.2c.1.1 1.6 2.4 4 3.2 2 .6 2.4.5 2.9.5s1.5-.6 1.7-1.2c.2-.6.2-1.2.1-1.2s-.2 0-.4 0-.6.1-1 .4c-.3.2-.7.5-1.2.4-.5 0-1.5-.6-2-1.2-.7-.8-1.1-1.4-1.3-1.6-.2-.2-.1-.3 0-.5.2-.2.6-.7.6-.9s0-.5 0-.7c.1-.2 0-.3 0-.3z"></path>
        </svg>
      );
    default:
      return null;
  }
}
