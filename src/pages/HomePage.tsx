import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import VideoGallery from "../components/VideoGallery";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Featured videos
const featuredVideos = [
  {
    thumbnail:
      "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Luxury Restaurant Promo",
    description: "Cinematic showcase of fine dining experience",
    duration: "2:30",
  },
  {
    thumbnail:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Real Estate Showcase",
    description: "Modern property cinematography",
    duration: "3:15",
  },
  {
    thumbnail:
      "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sports Documentary",
    description: "Behind the scenes with athletes",
    duration: "4:45",
  },
];

// Featured work images
const featuredImages = [
  {
    src: "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mountain landscape",
    title: "Alpine Heights",
    category: "Landscape",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.pexels.com/photos/2253916/pexels-photo-2253916.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Portrait of woman",
    title: "Serene Portrait",
    category: "Portrait",
    width: 1600,
    height: 2400,
  },
  {
    src: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Urban architecture",
    title: "Urban Geometry",
    category: "Architecture",
    width: 1600,
    height: 2000,
  },
  {
    src: "https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Tropical beach",
    title: "Island Paradise",
    category: "Travel",
    width: 1600,
    height: 1067,
  },
  
  {
    src: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Colorful street art",
    title: "Urban Canvas",
    category: "Street Art",
    width: 1600,
    height: 2400,
  },
  {
    src: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Aerial mountain view",
    title: "Peak Perspective",
    category: "Aerial",
    width: 1600,
    height: 1067,
  },

];

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
];

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
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Hero />

      {/* Featured Videos */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white tracking-wide">
              Latest Projects
            </h2>
            <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent mx-auto"></div>
          </motion.div>

          <VideoGallery videos={featuredVideos} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/motion"
              className="inline-flex items-center py-4 px-8 bg-black/10 hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15 text-black dark:text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 group"
            >
              <span>View All Videos</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white tracking-wide">
              Featured Photography
            </h2>
            <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent mx-auto"></div>
          </motion.div>

          <ImageGallery images={featuredImages} columns={3} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/stills"
              className="inline-flex items-center py-4 px-8 bg-black/10 hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15 text-black dark:text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 group"
            >
              <span>View All Photography</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white tracking-wide">
              Services
            </h2>
            <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Film Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-black dark:text-white mb-8">
                Film & Video
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filmServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-black/5 dark:border-white/5"
                  >
                    <h4 className="text-lg font-medium text-black dark:text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Photo Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-serif text-black dark:text-white mb-8">
                Photography
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photoServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-black/5 dark:border-white/5"
                  >
                    <h4 className="text-lg font-medium text-black dark:text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-black dark:text-white tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Collaborate?
          </motion.h2>

          <motion.p
            className="text-black/80 dark:text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's create something beautiful together. Reach out to discuss your
            project or book a session.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center py-4 px-8 bg-black/10 hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15 text-black dark:text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
