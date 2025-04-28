import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectScroller } from './components/ProjectScroller';
import { Contact } from './components/Contact';
import { Loading } from './components/Loading';

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-federal transition-colors duration-300">
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={toggleTheme} 
        activeSection={activeSection} 
      />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <ProjectScroller />
        <Contact />
      </main>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      {isLoading ? (
        <Loading />
      ) : (
        <AppContent />
      )}
    </ThemeProvider>
  );
};

export default App;
