import "./About.css";
import about_img from "../../assets/personLogo.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  const stats = [
    { value: "30+", label: t("about.stats.years") },
    { value: "7+", label: t("about.stats.industries") },
    { value: "30+", label: t("about.stats.partners") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="about"
    >
      <div className="about-left">
          <div className="about-bubble">{t("about.bubble")}</div>
        <div className="image-container">
          <img src={about_img} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h3 className="eyebrow">{t("about.subtitle")}</h3>
        <h2>{t("about.title")}</h2>
        <p>
          {t("about.paragraph1")}
          <div className="space"></div>
          <ul>
            <li>{t("about.list.0")}</li>
            <li>{t("about.list.1")}</li>
            <li>{t("about.list.2")}</li>
            <li>{t("about.list.3")}</li>
            <li>{t("about.list.4")}</li>
            <li>{t("about.list.5")}</li>
          </ul>
          {t("about.paragraph2")}
        </p>
        <div className="about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
