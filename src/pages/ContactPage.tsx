import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <PageHeader 
        title="Contact" 
        subtitle="Get in touch to discuss your project or book a session."
        backgroundImage="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-serif text-white mb-6">Let's Connect</h2>
                <p className="text-white/70 max-w-lg">
                  Whether you're interested in booking a session, discussing a collaboration, or simply have a question, 
                  I'd love to hear from you. Fill out the form or use the contact details below.
                </p>
              </div>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Based In</h3>
                    <p className="text-white/70">
                    Marrakesh, Morocco
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-white/70">
                      <a href="mailto:contact@aminerihani.com" className="hover:text-white transition-colors">
                      rihani.amine111@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-white/70">
                      <a href="tel:+12125551234" className="hover:text-white transition-colors">
                      +212706224953
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <Linkedin className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                    <p className="text-white/70">
                      <a href="https://www.linkedin.com/in/amine-rihani-66487a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/aminerihani
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div id="booking" className="p-6 bg-zinc-900/60 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">Booking Information</h3>
                <p className="text-white/70 mb-4">
                  For booking inquiries, please include the following details:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-2">
                  <li>Type of shoot (portrait, event, commercial, etc.)</li>
                  <li>Desired date and time</li>
                  <li>Location preferences</li>
                  <li>Project budget range</li>
                  <li>Specific creative requirements</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif text-white mb-6 text-center">Send a Message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}