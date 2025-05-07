import { useState, useEffect, useCallback, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectScroller } from './components/ProjectScroller';
import { Contact } from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = useMemo(() => ['home', 'about', 'projects', 'contact'], []);

  const handleScroll = useCallback(() => {
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
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar activeSection={activeSection} />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <ProjectScroller />
        <Contact />
      </main>
    </div>
  );
};

export default App;
