import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  activeSection: string;
}

export const Navbar = ({ isDarkMode, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
            whileHover={{ scale: 1.05 }}
          >
            Yuval Kogan
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'projects', 'contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={() => scrollToSection(section)}
                className="text-base md:text-lg font-medium transition-colors duration-300 text-gray-300 hover:text-light-cyan"
                whileHover={{ scale: 1.05 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-light-cyan hover:text-pacific-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {['about', 'projects', 'contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={() => scrollToSection(section)}
                className="block py-2 text-base font-medium transition-colors duration-300 text-gray-300 hover:text-light-cyan"
                whileHover={{ scale: 1.05 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}; 