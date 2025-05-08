import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Urban Landscapes",
      category: "Photography",
      image: "https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/stills",
      description: "Exploration of city architecture and urban spaces through a minimalist lens."
    },
    {
      id: 2,
      title: "Portrait Series",
      category: "Photography",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/stills",
      description: "Intimate portraits capturing personality and emotion in controlled lighting."
    },
    {
      id: 3,
      title: "Natural Wonders",
      category: "Film",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/motion",
      description: "Cinematic exploration of pristine landscapes and natural phenomena."
    },
    {
      id: 4,
      title: "Brand Narratives",
      category: "Commercial",
      image: "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/motion",
      description: "Visual storytelling for brands that connects products with authentic narratives."
    },
    {
      id: 5,
      title: "Abstract Forms",
      category: "Fine Art",
      image: "https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/stills",
      description: "Experimental photography exploring form, texture, and color relationships."
    },
    {
      id: 6,
      title: "Cultural Documentation",
      category: "Documentary",
      image: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/motion",
      description: "Documentation of cultural practices and traditions from around the world."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <PageHeader 
        title="Portfolio" 
        subtitle="A curated collection of my professional work across photography and film making."
        backgroundImage="https://images.pexels.com/photos/2931915/pexels-photo-2931915.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link to={item.link} className="block aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white/70 text-sm mb-2">{item.category}</div>
                    <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                    <div className="flex items-center text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                      <span>View Project</span>
                      <ArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Projects */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-4">Client Projects</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-white/70 max-w-3xl mx-auto">
              A selection of commercial and client work showcasing my professional services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {[
              {
                title: "Luxury Brand Campaign",
                client: "Prestigious Fashion House",
                year: "2023",
                description: "A photographic campaign for a luxury fashion brand's spring collection, featuring editorial and product photography with a minimalist aesthetic.",
                image: "https://images.pexels.com/photos/7137416/pexels-photo-7137416.jpeg?auto=compress&cs=tinysrgb&w=1600",
                services: ["Art Direction", "Photography", "Post-Production"]
              },
              {
                title: "Travel Documentary Series",
                client: "Global Streaming Platform",
                year: "2022",
                description: "A six-part documentary series exploring remote destinations and their cultural heritage, featuring breathtaking cinematography and intimate storytelling.",
                image: "https://images.pexels.com/photos/9892778/pexels-photo-9892778.jpeg?auto=compress&cs=tinysrgb&w=1600",
                services: ["Cinematography", "Direction", "Editing"]
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="flex flex-col lg:flex-row gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="text-white/60 text-sm mb-2">{project.client} • {project.year}</div>
                  <h3 className="text-2xl font-serif text-white mb-4">{project.title}</h3>
                  <p className="text-white/70 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="px-3 py-1 bg-white/5 rounded-full text-white/80 text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-t from-black to-zinc-950">
        <div className="container mx-auto text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Create Together?</h2>
            <p className="text-white/70 mb-10">
              Let's collaborate on your next photography or film project. I'm available for bookings, consultations, and creative partnerships.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center py-4 px-8 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 border border-white/10 hover:border-white/20 group"
            >
              <span>CONTACT ME</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}