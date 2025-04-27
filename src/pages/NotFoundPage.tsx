import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-serif text-white mb-6">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Page Not Found</h2>
          <p className="text-white/70 max-w-md mx-auto mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/"
            className="inline-flex items-center py-3 px-6 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}