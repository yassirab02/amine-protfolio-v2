import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    src: "https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Wildlife photo",
    title: "Wild Essence",
    category: "Wildlife",
    width: 1600,
    height: 1068,
  },
  {
    src: "https://images.pexels.com/photos/13066803/pexels-photo-13066803.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Abstract art",
    title: "Chromatic Flow",
    category: "Abstract",
    width: 1600,
    height: 2133,
  },
  {
    src: "https://images.pexels.com/photos/1559183/pexels-photo-1559183.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Street photography",
    title: "Urban Life",
    category: "Street",
    width: 1600,
    height: 1068,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Work */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Featured Work</h2>
            <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          </motion.div>
          
          <ImageGallery images={featuredImages} columns={3} />
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-white/90 hover:text-white font-light tracking-wide group"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="py-24 bg-zinc-950 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-96 lg:h-full overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Photographer at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="lg:pl-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-6">About Me</h2>
              <div className="w-16 h-px bg-gradient-to-r from-white to-transparent mb-8"></div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                I'm Amine Rihani, a photographer and filmmaker specializing in capturing authentic moments and crafting visual stories. My work is driven by a passion for composition, light, and the perfect frame.
              </p>
              
              <p className="text-white/80 mb-8 leading-relaxed">
                With over a decade of experience in visual storytelling, I bring a unique perspective to every project. Whether it's portrait, landscape, or commercial work, I approach each shoot with dedication to artistic excellence and technical precision.
              </p>
              
              <Link 
                to="/about" 
                className="inline-flex items-center py-3 px-6 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 group"
              >
                <span>Read More</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Services</h2>
            <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Photography",
                description: "High-quality photography services for portraits, events, landscapes, and commercial work."
              },
              {
                title: "Cinematography",
                description: "Film production services including concept development, shooting, and post-production."
              },
              {
                title: "Photo Editing",
                description: "Professional retouching and color grading to enhance and perfect your images."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Collaborate?
          </motion.h2>
          
          <motion.p 
            className="text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's create something beautiful together. Reach out to discuss your project or book a session.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center py-4 px-8 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 font-light tracking-wide border border-white/10 hover:border-white/20 group"
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