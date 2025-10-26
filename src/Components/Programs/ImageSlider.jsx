import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './ImageSlider.css';
import hala1 from '../../assets/Termoizolacija/slika13.jpg';
import hala3 from '../../assets/Vatrostalstvo/slika15.jpg';
import hala4 from '../../assets/Termoizolacija/slika7.jpg';
import hala7 from '../../assets/Vatrostalstvo/slika12.jpg';

const images = [hala1, hala3, hala4, hala7];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`slide ${current}`}
          className="slide"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 8, scale: 0.8 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
