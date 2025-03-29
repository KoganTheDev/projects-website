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
      name: 'Project 1',
      video: 'path/to/project1-video.mp4', // Path to the video
      images: ['path/to/image1.jpg', 'path/to/image2.jpg'], // Paths to images
      description: 'This is my first project.',
      repoLink: 'https://github.com/yourusername/project1',
    },
    {
      name: 'Project 2',
      video: 'path/to/project2-video.mp4', // Path to the video
      images: ['path/to/image3.jpg', 'path/to/image4.jpg'], // Paths to images
      description: 'This is my second project.',
      repoLink: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <div className="background-box">
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <div data-aos="fade-up">
            <h1>Welcome to My Portfolio</h1>
          </div>
          <div className="about-me">
            <div className="about-me-image">
              <img src={require('./assets/my_LinkedIn_image.png')} alt="my LinkedIn profile" className="profile-image" />
            </div>
            <div className="about-me-text">
              <p>
                Passionate Software Engineering student with a strong foundation in 
                <strong> C, C++, Java, and Python.</strong> I enjoy solving 
                <strong> complex problems</strong>, building efficient solutions, and <strong>continuously learning 
                new technologies.</strong>
                When I'm not coding, I love exploring new tech trends, collaborating on innovative projects, 
                and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </header>
        <Footer />
      </div>
    </div>
  );
}

export default App;
