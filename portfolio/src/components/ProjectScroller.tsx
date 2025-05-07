import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    name: 'TCP/IP Stack Implementation',
    image: '/images/tcp_ip.jpg',
    description: 'Implementation of a custom TCP/IP stack, demonstrating deep understanding of network protocols and low-level networking concepts.',
    repoLink: 'https://github.com/KoganTheDev/PROJECT',
    tags: ['C', 'Networking', 'TCP/IP', 'Socket Programming', 'Protocols']
  },
  {
    name: 'Advanced Web Technologies',
    image: '/images/web_project.jpg',
    description: 'Advanced web technologies project showcasing modern web development practices, frameworks, and tools for building robust web applications.',
    repoLink: 'https://github.com/KoganTheDev/Advanced-Web-Technologies',
    tags: ['React', 'Node.js', 'TypeScript', 'REST API', 'WebSocket']
  },
  {
    name: 'Cloud Computing Project',
    image: '/images/cloud_project.jpg',
    description: 'A cloud computing project implementing scalable and efficient cloud-based solutions using modern cloud technologies and architectures.',
    repoLink: 'https://github.com/KoganTheDev/cloud-computing-project',
    tags: ['Cloud Computing', 'AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    name: 'BLib - Library Management System',
    image: '/images/BLib.jpg',
    description: 'BLib is a library management system designed to streamline library operations for Braude College. It simplifies book inventory management, user subscriptions, and services like book borrowing, returning, extensions, and reservations.',
    repoLink: 'https://github.com/KoganTheDev/BLib_MidTerm_Project',
    tags: ['Java', 'SQL', 'OOP', 'MySQL', 'JavaFX']
  },
  {
    name: 'Custom UNIX Shells',
    image: '/images/unix_shell.jpg',
    description: 'Custom UNIX Shells is a modular shell environment built in C on UNIX (Ubuntu) using fork(), exec(), and other Linux system calls, with specialized math, logic, and string shells, command history, and robust error handling.',
    repoLink: 'https://github.com/KoganTheDev/Custom-UNIX-Shells',
    tags: ['C', 'UNIX', 'Linux', 'System Programming', 'Shell Scripting']
  },
  {
    name: 'Gymbory Website',
    image: '/images/gymbory.jpg',
    description: 'The Gymbory Website is an interactive, responsive platform showcasing seamless user experiences through HTML, CSS, and JavaScript. Highlights include intuitive UI design, smooth animations, and optimized performance.',
    repoLink: 'https://github.com/KoganTheDev/The-Gymbory-Website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX']
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
    <section id="projects" className="py-20 relative overflow-hidden" aria-label="Projects showcase">
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
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
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

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="px-4 py-2 rounded-full bg-white dark:bg-dark-federal border-2 border-primary dark:border-light-cyan text-primary dark:text-light-cyan hover:bg-primary/10 dark:hover:bg-light-cyan/10 transition-colors duration-500 shadow-md hover:shadow-lg"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2" role="tablist" aria-label="Project navigation">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-500 ${
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
                className="px-4 py-2 rounded-full bg-white dark:bg-dark-federal border-2 border-primary dark:border-light-cyan text-primary dark:text-light-cyan hover:bg-primary/10 dark:hover:bg-light-cyan/10 transition-colors duration-500 shadow-md hover:shadow-lg"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};