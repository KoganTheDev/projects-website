import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/20 to-pacific-cyan/20 dark:from-dark-federal/20 dark:to-dark-pacific/20 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
          >
            Yuval Kogan
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Software Engineer
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Crafting elegant solutions to complex problems through clean code and innovative thinking.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-federal-blue to-pacific-cyan text-white font-medium hover:opacity-90 transition-opacity duration-300 text-lg md:text-xl"
          >
            Learn More
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-pacific-cyan dark:border-light-cyan rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3 bg-pacific-cyan dark:bg-light-cyan rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}; 