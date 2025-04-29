export interface Project {
  name: string;
  video: string;
  images: string[];
  description: string;
  repoLink: string;
  tags: string[];
}

export const projects: Project[] = [
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