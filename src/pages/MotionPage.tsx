import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import VideoGallery from '../components/VideoGallery';

// Video projects
const videos = [
  {
    thumbnail: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual videos in production
    title: "Urban Exploration",
    description: "A visual journey through the streets and architecture of New York City.",
    duration: "3:45"
  },
  {
    thumbnail: "https://images.pexels.com/photos/1671028/pexels-photo-1671028.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual videos in production
    title: "Natural Wonders",
    description: "Capturing the beauty and majesty of national parks and wilderness areas.",
    duration: "5:12"
  },
  {
    thumbnail: "https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual videos in production
    title: "Portrait Series",
    description: "Cinematic interviews with artists and creators about their work and process.",
    duration: "8:30"
  },
  {
    thumbnail: "https://images.pexels.com/photos/7354/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual videos in production
    title: "Commercial: Tech Startup",
    description: "Promotional video for an innovative tech company showcasing their workspace and culture.",
    duration: "2:15"
  },
  {
    thumbnail: "https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual videos in production
    title: "Fashion in Motion",
    description: "Dynamic fashion shoot featuring seasonal collections and emerging designers.",
    duration: "4:20"
  },
  {
    thumbnail: "https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual videos in production
    title: "Aerial Perspectives",
    description: "Drone footage showcasing stunning landscapes from above.",
    duration: "6:10"
  }
];

export default function MotionPage() {
  return (
    <div className="min-h-screen bg-black">
      <PageHeader 
        title="Motion" 
        subtitle="Cinematic storytelling through film, cinematography, and visual narratives."
        backgroundImage="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Video Gallery */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Featured Projects</h2>
            <p className="text-white/70 max-w-3xl">
              A selection of my cinematography work, ranging from commercial projects to personal documentaries and artistic explorations.
            </p>
          </motion.div>
          
          <VideoGallery videos={videos} />
        </div>
      </section>
      
      {/* Filmmaking Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                number: "01",
                title: "Concept & Planning",
                description: "Every project begins with a creative concept and detailed planning process. This foundation ensures the final work aligns with the creative vision."
              },
              {
                number: "02",
                title: "Production",
                description: "Using state-of-the-art equipment and techniques to capture the highest quality footage with attention to composition, lighting, and movement."
              },
              {
                number: "03",
                title: "Post-Production",
                description: "Editing, color grading, sound design, and special effects are meticulously crafted to create the final cinematic experience."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="text-5xl font-serif text-white/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipment */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Equipment & Gear</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Professional tools used to create high-quality cinematic content.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Cameras",
                items: ["RED Komodo 6K", "Sony A7S III", "Canon C70", "DJI Ronin 4D"]
              },
              {
                category: "Lenses",
                items: ["Canon Cinema Prime Set", "Sony G Master Series", "Sigma Art Series", "Anamorphic Lenses"]
              },
              {
                category: "Support & Movement",
                items: ["DJI Ronin RS 3 Pro", "Sachtler Flowtech Tripod", "Dana Dolly", "DJI Mavic 3 Pro"]
              },
              {
                category: "Lighting & Audio",
                items: ["Aputure 600d Pro", "Godox VL Series", "RØDE NTG5", "Sound Devices MixPre-6 II"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-white/5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-white mb-4 pb-2 border-b border-white/10">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/70 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}