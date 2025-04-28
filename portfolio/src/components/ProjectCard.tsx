import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  video: string;
  images: string[];
  description: string;
  repoLink: string;
  tags: string[];
}

export const ProjectCard = ({
  name,
  video,
  images,
  description,
  repoLink,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-federal rounded-xl overflow-hidden shadow-xl w-full h-auto md:h-[700px] mx-auto relative group"
      role="article"
      aria-label={`Project: ${name}`}
    >
      {/* Image container with gradient overlay */}
      <div className="h-[300px] md:h-[400px] relative overflow-hidden">
        <motion.img
          src={images[0]}
          alt={`Screenshot of ${name} project`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col h-auto md:h-[300px]">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan">
          {name}
        </h3>
        
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Project technologies">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary dark:text-light-cyan rounded-full text-sm md:text-base font-medium"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-auto">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-primary dark:text-light-cyan hover:text-primary/80 dark:hover:text-light-cyan/80 transition-colors duration-300 text-base md:text-lg group"
            aria-label={`View source code for ${name} on GitHub`}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
            Source Code
          </a>
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-primary dark:text-light-cyan hover:text-primary/80 dark:hover:text-light-cyan/80 transition-colors duration-300 text-base md:text-lg group"
            aria-label={`View ${name} project demo`}
          >
            View Project
            <ExternalLink className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}; 