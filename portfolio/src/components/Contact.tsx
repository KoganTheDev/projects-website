import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin size={32} />,
    href: 'https://www.linkedin.com/in/yuval-kogan-software-engineer/',
    label: 'LinkedIn',
    className: 'text-federal-blue hover:text-pacific-cyan dark:text-light-cyan dark:hover:text-pacific-cyan'
  },
  {
    icon: <Github size={32} />,
    href: 'https://github.com/KoganTheDev',
    label: 'GitHub',
    className: 'text-federal-blue hover:text-pacific-cyan dark:text-light-cyan dark:hover:text-pacific-cyan'
  },
  {
    icon: <Mail size={32} />,
    href: 'mailto:yuvalkogan2003@gmail.com',
    label: 'Email',
    className: 'text-federal-blue hover:text-pacific-cyan dark:text-light-cyan dark:hover:text-pacific-cyan'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[20vh] flex items-center justify-center bg-white dark:bg-dark-federal">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan">
          Contact Me
        </h2>
        <div className="text-center">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`${link.className} transition-all duration-300 hover:scale-110 transform`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 