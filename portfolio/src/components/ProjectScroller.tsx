import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    name: 'BLib - Library Management System',
    video: 'https://github.com/KoganTheDev/BLib_MidTerm_Project',
    images: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60'
    ],
    description: 'BLib is a library management system, built with Java and JavaFX. It supports book borrowing, reservations, and user management, using SQL with MySQL for database management.',
    repoLink: 'https://github.com/KoganTheDev/BLib_MidTerm_Project',
    tags: ['Java', 'JavaFX', 'SQL', 'MySQL', 'OOP']
  },
  {
    name: 'Custom UNIX Shells',
    video: 'https://github.com/KoganTheDev/Custom-UNIX-Shells',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
    ],
    description: 'Custom UNIX Shells is a modular shell environment built in C on UNIX (Ubuntu) using fork(), exec(), and other Linux system calls, with specialized math, logic, and string shells, command history, and robust error handling.',
    repoLink: 'https://github.com/KoganTheDev/Custom-UNIX-Shells',
    tags: ['C', 'UNIX', 'Linux', 'System Programming', 'Shell Scripting']
  },
  {
    name: 'Gymbory Website',
    video: 'https://github.com/KoganTheDev/The-Gymbory-Website',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60'
    ],
    description: 'The Gymbory Website is an interactive, responsive platform showcasing seamless user experiences through HTML, CSS, and JavaScript. Highlights include intuitive UI design, smooth animations, and optimized performance.',
    repoLink: 'https://github.com/KoganTheDev/The-Gymbory-Website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX']
  },
  {
    name: 'Cloud Computing Project',
    video: 'https://github.com/KoganTheDev/cloud-computing-project',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60'
    ],
    description: 'A cloud computing project implementing scalable and efficient cloud-based solutions using modern cloud technologies and architectures.',
    repoLink: 'https://github.com/KoganTheDev/cloud-computing-project',
    tags: ['Cloud Computing', 'AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    name: 'Advanced Web Technologies',
    video: 'https://github.com/KoganTheDev/Advanced-Web-Technologies',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
    ],
    description: 'Advanced web technologies project showcasing modern web development practices, frameworks, and tools for building robust web applications.',
    repoLink: 'https://github.com/KoganTheDev/Advanced-Web-Technologies',
    tags: ['React', 'Node.js', 'TypeScript', 'REST API', 'WebSocket']
  },
  {
    name: 'TCP/IP Stack Implementation',
    video: 'https://github.com/KoganTheDev/PROJECT',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
    ],
    description: 'Implementation of a custom TCP/IP stack, demonstrating deep understanding of network protocols and low-level networking concepts.',
    repoLink: 'https://github.com/KoganTheDev/PROJECT',
    tags: ['C', 'Networking', 'TCP/IP', 'Socket Programming', 'Protocols']
  }
];

export const ProjectScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const currentScroll = window.scrollY;
      const footer = document.getElementById('contact');
      const isLastProject = currentIndex === projects.length - 1;
      const isFirstProject = currentIndex === 0;
      
      if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
        if (isFirstProject && e.deltaY < 0) {
          return;
        }
        
        if (isLastProject && e.deltaY > 0 && footer) {
          return;
        }
        
        e.preventDefault();
        
        if (isScrolling) return;
        setIsScrolling(true);
        
        if (e.deltaY > 0 && currentIndex < projects.length - 1) {
          nextSlide();
        } else if (e.deltaY < 0 && currentIndex > 0) {
          prevSlide();
        }
        
        setTimeout(() => setIsScrolling(false), 500);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, isScrolling]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  name={projects[currentIndex].name}
                  video={projects[currentIndex].video}
                  images={projects[currentIndex].images}
                  description={projects[currentIndex].description}
                  repoLink={projects[currentIndex].repoLink}
                  tags={projects[currentIndex].tags}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex md:flex-col gap-4 md:gap-6 mt-8 md:mt-0">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-pacific-cyan dark:bg-light-cyan'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: currentIndex === index ? 1.2 : 1,
                  y: currentIndex === index ? -2 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 