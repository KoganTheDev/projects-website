import React from 'react';
import '../styles/styles.css';

function Project({ name, images, description, repoLink }) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <div className="project-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${name} screenshot ${index + 1}`} />
        ))}
      </div>
      <p>{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
}

export default Project;