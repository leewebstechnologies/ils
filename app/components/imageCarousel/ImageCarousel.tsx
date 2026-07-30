"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "./imageCarousel.css";

const carouselData = [
  { src: "/images/gradeschool/carousel2.jpeg" },
  { src: "/images/gradeschool/carousel3.jpeg" },
   { src: "/images/gradeschool/carousel1.jpeg" },
  { src: "/images/gradeschool/carousel4.jpeg" },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-viewport">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {carouselData.map((item, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === current ? 'active' : ''}`}
            >
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="carousel-image"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
        ❮
      </button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
        ❯
      </button>

      <div className="carousel-dots">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
