import './Footer.css'
import logo from '../../assets/logo10.png'
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdLocationOn, MdKeyboardArrowUp, MdChevronRight } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Reveal from '../Reveal/Reveal';


const Footer = () => {
  const [t] = useTranslation("global");

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, { smooth: true, offset: -250, duration: 500 });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t("navbar.home"), section: 'hero' },
    { label: t("navbar.about"), section: 'about' },
    { label: t("navbar.services"), section: 'program' },
    { label: t("navbar.contact"), section: 'contact' },
  ];

  const services = [
    t("programs.features.thermal"),
    t("programs.features.fireproof"),
    t("programs.features.scaffold"),
  ];

  return (
    <footer className="footer">
      <Reveal className="footer-inner">
        <div className="footer-brand">
          <Link to='/' onClick={scrollToTop}>
            <img src={logo} alt="IGV Izolater logo" className="logo" />
          </Link>
          <p className="footer-company">{t("footer.companyName")}</p>
          <p className="footer-tagline">{t("hero.description1")}</p>
        </div>

        <div className="footer-col">
          <h4>{t("footer.navTitle")}</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.section}>
                <button type="button" onClick={() => scrollToSection(link.section)}>
                  <MdChevronRight className="footer-chevron" />{link.label}
                </button>
              </li>
            ))}
            <li>
              <Link to="/images">
                <MdChevronRight className="footer-chevron" />{t("navbar.gallery")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.servicesTitle")}</h4>
          <ul className="footer-links">
            {services.map((service) => (
              <li key={service}>
                <button type="button" onClick={() => scrollToSection('program')}>
                  <MdChevronRight className="footer-chevron" />{service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.contactTitle")}</h4>
          <ul className="footer-contact">
            <li>
              <span className="footer-icon-badge"><MdLocationOn /></span>
              <span>{t("contact.address1")}<br />{t("contact.address2")} {t("contact.address3")}</span>
            </li>
            <li>
              <span className="footer-icon-badge"><MdEmail /></span>
              <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
            </li>
            <li>
              <span className="footer-icon-badge"><BsFillTelephoneFill /></span>
              <span className="footer-phones">
                <a href={`tel:${t("contact.phone").replace(/\s+/g, "")}`}>{t("contact.phone")}</a>
                <a href={`tel:${t("contact.phoneManger").replace(/\s+/g, "")}`}>{t("contact.phoneManger")}</a>
              </span>
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} IGV Izolater d.o.o. {t("footer.rights")}</p>
          <button type="button" className="footer-top-btn" onClick={scrollToTop} aria-label={t("footer.backToTop")}>
            {t("footer.backToTop")}
            <span className="footer-top-icon"><MdKeyboardArrowUp /></span>
          </button>
        </div>
      </div>
    </footer>

  )
}

export default Footer
