import "./Hero.css";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

const Hero = () => {
  const [t] = useTranslation("global"); 

  const handleScroll = () => {
    scroller.scrollTo("program", {
      smooth: true,
      offset: -200,
      duration: 700,
    });
  };

  return (
    <div className="hero container">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hero-text"
      >
        <h1>{t("hero.title")}</h1>
        <p>
          {t("hero.description")} <br /> <br /> <br />
          {t("hero.description1")} <br />
          {t("hero.description2")}
        </p>
        <button className="btn" onClick={handleScroll}>
          {t("hero.button")}
          <FaArrowDown className="arrowIcon" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
