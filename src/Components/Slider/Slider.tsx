import "./Slider.css";
import Reveal from "../Reveal/Reveal";

type Image = {
  default: string;
};

const Slider = () => {
  const vatrostalniImages = Object.values(
    import.meta.glob("../../assets/Partneri/*.{png,jpg,jpeg,svg}", {
      eager: true,
    })
  ).map((image) => ({ src: (image as Image).default }));

  return (
    <Reveal className="slider">
      <div className="slide-track">
        {vatrostalniImages.map((image, index) => (
          <div className="logo-card" key={index}>
            <img src={image.src} alt={`slider-img-${index}`} />
          </div>
        ))}
      </div>
      <div className="slide-track">
        {vatrostalniImages.map((image, index) => (
          <div className="logo-card" key={index}>
            <img src={image.src} alt={`slider-img-${index}`} />
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default Slider;
