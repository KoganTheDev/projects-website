import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  activeSection: string;
}

export const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-federal/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            onClick={() => scrollToSection('home')}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
            whileHover={{ scale: 1.05 }}
          >
            Yuval Kogan
          </motion.a>

          <div className="flex items-center gap-8">
            {['about', 'projects', 'contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={() => scrollToSection(section)}
                className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-pacific-cyan dark:text-light-cyan'
                    : 'text-gray-600 hover:text-pacific-cyan dark:text-gray-300 dark:hover:text-light-cyan'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}

            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-full text-gray-600 hover:text-pacific-cyan dark:text-gray-300 dark:hover:text-light-cyan transition-colors duration-300 border-2 border-gray-300 dark:border-gray-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 