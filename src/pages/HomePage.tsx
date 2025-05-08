"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Hero from "../components/Hero"
import ImageGallery from "../components/ImageGallery"
import VideoGallery from "../components/VideoGallery"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"


import video1 from '../assets/media/home/video/video1.mp4';
import video2 from '../assets/media/home/video/video2.mp4';

import pic1 from '../assets/media/home/pic/pic1.jpg';
import pic2 from '../assets/media/home/pic/pic2.jpg';
import pic3 from '../assets/media/home/pic/pic3.jpg';
import pic4 from '../assets/media/home/pic/pic4.jpg';
import pic5 from '../assets/media/home/pic/pic5.jpg';
import pic6 from '../assets/media/home/pic/pic6.jpg';

// Featured videos
const featuredVideos = [
  {
    thumbnail: "video1",
    poster: pic1, // Add a poster image if available
    videoUrl: video1,
    title: "Luxury Restaurant Promo",
    description: "Cinematic showcase of fine dining experience",
    duration: "2:30",
  },
  {
    thumbnail: "video2",
    poster: pic2, // Add a poster image if available
    videoUrl: video2,
    title: "Real Estate Showcase",
    description: "Modern property cinematography",
    duration: "3:15",
  },
  {
    thumbnail:  "video3",
    poster:  pic3, // Add a poster image if available
    videoUrl:  video1,
    title: "Sports Documentary",
    description: "Behind the scenes with athletes",
    duration: "4:45",
  },
]

// Featured work images
const featuredImages = [
  {
    src: pic1,
    alt: "Mountain landscape",
    title: "Alpine Heights",
    category: "Landscape",
    width: 1600,
    height: 1067,
  },
  {
    src: pic2,
    alt: "Portrait of woman",
    title: "Serene Portrait",
    category: "Portrait",
    width: 1600,
    height: 2400,
  },
  {
    src: pic3,
    alt: "Urban architecture",
    title: "Urban Geometry",
    category: "Architecture",
    width: 1600,
    height: 2000,
  },
  {
    src: pic4,
    alt: "Tropical beach",
    title: "Island Paradise",
    category: "Travel",
    width: 1600,
    height: 1067,
  },

  {
    src: pic5,
    alt: "Colorful street art",
    title: "Urban Canvas",
    category: "Street Art",
    width: 1600,
    height: 2400,
  },
  {
    src: pic6,
    alt: "Aerial mountain view",
    title: "Peak Perspective",
    category: "Aerial",
    width: 1600,
    height: 1067,
  },
]

// Services data
const filmServices = [
  { title: "Restaurant", description: "Cinematic food and ambiance showcases" },
  {
    title: "Real Estate",
    description: "Property tours and aerial cinematography",
  },
  { title: "Events", description: "Corporate and social event coverage" },
  { title: "Sports", description: "Dynamic sports videography and highlights" },
  { title: "Products", description: "Professional product demonstrations" },
  { title: "Brands", description: "Brand story and commercial production" },
  { title: "Short Film", description: "Narrative and documentary shorts" },
]

const photoServices = [
  { title: "Wedding", description: "Capturing your special moments" },
  { title: "Fashion", description: "Editorial and commercial fashion" },
  {
    title: "Real Estate",
    description: "Architectural and interior photography",
  },
  { title: "Restaurant", description: "Food and interior photography" },
  { title: "Cars", description: "Automotive photography" },
  { title: "Events", description: "Event documentation" },
  { title: "Sports", description: "Action and sports photography" },
  { title: "Couples", description: "Engagement and couple sessions" },
  { title: "Brands", description: "Brand and product photography" },
]

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

export default function HomePage() {
  // Refs for scroll-triggered animations
  const videosRef = useRef(null)
  const photosRef = useRef(null)
  const servicesRef = useRef(null)
  const ctaRef = useRef(null)

  // Check if sections are in view
  const videosInView = useInView(videosRef, { once: false, amount: 0.1 })
  const photosInView = useInView(photosRef, { once: false, amount: 0.1 })
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.2 })

  // Parallax effect for CTA section
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Scroll progress for horizontal lines
  const videoLineWidth = useTransform(
    useScroll({ target: videosRef, offset: ["start end", "end end"] }).scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  )

  const photoLineWidth = useTransform(
    useScroll({ target: photosRef, offset: ["start end", "end end"] }).scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  )

  const servicesLineWidth = useTransform(
    useScroll({ target: servicesRef, offset: ["start end", "end end"] }).scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  )

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      {/* Featured Videos */}
      <section className="py-20 px-6" ref={videosRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={videosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Latest Projects</h2>
            <div className="relative mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                style={{ width: videoLineWidth }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={videosInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <VideoGallery videos={featuredVideos} />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={videosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              to="/motion"
              className="inline-flex items-center py-4 px-8  bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-white/10 hover:border-white/20 group"
            >
              <span>View All Videos</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 bg-zinc-950" ref={photosRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={photosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Featured Photography</h2>
            <div className="relative mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                style={{ width: photoLineWidth }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={photosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <ImageGallery images={featuredImages} columns={3} />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={photosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              to="/stills"
              className="inline-flex items-center py-4 px-8 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-white/10 hover:border-white/20 group"
            >
              <span>View All Photography</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6" ref={servicesRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Services</h2>
            <div className="relative mt-4 h-px via-white/20 to-transparent mx-auto mb-6">
              <motion.div
                className="absolute top-0 left-0 h-full via-white to-transparent"
                style={{ width: servicesLineWidth }}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Film Services */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-2xl font-serif text-white mb-8">Film & Video</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filmServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:shadow-lg transition-shadow duration-300"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <h4 className="text-lg font-medium text-white mb-2">{service.title}</h4>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Photo Services */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-white mb-8">Photography</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photoServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:shadow-lg transition-shadow duration-300"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <h4 className="text-lg font-medium text-white mb-2">{service.title}</h4>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 px-6 from-zinc-900 to-black overflow-hidden" ref={ctaRef}>
        {/* Light effect with parallax */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-gradient-to-b from-white to-transparent blur-[100px] rounded-full opacity-30 pointer-events-none"
          style={{ y }}
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Ready to Collaborate?
          </motion.h2>

          <motion.p
            className="text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Let's create something beautiful together. Reach out to discuss your project or book a session.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center py-4 px-8 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-white/10 hover:border-black/20 hover:border-white/20 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
