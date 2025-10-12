import React from "react";
import "./Slider.css";

type Image ={
  default: string;
}

const Slider = () => {
  const vatrostalniImages = Object.values(
    import.meta.glob('../../assets/Partneri/*.{png,jpg,jpeg,svg}', { eager: true })
  ).map((image) => ({ src: (image as Image).default }));

  return (
    <div className="slider">
      <div className="slide-track">
        {vatrostalniImages.map((image, index) => (
          <img key={index} src={image.src} alt={`slider-img-${index}`} />
        ))}
      </div>
      <div className="slide-track">
        {vatrostalniImages.map((image, index) => (
          <img key={index} src={image.src} alt={`slider-img-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
