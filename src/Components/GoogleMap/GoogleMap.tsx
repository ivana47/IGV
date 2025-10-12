
const GoogleMap = () => {
  return (
    <div>
      <iframe
        loading="eager"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.2713696035835!2d18.689519776223456!3d44.53007587107395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475eada03983e3b9%3A0xca896e67d32a17d7!2sIgv%20Izolater%20d.o.o.!5e0!3m2!1shr!2sba!4v1740932361742!5m2!1shr!2sba"
        width="100%"
        height="250"
        style={{ border: "0" }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
