import './Programs.css'
import { TbBuildingFactory } from "react-icons/tb";
import { PiWallBold } from "react-icons/pi";
import { IoIosBuild } from "react-icons/io";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// @ts-ignore
import ImageSlider from "./ImageSlider";

const Programs = () => {
  const [t] = useTranslation("global");
const [hovered, setHovered] = useState<"thermal" | "fireproof" | "scaffold" | null>(null);
const [active, setActive] = useState<"thermal" | "fireproof" | "scaffold" | null>(null);

const handleClick = (feature: "thermal" | "fireproof" | "scaffold") => {
  setActive(active === feature ? null : feature); // toggle na klik
};

const showOverlay = hovered || active; // overlay se prikazuje ako je hover ili active

  return (
    <div className="program">
      <div className="banner-container">

        {/* Tekst */}
        <div className="banner-text">
          <motion.p className="finals-note"></motion.p>

          <div className="banner-features">
            {/* TERMOIZOLACIJA */}
            <motion.div
              className="feature-box"
              onMouseEnter={() => setHovered("thermal")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick("thermal")}
            >
              <TbBuildingFactory className="feature-icon" />
              <p>{t("programs.features.thermal")}</p>
            </motion.div>

            {/* VATROSTALSTVO */}
            <motion.div
              className="feature-box"
              onMouseEnter={() => setHovered("fireproof")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick("fireproof")}
            >
              <PiWallBold className="feature-icon" />
              <p>{t("programs.features.fireproof")}</p>
            </motion.div>

            {/* SKELA */}
            <motion.div
              className="feature-box"
              onMouseEnter={() => setHovered("scaffold")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick("scaffold")}
            >
              <IoIosBuild className="feature-icon" />
              <p>{t("programs.features.scaffold")}</p>
            </motion.div>
          </div>
                    <p className="final-note">{t("programs.note")}</p>

        </div>

        {/* Slika + overlay */}
        <div className="banner-image">
          <div className="image-overlay-container">
            <ImageSlider />
            {showOverlay && (
              <div className="hover-overlay">
                {((hovered || active) === "thermal") && (
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
                {((hovered || active) === "fireproof") && (
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
                {((hovered || active) === "scaffold") && (
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
    </div>
  );
};

export default Programs;