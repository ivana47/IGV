import './Programs.css'
import { TbBuildingFactory } from "react-icons/tb";
import { PiWallBold } from "react-icons/pi";
import { IoIosBuild } from "react-icons/io";
import { motion } from "framer-motion";
import video from '../../assets/video.mp4';
import { useTranslation } from "react-i18next";
// @ts-ignore
import ImageSlider from "./ImageSlider";


const Programs = () => {
    const [t] = useTranslation("global"); 
  
  return (
    <div className="program">
      <div className="banner-container">

        {/* Tekst */}
        <div className="banner-text">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="finals-note"
          >
          </motion.p>
   

          <div className="banner-features">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="feature-box"
            >
               <TbBuildingFactory className="feature-icon" />
               <p>{t("programs.features.thermal")}</p>
               </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="feature-box"
            >
              <PiWallBold className="feature-icon" /> 
              <p>{t("programs.features.fireproof")}</p>  
              </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="feature-box"
            >
             <IoIosBuild className="feature-icon" />
             <p>{t("programs.features.scaffold")}</p>
             </motion.div>
          </div>
          <p className="final-note">{t("programs.note")}</p>

<ImageSlider />


        </div>

            {/* Slika */}
            <div className="banner-image">
            {/* <p>
    <strong>Naša osnovna djelatnost</strong> je izvođenje termoizolacionih, vatrostalno-šamoterskih i skelarskih radova na industrijskim postrojenjima.
  </p> */}

<h2>{t("programs.thermalTitle")}</h2>
<p>{t("programs.thermalIntro")}</p>
<ul>
  <li>{t("programs.thermal.0")}</li>
  <li>{t("programs.thermal.1")}</li>
  <li>{t("programs.thermal.2")}</li>
  <li>{t("programs.thermal.3")}</li>
  <li>{t("programs.thermal.4")}</li>
</ul>

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

<h2>{t("programs.scaffoldTitle")}</h2>
<p>{t("programs.scaffoldIntro")}</p>
  {/* <p className="final-note">
    Sve radove izvodimo sa vašim ili našim repromaterijalom, bilo da se radi o sanaciji oštećenja ili izradi potpuno novih rješenja.
  </p> */}
        </div>
        
      </div>
    </div>
  );
};

export default Programs;