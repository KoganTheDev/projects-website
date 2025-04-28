import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 relative overflow-hidden" aria-label="Projects showcase">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
          >
            My Projects
          </motion.h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.5
                }}
                className="w-full"
              >
                <ProjectCard {...projects[currentIndex]} />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full text-primary dark:text-light-cyan hover:text-primary/80 dark:hover:text-light-cyan/80 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="flex gap-2" role="tablist" aria-label="Project navigation">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex
                        ? 'bg-primary dark:bg-light-cyan'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 dark:hover:bg-light-cyan/50'
                    }`}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full text-primary dark:text-light-cyan hover:text-primary/80 dark:hover:text-light-cyan/80 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 