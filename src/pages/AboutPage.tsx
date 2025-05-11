import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Camera, Award, Film, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <PageHeader 
        title="About" 
        subtitle="Learn more about my journey, approach, and philosophy as a visual storyteller."
        backgroundImage="https://images.pexels.com/photos/6958519/pexels-photo-6958519.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Bio Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="../assets/me2.png"
                alt="Amine Rihani - Photographer and Filmmaker"
                className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[3/4]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif text-white mb-6">The Story Behind the Lens</h2>
              
              <div className="space-y-6 text-white/80">
                <p>
                  I'm Amine Rihani, a professional photographer and filmmaker with over 5 years of experience in visual storytelling. My journey began with a simple point-and-shoot camera but quickly evolved into a deep passion for capturing moments that tell compelling stories.
                </p>
                
                <p>
                  Born in Morocco and now based between New York and Paris, my multicultural background influences my aesthetic and approach. I specialize in portrait, architectural, and landscape photography, as well as documentary and commercial filmmaking.
                </p>
                
                <p>
                  My work has been featured in publications such as National Geographic, Vogue, and Architectural Digest. I've had the privilege of collaborating with renowned brands and exhibiting my personal projects in galleries worldwide.
                </p>
                
                <p>
                  When I'm not behind the camera, I enjoy teaching photography workshops, exploring remote landscapes, and mentoring emerging visual artists through my foundation.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">Education & Training</h3>
                <ul className="space-y-2 text-white/70">
                  <li>MFA in Photography - School of Visual Arts, New York</li>
                  <li>Cinematography Program - American Film Institute</li>
                  <li>Documentary Filmmaking - National Film and Television School, UK</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <section id="philosophy" className="py-20 px-6 bg-zinc-950">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-4">My Philosophy</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-white/70 max-w-3xl mx-auto">
              The principles and values that guide my creative process and artistic vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Camera className="w-6 h-6 text-white/80" />,
                title: "Authentic Storytelling",
                description: "I believe that the most powerful images are those that tell authentic stories. My approach focuses on capturing genuine moments and emotions that resonate with viewers on a deeper level."
              },
              {
                icon: <Compass className="w-6 h-6 text-white/80" />,
                title: "Technical Excellence",
                description: "While creativity drives my vision, technical precision brings it to life. I'm dedicated to mastering the craft of visual storytelling through constant learning and refinement of techniques."
              },
              {
                icon: <Film className="w-6 h-6 text-white/80" />,
                title: "Collaborative Vision",
                description: "I view every project as a collaboration between myself, my subjects, and my clients. The best work emerges from open communication and shared creative goals."
              },
              {
                icon: <Award className="w-6 h-6 text-white/80" />,
                title: "Ethical Approach",
                description: "I'm committed to ethical practices in all aspects of my work, from respectful representation of subjects to sustainable production methods and honest business practices."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements */}
       {/* <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-4">Achievements</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-white/70 max-w-3xl mx-auto">
              Recognition and milestones from my career as a visual artist.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                year: "2023",
                title: "World Photography Organization Award",
                description: "First place in the Portrait category for the series 'Silent Conversations'."
              },
              {
                year: "2022",
                title: "Solo Exhibition: 'Liminal Spaces'",
                description: "Museum of Contemporary Photography, Chicago - A collection exploring architectural thresholds."
              },
              {
                year: "2021",
                title: "Cinematic Excellence Award",
                description: "International Documentary Film Festival for 'Beyond Borders' documentary series."
              },
              {
                year: "2020",
                title: "National Geographic Feature",
                description: "Cover story and photo essay 'Urban Wilderness' exploring city ecosystems."
              },
              {
                year: "2019",
                title: "Photography Book Publication",
                description: "'Visual Rhythms' - A collection of street photography from global metropolises."
              },
              {
                year: "2018",
                title: "Artist Residency",
                description: "Three-month residency at the International Center for Photography, culminating in exhibition."
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-white/50 text-sm mb-2">{achievement.year}</div>
                <h3 className="text-lg font-medium text-white mb-2">{achievement.title}</h3>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Clients & Publications */}
      {/*<section className="py-20 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-4">Clients & Publications</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <div className="text-white font-serif text-lg">LOGO</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}