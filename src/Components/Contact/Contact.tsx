import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";


const Contact = () => {
  const [t] = useTranslation("global");
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "92ffe45b-f6d1-43cf-877b-52f42f8b1a03");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='contact'>
      <div className="contact-col">
        <h3>{t("contact.title")} <MdEmail className='messageIcon' /></h3>
        <p>
          {t("contact.description1")}<br />
          {t("contact.description2")}<br />
          {t("contact.description3")}
        </p>
        <ul>
          <li>{t("contact.companyName")}</li>
          <li><MdEmail className='icon' /> {t("contact.email")}</li>
          <li><FaLocationDot className='icon' /> {t("contact.address1")}<br />{t("contact.address2")} <br />{t("contact.address3")}</li>
          <li><IoPerson className='icon' /> {t("contact.director")}</li>
          <li><BsFillTelephoneFill className='icon' />{t("contact.phone")}</li>
          <li><IoPerson className='icon' /> {t("contact.manager")}</li>
          <li><BsFillTelephoneFill className='icon' />{t("contact.phoneManger")}</li>


        </ul>
      </div>
      <div
        className="contact-col">
        <form onSubmit={onSubmit}>
          <label>{t("contact.form.name")}</label>
          <input type="text" name='name' placeholder={t("contact.form.namePlaceholder")} required />
          <label>{t("contact.form.email")}</label>
          <input type="email" name='email' placeholder={t("contact.form.emailPlaceholder")} required />
          <label>{t("contact.form.phone")}</label>
          <input type="tel" name='phone' placeholder={t("contact.form.phonePlaceholder")} required />
          <label>{t("contact.form.message")}</label>
          <textarea name="message" rows={8} placeholder={t("contact.form.messagePlaceholder")} required></textarea>
          <button type='submit' className='btn dark-btn'>{t("contact.form.submit")}</button>
        </form>
        <span>{result}</span>
      </div>
    </motion.div>
  )
}

export default Contact