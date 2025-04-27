import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: Image[];
  columns?: number;
  gap?: number;
}

export default function ImageGallery({
  images,
  columns = 3,
  gap = 24,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Function to organize images into columns for masonry layout
  const getColumns = () => {
    const columnsArray: Image[][] = Array.from({ length: columns }, () => []);
    
    images.forEach((image, i) => {
      const columnIndex = i % columns;
      columnsArray[columnIndex].push(image);
    });
    
    return columnsArray;
  };

  const columnsArray = getColumns();

  return (
    <>
      <div className="w-full" style={{ gap: `${gap}px` }}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-${gap/4}`}>
          {columnsArray.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-col space-y-6">
              {column.map((image, imageIndex) => (
                <motion.div
                  key={`image-${columnIndex}-${imageIndex}`}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * (columnIndex * (images.length / columns) + imageIndex),
                    whileHover: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {image.title && (
                      <h3 className="text-white text-lg font-serif tracking-wide">{image.title}</h3>
                    )}
                    {image.category && (
                      <p className="text-white/70 text-sm">{image.category}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 bg-black/50 rounded-full p-2 text-white/70 hover:text-white transition-colors z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
              {(selectedImage.title || selectedImage.category) && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  {selectedImage.title && (
                    <h3 className="text-white text-lg font-serif tracking-wide">{selectedImage.title}</h3>
                  )}
                  {selectedImage.category && (
                    <p className="text-white/70 text-sm">{selectedImage.category}</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}