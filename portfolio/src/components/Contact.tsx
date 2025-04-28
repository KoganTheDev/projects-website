import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin size={32} />,
    href: 'https://www.linkedin.com/in/yuval-kogan-software-engineer/',
    label: 'LinkedIn',
    className: 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
  },
  {
    icon: <Github size={32} />,
    href: 'https://github.com/KoganTheDev',
    label: 'GitHub',
    className: 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
  },
  {
    icon: <Mail size={32} />,
    href: 'mailto:yuvalkogan2003@gmail.com',
    label: 'Email',
    className: 'text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-federal">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Contact Me</h2>
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`${link.className} transition-colors`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Email:</span> yuvalkogan2003@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Location:</span> Israel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 