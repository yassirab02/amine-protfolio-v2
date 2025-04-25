export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-3xl mx-auto">
      {/* Image Container */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/me.png"
          alt="Photographer silhouette against dramatic sky"
          className="object-cover w-full h-full"
          style={{ objectPosition: "center center" }}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight tracking-wide">
            AMINE RIHANI
            <br />
            <span className="block mt-4 text-4xl md:text-6xl lg:text-7xl">PHOTOGRAPHER &</span>
            <span className="block mt-4 text-4xl md:text-6xl lg:text-7xl">FILMMAKER</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
