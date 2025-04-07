import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/styles.css';

// Import images
import BLibImage from '../assets/images/generic_project_images/blib.jpg';
import Unix1Image from '../assets/images/generic_project_images/unix.jpeg';
import GymboryImage from '../assets/images/generic_project_images/gymbory.jpg';

const CardScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartY = useRef(null);

  const projects = [
    {
      name: 'BLib - Library Management System 📘',
      image: BLibImage, // Imported image
    },
    {
      name: 'Custom UNIX Shells',
      image: Unix1Image, // Imported image
    },
    {
      name: 'Gymbory Website',
      image: GymboryImage, // Imported image
    },
  ];

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    scrollToCard(direction);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaY) > 50) scrollToCard(deltaY < 0 ? 1 : -1);
  };

  const scrollToCard = (direction) => {
    setCurrentIndex((prev) => {
      const next = prev + direction;
      if (next >= 0 && next < projects.length) return next;
      return prev;
    });
  };

  return (
    <div
      className="card-scroller"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="indicator-container">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="project-card"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h2>{projects[currentIndex].name}</h2>
          <img src={projects[currentIndex].image} alt={projects[currentIndex].name} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardScroller;
