import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';
import './styles/styles.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  const projects = [
    {
      name: 'BLib - Library Management System 📘',
      video: './assets/videos/BLib_project_video.mp4',
      images: [require('./assets/images/BLib_images/BLib1.png'), require('./assets/images/BLib_images/BLib2.png'),
        require('./assets/images/BLib_images/BLib3.png'), require('./assets/images/BLib_images/BLib4.png')], // Paths to images
      description: 'BLib is a library management system, built with Java and JavaFX. It supports ' +
    'book borrowing, reservations, and user management, using SQL with MySQL for database management.',
      repoLink: 'https://github.com/KoganTheDev/BLib_MidTerm_Project',
    },
    {
      name: 'Custom UNIX Shells 🐧',
      video: 'path/to/project2-video.mp4', // Path to the video
      images: ['path/to/image3.jpg', 'path/to/image4.jpg'], // Paths to images
      description: 'Custom UNIX Shells is a modular shell environment built in C on UNIX (Ubuntu) using fork(), exec(), and other Linux system calls, with specialized math, logic, and string shells, command history, and robust error handling.',
      repoLink: 'https://github.com/KoganTheDev/Custom-UNIX-Shells',
    },
    {
      name: 'Gymbory Website 💪',
      video: 'path/to/project2-video.mp4', // Path to the video
      images: [require('./assets/images/Gymbory_images/Gymbory1.png'), require('./assets/images/Gymbory_images/Gymbory2.png'),
        require('./assets/images/Gymbory_images/Gymbory3.png'), require('./assets/images/Gymbory_images/Gymbory4.png')], // Paths to images
      description: 'The Gymbory Website is an interactive, responsive platform showcasing seamless user experiences through HTML, CSS, and JavaScript. Highlights include intuitive UI design, smooth animations, and optimized performance.',
      repoLink: 'https://github.com/KoganTheDev/The-Gymbory-Website',
    },
  ];

  return (
    <div className="background-box">
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div data-aos="zoom-in">
            <h1>Welcome to My Portfolio</h1>
          </div>
          <div id="about-me" className="about-me">
            <div className="about-me-text">
              <p>
                Passionate Software Engineering student with a strong foundation in
                <strong> C, C++, Java, and Python.</strong> I enjoy solving
                <strong> complex problems</strong>, building efficient solutions, and <strong>continuously learning
                new technologies.</strong> When I'm not coding, I love exploring new tech trends, collaborating on
                innovative projects, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          <div id="projects" className="projects">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </header>
        <Footer id="contact" />
      </div>
    </div>
  );
}

export default App;
