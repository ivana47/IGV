import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo10.png'
import { scroller } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import en_img from '../../assets/united-kingdom.png'
import ba_img from '../../assets/bosnia-and-herzegovina.png'


const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const location = useLocation();
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const closeMenu = () => {
        setMobileMenu(false);
    };

    const handleNavClick = (section: string) => {
        if (location.pathname !== '/') {
            setTimeout(() => {
                scroller.scrollTo(section, { smooth: true, offset: -250, duration: 500 });
            }, 100);
        } else {
            scroller.scrollTo(section, { smooth: true, offset: -250, duration: 500 });
        }
    };

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <Link to='/'><img src={logo} alt="" className='logo' /></Link>
                <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
                    <li>
                        <Link to="/" onClick={() => { handleNavClick('hero'); closeMenu(); }}>    {t("navbar.home")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => { handleNavClick('about'); closeMenu(); }}>
                            {t("navbar.about")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => { handleNavClick('program'); closeMenu(); }}>
                            {t("navbar.services")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/images" onClick={closeMenu}>
                            {t("navbar.gallery")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => { handleNavClick('contact'); closeMenu(); }} className='btn'>
                            {t("navbar.contact")}
                        </Link>
                    </li>
                    <img src={ba_img} alt="Bosnian" className="lang-icon" onClick={() => { handleChangeLanguage("ba"); closeMenu(); }} />
                    <img src={en_img} alt="English" className="lang-icon" onClick={() => { handleChangeLanguage("en"); closeMenu(); }} />
                </ul>
                <IoMenu size={60} className='menu-icon' onClick={toggleMenu} />
            </nav>
            {mobileMenu && <div className="overlay" onClick={closeMenu}></div>}
        </>
    )
}

export default Navbar