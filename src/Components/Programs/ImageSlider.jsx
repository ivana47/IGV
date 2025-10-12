import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './ImageSlider.css';
import hala1 from '../../assets/hala1.jpg';
import hala3 from '../../assets/hala3.jpg';
import hala4 from '../../assets/hala4.jpg';
import hala7 from '../../assets/hala7.jpg';

const images = [hala1, hala3, hala4, hala7];




const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // rotira svake 3 sekunde
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((img, index) => {
        let position = "nextSlide";
        if (index === current) position = "activeSlide";
        if (index === current - 1 || (current === 0 && index === images.length - 1)) position = "lastSlide";

        return (
          <motion.img
            key={index}
            src={img}
            alt={`slide ${index}`}
            className={`slide ${position}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
