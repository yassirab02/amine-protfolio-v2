"use client";

import { useState, useEffect } from "react";
import {
  Camera,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  DoorClosed,
} from "lucide-react";

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    "ALL",
    "EVENT",
    "FOOD",
    "PLACE",
    "PRODUCT",
    "SPORT",
    "TRIP",
    "GRAPHIC MOTION",
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "FOOD",
      image: "/src/assets/1RqbvEVlP2dlrkA03BbeiAA.png",
      title: "Gourmet Seafood Dish",
    },
    {
      id: 2,
      category: "FOOD",
      image: "/src/assets/th.png",
      title: "Artisan Salmon Packaging",
    },
    {
      id: 3,
      category: "FOOD",
      image: "/src/assets/th2.png",
      title: "Craft Cocktail Creation",
    },
    {
      id: 4,
      category: "EVENT",
      image: "/src/assets/th.webp",
      title: "Dessert Presentation",
    },
    {
      id: 5,
      category: "EVENT",
      image: "/src/assets/my logo white.png",
      title: "Wedding Reception Setup",
    },
    {
      id: 6,
      category: "PLACE",
      image: "/src/assets/1RqbvEVlP2dlrkA03BbeiAA.png",
      title: "Coastal Restaurant View",
    },
    {
      id: 7,
      category: "PRODUCT",
      image: "/src/assets/The-State-of-the-Photography-Ind.png",
      title: "Luxury Watch Detail",
    },
    {
      id: 8,
      category: "SPORT",
      image: "/src/assets/rolex-emblem-png-logo-4.png",
      title: "Marathon Finish Line",
    },
    {
      id: 9,
      category: "TRIP",
      image: "/src/assets/ro3293oeef-roberto-cavalli-logo.png",
      title: "Mountain Landscape",
    },
    {
      id: 10,
      category: "GRAPHIC MOTION",
      image: "/src/assets/mercedes-benz-car-logo-png-brand.png",
      title: "Brand Animation Still",
    },
    {
      id: 11,
      category: "FOOD",
      image: "/src/assets/th.webp",
      title: "Farm-to-Table Ingredients",
    },
    {
      id: 12,
      category: "PLACE",
      image: "/src/assets/th2.png",
      title: "Urban Architecture",
    },
  ];
  const filteredItems =
    activeCategory === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openImageCarousel = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeImageCarousel = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const totalImages = filteredItems.length;
    if (direction === "prev") {
      setSelectedImage((selectedImage - 1 + totalImages) % totalImages);
    } else {
      setSelectedImage((selectedImage + 1) % totalImages);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "Escape") {
        closeImageCarousel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,120,0,0.1),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,120,0,0.05),transparent_30%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,0,0,1),rgba(20,20,20,1)_70%)]"></div>
      </div>
      {/* Main Content */}
      <main className="px-4 sm:px-6 py-4 pt-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title - Artistic */}
          <div className="relative mb-16 md:mb-24">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/10 rounded-full blur-xl -z-10"></div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin text-center tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-1500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-white">
                  REALISATIONS
                </span>
                <span className="absolute -bottom-4 left-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent transform -translate-x-1/2"></span>
              </span>
            </h1>
          </div>

          {/* Category Filter - Responsive */}
          <div
            className={`mb-12 md:mb-16 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              <div className="flex justify-start md:justify-center min-w-max md:flex-wrap md:min-w-0 gap-4 md:gap-8 px-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-2 py-1 text-xs sm:text-sm whitespace-nowrap transition-colors duration-300 hover:cursor-pointer ${
                      activeCategory === category
                        ? "text-orange-500 border-b border-orange-500"
                        : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openImageCarousel(index)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <div className="w-10 h-[1px] bg-orange-500 mb-3"></div>
                      <h3 className="text-white text-base sm:text-lg font-light tracking-wider mb-1">
                        {item.title}
                      </h3>
                      <p className="text-orange-500 text-xs tracking-widest">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="absolute top-0 right-0 w-full h-full bg-orange-500/20 rotate-45 transform origin-top-right translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Image Carousel Modal - Responsive */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.05),transparent_70%)]"></div>

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white/70 hover:text-orange-500 transition-colors p-2 border border-white/10 rounded-full backdrop-blur-sm bg-black/30"
              onClick={closeImageCarousel}
              aria-label="Close image viewer"
            >
              <DoorClosed size={20} />
            </button>

            {/* Image */}
            <div className="w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center p-4">
              <img
                src={filteredItems[selectedImage].image || "/placeholder.svg"}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain shadow-2xl shadow-orange-500/5"
              />
            </div>

            {/* Navigation Buttons - Responsive positioning */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-8 sm:space-x-0 sm:justify-between sm:left-6 sm:right-6 sm:bottom-1/2 sm:translate-y-1/2">
              <button
                className="p-2 sm:p-3 border border-white/10 rounded-full text-white/70 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm bg-black/30"
                onClick={() => navigateImage("prev")}
                title="Previous image"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="p-2 sm:p-3 border border-white/10 rounded-full text-white/70 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm bg-black/30"
                onClick={() => navigateImage("next")}
                title="Next image"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Image Caption - Responsive */}
            <div className="absolute bottom-4 sm:bottom-12 left-0 right-0 text-center">
              <div className="inline-block relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-2 sm:mb-4"></div>
                  <h3 className="text-white text-lg sm:text-2xl font-extralight tracking-wider mb-1 sm:mb-2 px-4">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-orange-500 text-xs sm:text-sm tracking-widest">
                    {filteredItems[selectedImage].category}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Counter - Responsive */}
            <div className="absolute bottom-4 right-4 sm:bottom-12 sm:right-12 text-white/40 text-xs sm:text-sm font-light">
              {selectedImage + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
