import "./Programs.css";
import { TbBuildingFactory } from "react-icons/tb";
import { PiWallBold } from "react-icons/pi";
import { IoIosBuild } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useState, type ReactNode } from "react";
// @ts-ignore
import ImageSlider from "./ImageSlider";

type Feature = "thermal" | "fireproof" | "scaffold";

const Programs = () => {
  const [t] = useTranslation("global");
  const [hovered, setHovered] = useState<Feature | null>(null);
  const [active, setActive] = useState<Feature | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClick = (feature: Feature) => {
    const next = active === feature ? null : feature; // toggle na klik
    setActive(next);

    // Na mobilnom (stacked layout) tekst i slika nisu jedno pored drugog,
    // pa nakon klika skrolamo do slike da korisnik odmah vidi overlay.
    if (next && window.matchMedia("(max-width: 1120px)").matches) {
      imageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showOverlay = hovered || active; // overlay se prikazuje ako je hover ili active

  const features: { key: Feature; icon: ReactNode; label: string }[] = [
    {
      key: "thermal",
      icon: <TbBuildingFactory className="feature-icon" />,
      label: t("programs.features.thermal"),
    },
    {
      key: "fireproof",
      icon: <PiWallBold className="feature-icon" />,
      label: t("programs.features.fireproof"),
    },
    {
      key: "scaffold",
      icon: <IoIosBuild className="feature-icon" />,
      label: t("programs.features.scaffold"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.9 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="program"
      id="program"
    >
      <div className="banner-container">
        {/* Tekst */}
        <div className="banner-text">
          <div className="banner-features">
            {features.map((feature, i) => (
              <motion.div
                key={feature.key}
                className={`feature-box ${active === feature.key ? "active" : ""}`}
                onMouseEnter={() => setHovered(feature.key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(feature.key)}
              >
                <span className="feature-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="feature-icon-wrap">{feature.icon}</span>
                <p>{feature.label}</p>
                <span className="feature-arrow">
                  <FaArrowRight />
                </span>
              </motion.div>
            ))}
          </div>
          <br />
          <p className="final-note">{t("programs.note")}</p>
        </div>

        {/* Slika + overlay */}
        <div className="banner-image" ref={imageRef}>
          <div className="image-overlay-container">
            <ImageSlider />
            {showOverlay && (
              <div className="hover-overlay">
                {(hovered || active) === "thermal" && (
                  <div className="overlay-content">
                    <h2>{t("programs.thermalTitle")}</h2>
                    <p>{t("programs.thermalIntro")}</p>
                    <ul>
                      <li>{t("programs.thermal.0")}</li>
                      <li>{t("programs.thermal.1")}</li>
                      <li>{t("programs.thermal.2")}</li>
                      <li>{t("programs.thermal.3")}</li>
                      <li>{t("programs.thermal.4")}</li>
                    </ul>
                  </div>
                )}
                {(hovered || active) === "fireproof" && (
                  <div className="overlay-content">
                    <h2>{t("programs.fireproofTitle")}</h2>
                    <p>{t("programs.fireproofIntro")}</p>
                    <ul>
                      <li>{t("programs.fireproof.0")}</li>
                      <li>{t("programs.fireproof.1")}</li>
                      <li>{t("programs.fireproof.2")}</li>
                      <li>{t("programs.fireproof.3")}</li>
                      <li>{t("programs.fireproof.4")}</li>
                      <li>{t("programs.fireproof.5")}</li>
                      <li>{t("programs.fireproof.6")}</li>
                    </ul>
                  </div>
                )}
                {(hovered || active) === "scaffold" && (
                  <div className="overlay-content">
                    <h2>{t("programs.scaffoldTitle")}</h2>
                    <p>{t("programs.scaffoldIntro")}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Programs;
