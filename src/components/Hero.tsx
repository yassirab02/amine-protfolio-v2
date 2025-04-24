export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden rounded-3xl mx-auto my-4">
      {/* Image Container */}
      <div className="absolute inset-0 grid">
        <img
          src="/src/assets/me.png"
          alt="Photographer silhouette against dramatic sky"
          className="object-cover w-full h-full col-start-1 row-start-1"
          style={{ objectPosition: "center top" }} // Direct CSS control
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/30 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-gray-900 dark:text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight tracking-wide">
            AMINE RIHANI
            <br />
            <span className="block mt-2">PHOTOGRAPHER &</span>
            <span className="block mt-2">FILMMAKER</span>
          </h1>
        </div>
      </div>
    </div>
  )
}