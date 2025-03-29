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
    AOS.init();
  }, []);

  const projects = [
    {
      name: 'BLib - Library Management System 📘',
      video: require('./assets/videos/BLib_project_video.mp4'), // Path to the video
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
      description: 'This is my second project.',
      repoLink: 'https://github.com/KoganTheDev/Custom-UNIX-Shells',
    },
    {
      name: 'Gymbory Website 💪',
      video: 'path/to/project2-video.mp4', // Path to the video
      images: ['path/to/image3.jpg', 'path/to/image4.jpg'], // Paths to images
      description: 'This is my second project.',
      repoLink: 'https://github.com/KoganTheDev/The-Gymbory-Website',
    },
  ];

  return (
    <div className="background-box">
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div data-aos="fade-up">
            <h1>Welcome to My Portfolio</h1>
          </div>
          <div id="about-me" className="about-me">
            <div className="about-me-image">
              <img
                src={require('./assets/images/my_LinkedIn_image.png')}
                alt="my LinkedIn profile"
                className="profile-image"
              />
            </div>
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
