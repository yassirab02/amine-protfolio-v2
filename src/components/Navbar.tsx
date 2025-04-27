import { Link, useLocation } from "react-router-dom";
import { Camera } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav
      className={`w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-white/90 via-white/90 to-white/90 dark:from-zinc-900/90 dark:via-black/90 dark:to-zinc-900/90 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]"
          : "bg-gradient-to-r from-white/30 via-white/30 to-white/30 dark:from-zinc-900/30 dark:via-black/30 dark:to-zinc-900/30 backdrop-blur-sm"
      }`}
    >
      {/* Left navigation */}
      <div className="hidden lg:flex space-x-6">
        <NavLink to="/stills">STILLS</NavLink>
        <NavLink to="/motion">MOTION</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>

      {/* Logo - desktop centered */}
      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block group">
        <span className="text-2xl font-serif text-black dark:text-white tracking-wider relative overflow-hidden inline-block px-2">
          <span className="relative z-10 group-hover:text-zinc-800 dark:group-hover:text-zinc-100 transition-colors duration-300">Amine</span>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black dark:via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span className="absolute -inset-1 bg-black/5 dark:bg-white/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </span>
      </Link>

      {/* Mobile logo - left aligned */}
      <Link to="/" className="text-2xl font-serif text-black dark:text-white tracking-wider lg:hidden">
        Amine
      </Link>

      {/* Mobile menu - right aligned */}
      <div className="lg:hidden ml-auto flex items-center space-x-4">
        <MobileMenu />
      </div>

      {/* Right navigation */}
      <div className="hidden lg:flex items-center space-x-6 ml-auto">
        <NavLink to="https://www.instagram.com/amine._.rihani?igsh=OHpyM2Zldmd0ZDYy&utm_source=qr" target="_blank" rel="noopener noreferrer">INSTAGRAM</NavLink>
        <NavLink to="/portfolio" icon={<Camera className="w-4 h-4 mr-1.5" />}>
          PORTFOLIO
        </NavLink>
        <NavLink to="/contact">
          CONTACT
        </NavLink>
      </div>
    </nav>
  );
}

// Custom NavLink component with enhanced hover effects and active state
function NavLink({ to, children, icon, target, rel }: { to: string; children: React.ReactNode; icon?: React.ReactNode; target?: string; rel?: string }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link
      to={to}
      target={target}
      rel={rel}
      className={`group relative px-3 py-2 text-sm font-light tracking-wider transition-all duration-500 ${
        isActive 
          ? "text-black dark:text-white font-medium" 
          : "text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
      }`}
    >
      {/* Decorative elements */}
      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black/30 dark:bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></span>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black/30 dark:bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></span>

      {/* Main content */}
      <span className="relative z-10 flex items-center">
        {icon && (
          <span className={`mr-1.5 transform transition-transform duration-500 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
            {icon}
          </span>
        )}
        <span className="relative overflow-hidden">
          {isActive ? (
            <span>{children}</span>
          ) : (
            <>
              <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
                {children}
              </span>
              <span className="absolute top-0 left-0 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {children}
              </span>
            </>
          )}
        </span>
      </span>

      {/* Hover and active effects */}
      <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black dark:via-white to-transparent transition-transform duration-700 ease-out ${
        isActive 
          ? "scale-x-100" 
          : "scale-x-0 group-hover:scale-x-100"
      }`}></span>
      
      {/* Active indicator dot */}
      {isActive && (
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
      )}
      
      <span className={`absolute -inset-1 bg-gradient-to-r from-black/0 via-black/5 to-black/0 dark:from-white/0 dark:via-white/5 dark:to-white/0 rounded-lg transition-all duration-500 ease-out ${
        isActive 
          ? "opacity-100 scale-y-100" 
          : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
      }`}></span>
      
      <span className={`absolute inset-0 rounded-lg border transition-all duration-500 ${
        isActive 
          ? "border-black/10 dark:border-white/10 scale-100 opacity-100" 
          : "border-black/0 dark:border-white/0 scale-90 opacity-0 group-hover:border-black/10 dark:group-hover:border-white/10 group-hover:scale-100 group-hover:opacity-100"
      }`}></span>
    </Link>
  );
}