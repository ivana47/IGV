import "./Slider.css";

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
    <div className="slider">
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
    </div>
  );
};

export default Slider;
