import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {isSubmitted ? (
        <motion.div 
          className="bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-white text-2xl font-serif mb-2">Message Sent!</h3>
          <p className="text-white/70 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button 
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white/80 text-sm">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900/60 text-white border border-white/10 focus:border-white/30 rounded-lg px-4 py-3 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white/80 text-sm">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900/60 text-white border border-white/10 focus:border-white/30 rounded-lg px-4 py-3 outline-none transition-colors"
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-white/80 text-sm">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900/60 text-white border border-white/10 focus:border-white/30 rounded-lg px-4 py-3 outline-none transition-colors"
            >
              <option value="" disabled>Select a subject</option>
              <option value="booking">Photography Booking</option>
              <option value="film">Film Project</option>
              <option value="collaboration">Collaboration</option>
              <option value="pricing">Pricing Information</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-white/80 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-zinc-900/60 text-white border border-white/10 focus:border-white/30 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-zinc-800 to-black hover:from-zinc-700 hover:to-zinc-900 text-white font-light tracking-wide py-4 px-6 rounded-lg flex items-center justify-center group transition-all duration-300 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="inline-flex items-center">
                <span>SEND MESSAGE</span>
                <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}