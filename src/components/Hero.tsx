import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import hero from '../assets/me.png';


const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-[100vh] overflow-hidden"
    >
      {/* Hero Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity, scale }}
      >
        <img
          src= {hero}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </motion.div>

      {/* Text Overlay */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
        style={{ y }}
      >
        {/* Subtitle - Smaller text above the name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 md:mb-8 font-serif text-2xl tracking-[0.2em] text-white/80"
        >
          PHOTOGRAPHER & FILMMAKER
        </motion.div>
        
        {/* Main Name - The focal point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="relative mb-6 overflow-hidden py-2"
        >
          {/* Highlight background effect */}
          <motion.div 
            className="absolute inset-0 bg-accent-500/10 rounded-lg"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          
          {/* The name with special styling */}
          <h1 className="relative font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-white">
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block"
            >
              AMINE
            </motion.span>{" "}
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-block relative"
            >
              <span className="relative z-10">RIHANI</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-accent-500 w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 md:mt-16"
        >
          <a 
            href="portfolio"
            className="inline-block border border-white/40 hover:border-white px-8 py-3 text-sm tracking-widest font-serif transition-all hover:bg-white/10 backdrop-blur-sm"
          >
            VIEW PORTFOLIO
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;