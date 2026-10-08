import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence, useInView } from "framer-motion";
import './ImageSlider.css';
import hala1 from '../../assets/Termoizolacija/slika13.jpg';
import hala3 from '../../assets/Vatrostalstvo/slika15.jpg';
import hala4 from '../../assets/Termoizolacija/slika7.jpg';
import hala7 from '../../assets/Vatrostalstvo/slika12.jpg';

const images = [hala1, hala3, hala4, hala7];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { margin: "100px 0px" });

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3700);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="slider-container" ref={containerRef}>
      <AnimatePresence initial={false}>
        <m.img
          key={current}
          src={images[current]}
          alt={`slide ${current}`}
          className="slide"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
