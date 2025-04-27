import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 pt-8 md:pt-24 pb-8 md:pb-12 mt-14 md:mt-0">
      <div className="relative w-full h-[75vh] md:h-[85vh] min-h-[400px] overflow-hidden rounded-2xl md:rounded-3xl mx-auto">
        {/* Image Container */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/me.png"
            alt="Photographer silhouette against dramatic sky"
            className="object-cover w-full h-full rounded-2xl md:rounded-3xl object-center"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h1 
              className="text-white font-serif text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              AMINE RIHANI
            </motion.h1>
            <motion.div 
              className="mt-2 md:mt-4 text-white font-serif text-2xl md:text-5xl lg:text-6xl leading-snug md:leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              PHOTOGRAPHER &<br className="hidden md:block" /> FILMMAKER
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}