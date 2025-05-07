import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Animation variants for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-light-cyan/20 to-pacific-cyan/20 -z-10" 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
          >
            Yuval Kogan
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8"
          >
            Software Engineer
          </motion.p>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Crafting elegant solutions to complex problems through clean code and innovative thinking.
          </motion.p>
          
          <motion.button
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-federal-blue to-pacific-cyan text-white font-medium hover:opacity-90 transition-opacity duration-300 text-lg md:text-xl"
            aria-label="Learn more about me"
          >
            Learn More
            <ArrowDown className="w-6 h-6" aria-hidden="true" />
          </motion.button>

          {/* Enhanced Scroll indicator */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 1 }}
            className="mt-8 md:mt-16 flex justify-center"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Outer pulsing circle */}
              <motion.div
                className="absolute inset-0 border-2 border-pacific-cyan rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Inner circle with moving oval */}
              <div className="w-12 h-12 border-2 border-pacific-cyan rounded-full flex items-center justify-center">
                <div className="relative w-2 h-6">
                  {/* Moving oval */}
                  <motion.div
                    className="absolute inset-0 border border-pacific-cyan rounded-full"
                    animate={{
                      scaleY: [1, 1.5, 1],
                      y: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Line */}
                  <motion.div
                    className="absolute inset-0 bg-pacific-cyan rounded-full"
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 