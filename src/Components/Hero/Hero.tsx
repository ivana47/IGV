import "./Hero.css";
import { FaArrowDown } from "react-icons/fa";
import { m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
import { fadeUp, stagger } from "../Reveal/animations";

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
    <div className="hero container" id="hero">
      <m.div
        variants={stagger(0.18, 0.15)}
        initial="hidden"
        animate="show"
        className="hero-text"
      >
        <m.h1 variants={fadeUp}>{t("hero.title")}</m.h1>
        <m.p variants={fadeUp}>{t("hero.description")}</m.p>
        <m.p variants={fadeUp}>
          {t("hero.description1")}
          <br />
          {t("hero.description2")}
        </m.p>
        <m.div variants={fadeUp} className="hero-actions">
          <button className="btn" onClick={handleScroll}>
            {t("hero.button")}
            <FaArrowDown className="arrowIcon" />
          </button>
        </m.div>
      </m.div>
      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
      </div>
    </div>
  );
};

export default Hero;
