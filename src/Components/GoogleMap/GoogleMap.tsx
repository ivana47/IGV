import "./GoogleMap.css";
import { FaLocationDot } from "react-icons/fa6";
import Reveal from "../Reveal/Reveal";
import { useTranslation } from "react-i18next";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=IGV+Izolater+d.o.o.+Tuzla";

const GoogleMap = () => {
  const [t] = useTranslation("global");

  return (
    <Reveal className="map-section">
      <div className="map-card">
        <div className="map-info">
          <span className="eyebrow">{t("contact.mapEyebrow")}</span>
          <h3>{t("contact.companyName")}</h3>
          <p>
            <FaLocationDot className="map-pin" />
            {t("contact.address1")}, {t("contact.address2")} {t("contact.address3")}
          </p>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn dark-btn"
          >
            {t("contact.getDirections")}
          </a>
        </div>
        <iframe
          loading="lazy"
          title={t("contact.mapTitle")}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.2713696035835!2d18.689519776223456!3d44.53007587107395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475eada03983e3b9%3A0xca896e67d32a17d7!2sIgv%20Izolater%20d.o.o.!5e0!3m2!1shr!2sba!4v1740932361742!5m2!1shr!2sba"
          className="map-frame"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Reveal>
  );
};

export default GoogleMap;
