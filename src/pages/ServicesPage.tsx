import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Film } from 'lucide-react';

// Services data
const filmServices = [
  {
    title: "Restaurant",
    description: "Cinematic food and ambiance showcases",
    image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Menu cinematography", "Ambiance capture", "Chef interviews", "Behind-the-scenes"]
  },
  {
    title: "Real Estate",
    description: "Property tours and aerial cinematography",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Aerial footage", "Virtual tours", "Property highlights", "Neighborhood features"]
  },
  {
    title: "Events",
    description: "Corporate and social event coverage",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Live coverage", "Highlight reels", "Speaker sessions", "Event atmosphere"]
  },
  {
    title: "Sports",
    description: "Dynamic sports videography and highlights",
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Game highlights", "Training sessions", "Player profiles", "Team features"]
  },
  {
    title: "Products",
    description: "Professional product demonstrations",
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Product showcases", "Feature demonstrations", "Lifestyle integration", "Technical details"]
  },
  {
    title: "Brands",
    description: "Brand story and commercial production",
    image: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Brand storytelling", "Commercial spots", "Corporate culture", "Vision statements"]
  },
  {
    title: "Short Film",
    description: "Narrative and documentary shorts",
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Story development", "Production", "Post-production", "Festival submission"]
  }
];

const photoServices = [
  {
    title: "Wedding",
    description: "Capturing your special moments",
    image: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Ceremony coverage", "Couple portraits", "Family photos", "Reception moments"]
  },
  {
    title: "Fashion",
    description: "Editorial and commercial fashion",
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Editorial shoots", "Lookbooks", "Campaign photography", "Behind-the-scenes"]
  },
  {
    title: "Real Estate",
    description: "Architectural and interior photography",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Interior shots", "Exterior architecture", "Aerial views", "Virtual staging"]
  },
  {
    title: "Restaurant",
    description: "Food and interior photography",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Food styling", "Interior ambiance", "Menu items", "Chef portraits"]
  },
  {
    title: "Cars",
    description: "Automotive photography",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Studio shots", "Location shoots", "Detail photography", "Action shots"]
  },
  {
    title: "Events",
    description: "Event documentation",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Corporate events", "Social gatherings", "Conference coverage", "Award ceremonies"]
  },
  {
    title: "Sports",
    description: "Action and sports photography",
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Action shots", "Team photos", "Sports events", "Athletic portraits"]
  },
  {
    title: "Couples",
    description: "Engagement and couple sessions",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Engagement shoots", "Anniversary sessions", "Location portraits", "Lifestyle shots"]
  },
  {
    title: "Brands",
    description: "Brand and product photography",
    image: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    features: ["Product photography", "Brand lifestyle", "Corporate headshots", "Social media content"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <PageHeader 
        title="Services" 
        subtitle="Professional photography and videography services for all your creative needs."
        backgroundImage="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Film & Video Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Film className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-serif text-white">Film & Video Services</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/60 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Photography Services */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="container mx-auto">
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Camera className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-serif text-white">Photography Services</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/60 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/70 mb-10">
              Let's discuss your vision and create something extraordinary together. Contact us for a personalized quote.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center py-4 px-8 bg-white text-black rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}