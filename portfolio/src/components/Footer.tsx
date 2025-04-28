import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      href: "mailto:Yuval-Kogan@outlook.com",
      label: "Email"
    },
    {
      icon: <Github className="w-5 h-5 md:w-6 md:h-6" />,
      href: "https://github.com/KoganTheDev",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
      href: "https://linkedin.com/in/yuval-kogan",
      label: "LinkedIn"
    }
  ];

  return (
    <footer id="contact" className="relative py-12 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-light-cyan/20 to-transparent dark:from-dark-federal/20 -z-10" />
      
      <div className="container">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
          >
            Get in Touch
          </motion.h2>
          
          <div className="flex justify-center gap-6 md:gap-8 mb-10">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 rounded-full bg-white dark:bg-dark-federal hover:bg-light-cyan/20 dark:hover:bg-dark-pacific/20 transition-colors duration-300 group relative shadow-md hover:shadow-lg"
              >
                {link.icon}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark-bg text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm md:text-base text-main-text/60 dark:text-dark-text/60"
          >
            © {new Date().getFullYear()} Yuval Kogan. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}; 