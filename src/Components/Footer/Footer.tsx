import './Footer.css'
import logo from '../../assets/logo10.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion';


const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="footer"
    >
      <div className="footer-inner">
        <div className="footer-logo">
          <Link to='/'>
            <img src={logo} alt="IGV Izolater logo" className="logo" />
          </Link>
          <p>{t("footer.companyName")}</p>
          <p className="footer-location"><MdLocationOn className="footer-icon" />{t("footer.location")}</p>
          <p className="footer-tagline">{t("hero.description1")}</p>
        </div>

        <div className="footer-contact">
          <h4>{t("footer.contactTitle")}</h4>
          <p><MdEmail className="footer-icon" /><a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a></p>
          <p><BsFillTelephoneFill className="footer-icon" /><a href={`tel:${t("contact.phone").replace(/\s+/g, "")}`}>{t("contact.phone")}</a></p>
        </div>

        <div className="footer-credits">
          <h4>{t("footer.creditsTitle")}</h4>
          <p>&copy; {new Date().getFullYear()} IGV Izolater d.o.o. {t("footer.rights")}</p>
          <p>{t("footer.webDesign")} I.P.</p>
        </div>
      </div>
    </motion.footer>

  )
}

export default Footer
