import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ImageGallery from '../components/ImageGallery';
import { useState } from 'react';

import pic1 from "../assets/media/photography/restaurant/c1.jpg"
import pic2 from "../assets/media/photography/driving/d1.jpg"
import pic3 from "../assets/media/photography/rooms/r1.jpg"
import pic4 from "../assets/media/photography/weddings/w1.jpg"
import pic5 from "../assets/media/photography/restaurant/c9.jpg"
import pic6 from "../assets/media/photography/weddings/w4.jpg"
import pic7 from "../assets/media/photography/rooms/r3.jpg"
import pic8 from "../assets/media/photography/driving/d4.jpg"
import pic9 from "../assets/media/photography/weddings/w3.jpg"

// Categories for filtering
const categories = [
  "All",
  "Portrait",
  "Landscape",
  "Architecture",
  "Street",
  "Restaurants",
  "Weddings"
];

// Photo gallery images
const allImages = [
  // Portraits
  {
    src: pic1,
    alt: "Portrait of woman",
    title: "Elegant Gaze",
    category: "Portrait",
    width: 1600,
    height: 2400,
  },
  {
    src: pic2,
    alt: "Portrait of man",
    title: "Urban Portrait",
    category: "Portrait",
    width: 1600,
    height: 2133,
  },
  {
    src: pic3,
    alt: "Studio portrait",
    title: "Ambient Light",
    category: "Portrait",
    width: 1600,
    height: 2133,
  },
  
  // Landscapes
  {
    src: pic4,
    alt: "Mountain landscape",
    title: "Mountain Majesty",
    category: "Landscape",
    width: 1600,
    height: 1068,
  },
  {
    src: pic5,
    alt: "Ocean sunset",
    title: "Oceanic Twilight",
    category: "Landscape",
    width: 1600,
    height: 1067,
  },
  {
    src: pic5,
    alt: "Forest scene",
    title: "Verdant Path",
    category: "Landscape",
    width: 1600,
    height: 1200,
  },
  
  // Architecture
  {
    src: pic6,
    alt: "Modern building",
    title: "Steel & Glass",
    category: "Architecture",
    width: 1600,
    height: 2400,
  },
  {
    src: pic7,
    alt: "Historic architecture",
    title: "Classical Forms",
    category: "Architecture",
    width: 1600,
    height: 1066,
  },
  {
    src: pic8,
    alt: "Interior design",
    title: "Spatial Harmony",
    category: "Architecture",
    width: 1600,
    height: 2134,
  },
  
  // Street
  {
    src: pic9,
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
    src: pic5,
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