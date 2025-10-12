import './Footer.css'
import logo from '../../assets/logo10.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link to='/'>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <p>{t("footer.companyName")}</p>
        <p>{t("footer.location")}</p>

      </div>

      <div className="footer-contact">
        <h4>{t("footer.contactTitle")}</h4>
        <p>{t("footer.email")} igv@izolater.net</p>
        <p>{t("footer.phone")} +387 61 734 252</p>
        {/* <p>{t("footer.location")}</p> */}
      </div>

      <div className="footer-credits">
        <h4>{t("footer.creditsTitle")}</h4>
        <p>&copy; 2025 IGV Izolater d.o.o. {t("footer.rights")}</p>
        <p>{t("footer.webDesign")} I.P.</p>
      </div>
    </footer>

  )
}

export default Footer
