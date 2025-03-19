import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <Navbar />  
      <Hero />
      <Projects />
     </div>
  );
}
