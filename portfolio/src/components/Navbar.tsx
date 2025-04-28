import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  activeSection: string;
}

export const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [isRippling, setIsRippling] = useState(false);
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsRippling(true);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isRippling) {
      const timer = setTimeout(() => setIsRippling(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isRippling]);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              ref={themeButtonRef}
              onClick={handleThemeToggle}
              className="relative p-3 rounded-full text-gray-600 hover:text-pacific-cyan dark:text-gray-300 dark:hover:text-light-cyan transition-colors duration-300 border-2 border-gray-300 dark:border-gray-600 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              <AnimatePresence>
                {isRippling && (
                  <motion.div
                    className={`absolute w-4 h-4 rounded-full ${
                      isDarkMode ? 'bg-dark-federal' : 'bg-white'
                    }`}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 20, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      left: ripplePosition.x,
                      top: ripplePosition.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-dark-federal text-white hover:bg-dark-federal/90' 
                : 'text-gray-600 hover:text-pacific-cyan'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${
                isDarkMode ? 'bg-dark-federal/95' : 'bg-white/95'
              } backdrop-blur-md rounded-b-lg shadow-lg`}
            >
              <div className="py-4 space-y-4">
                {['about', 'projects', 'contact'].map((section) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    onClick={() => scrollToSection(section)}
                    className={`block text-lg font-medium transition-colors duration-300 ${
                      activeSection === section
                        ? 'text-pacific-cyan dark:text-light-cyan'
                        : isDarkMode 
                          ? 'text-white hover:text-light-cyan' 
                          : 'text-gray-600 hover:text-pacific-cyan'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.a>
                ))}
                <motion.button
                  ref={themeButtonRef}
                  onClick={handleThemeToggle}
                  className={`relative w-full p-3 rounded-full transition-colors duration-300 border-2 overflow-hidden flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-dark-federal text-white border-gray-600 hover:border-light-cyan'
                      : 'text-gray-600 border-gray-300 hover:text-pacific-cyan hover:border-pacific-cyan'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  <AnimatePresence>
                    {isRippling && (
                      <motion.div
                        className={`absolute w-4 h-4 rounded-full ${
                          isDarkMode ? 'bg-dark-federal' : 'bg-white'
                        }`}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 20, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          left: ripplePosition.x,
                          top: ripplePosition.y,
                          transform: 'translate(-50%, -50%)',
                        }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}; 