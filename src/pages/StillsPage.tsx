import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ImageGallery from '../components/ImageGallery';
import { useState } from 'react';

// Categories for filtering
const categories = [
  "All",
  "Portrait",
  "Landscape",
  "Architecture",
  "Street",
  "Abstract",
  "Wildlife"
];

// Photo gallery images
const allImages = [
  // Portraits
  {
    src: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Portrait of woman",
    title: "Elegant Gaze",
    category: "Portrait",
    width: 1600,
    height: 2400,
  },
  {
    src: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Portrait of man",
    title: "Urban Portrait",
    category: "Portrait",
    width: 1600,
    height: 2133,
  },
  {
    src: "https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Studio portrait",
    title: "Ambient Light",
    category: "Portrait",
    width: 1600,
    height: 2133,
  },
  
  // Landscapes
  {
    src: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mountain landscape",
    title: "Mountain Majesty",
    category: "Landscape",
    width: 1600,
    height: 1068,
  },
  {
    src: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Ocean sunset",
    title: "Oceanic Twilight",
    category: "Landscape",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Forest scene",
    title: "Verdant Path",
    category: "Landscape",
    width: 1600,
    height: 1200,
  },
  
  // Architecture
  {
    src: "https://images.pexels.com/photos/1769392/pexels-photo-1769392.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Modern building",
    title: "Steel & Glass",
    category: "Architecture",
    width: 1600,
    height: 2400,
  },
  {
    src: "https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Historic architecture",
    title: "Classical Forms",
    category: "Architecture",
    width: 1600,
    height: 1066,
  },
  {
    src: "https://images.pexels.com/photos/1722184/pexels-photo-1722184.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Interior design",
    title: "Spatial Harmony",
    category: "Architecture",
    width: 1600,
    height: 2134,
  },
  
  // Street
  {
    src: "https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Urban street scene",
    title: "City Rhythm",
    category: "Street",
    width: 1600,
    height: 1066,
  },
  {
    src: "https://images.pexels.com/photos/2389474/pexels-photo-2389474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Night street scene",
    title: "Nocturnal Flow",
    category: "Street",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Street vendor",
    title: "Urban Merchant",
    category: "Street",
    width: 1600,
    height: 1066,
  },
  
  // Abstract
  {
    src: "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Abstract patterns",
    title: "Visual Rhythm",
    category: "Abstract",
    width: 1600,
    height: 2399,
  },
  {
    src: "https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Light patterns",
    title: "Luminous Forms",
    category: "Abstract",
    width: 1600,
    height: 1066,
  },
  {
    src: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Textural abstract",
    title: "Material Expression",
    category: "Abstract",
    width: 1600,
    height: 1068,
  },
  
  // Wildlife
  {
    src: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Lion portrait",
    title: "King's Gaze",
    category: "Wildlife",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.pexels.com/photos/2543236/pexels-photo-2543236.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Bird in flight",
    title: "Wings of Freedom",
    category: "Wildlife",
    width: 1600,
    height: 1066,
  },
  {
    src: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Underwater marine life",
    title: "Aquatic Symphony",
    category: "Wildlife",
    width: 1600,
    height: 1066,
  },
];

export default function StillsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter images based on selected category
  const filteredImages = activeCategory === "All" 
    ? allImages 
    : allImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      <PageHeader 
        title="Photography" 
        subtitle="A collection of still images capturing moments, emotions, and stories."
        backgroundImage="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Category Filter */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                  activeCategory === category 
                    ? "bg-white/10 text-white" 
                    : "text-white/60 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ImageGallery images={filteredImages} columns={3} />
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}