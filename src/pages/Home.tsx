import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestProjects from "../components/LatestProjects";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <Navbar />  
      <Hero />
      <Brands />
      <LatestProjects />
      <Contact />
      <Footer />
     </div>
  );
}
