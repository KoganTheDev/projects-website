import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/styles.css';

function Project({ name, images, description, repoLink, video }) {
  const settings = {
    dots: true, // Show navigation dots
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: false, // Disable autoplay for the carousel
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
  };

  // Custom Next Arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#000', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }

  // Custom Previous Arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#000', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="project">
      <h2>{name}</h2>
      <div className="project-carousel">
        <Slider {...settings}>
          {/* Video as the first slide */}
          <div>
            <video
              src={video}
              controls
              autoPlay
              muted
              loop
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
          {/* Images as subsequent slides */}
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${name} screenshot ${index + 1}`}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <p>{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <button className="button">View on GitHub</button>
      </a>
    </div>
  );
}

export default Project;