"use client"


export default function Hero() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl mx-auto">
        {/* Image Container */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/me.png"
            alt="Photographer silhouette against dramatic sky"
            className="object-cover w-full h-full rounded-3xl object-center"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide">
              AMINE RIHANI
            </h1>
            <div className="mt-4 text-white font-serif text-3xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
              PHOTOGRAPHER &<br />
              FILMMAKER
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
