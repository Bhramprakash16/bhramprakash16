// Carousel.js
import React from 'react';
import './Carousel.css';

const images = [
  process.env.PUBLIC_URL + '/3d.jpg',
  process.env.PUBLIC_URL + '/1.png',
  process.env.PUBLIC_URL + '/2.jpg',
  process.env.PUBLIC_URL + '/3d.jpg',
  process.env.PUBLIC_URL + '/1.png',
  process.env.PUBLIC_URL + '/3.jpg',
  process.env.PUBLIC_URL + '/1.png',
  process.env.PUBLIC_URL + '/2.jpg',
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {images.map((src, index) => (
          <img src={src} alt={`Slide ${index + 1}`} key={index} />
        ))}
        {images.map((src, index) => (
          <img src={src} alt={`Slide ${index + images.length + 1}`} key={index + images.length} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
