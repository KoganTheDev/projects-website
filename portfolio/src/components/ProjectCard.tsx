import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

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
      className="bg-black rounded-xl overflow-hidden shadow-xl w-full h-auto md:h-[700px] mx-auto relative group transition-colors duration-500 border-2 border-light-cyan"
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
      
      <div className="p-6 md:p-8 flex flex-col h-auto md:h-[300px] transition-colors duration-500">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan transition-colors duration-500">
          {name}
        </h3>
        
        <p className="text-base md:text-lg text-gray-300 mb-6 flex-grow transition-colors duration-500">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Project technologies">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary dark:text-light-cyan rounded text-sm md:text-base font-medium transition-colors duration-500"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-start mt-auto">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black border-[3px] border-light-cyan text-light-cyan hover:bg-light-cyan/10 transition-colors duration-500 shadow-md hover:shadow-lg text-base md:text-lg"
            aria-label={`View source code for ${name} on GitHub`}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}; 