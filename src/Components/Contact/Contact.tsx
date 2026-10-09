import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Reveal from '../Reveal/Reveal';
import { useTranslation } from "react-i18next";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [t] = useTranslation("global");
  const [result, setResult] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setResult(t("contact.form.sending"));
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "871ec364-b5d6-4804-b6f4-089886b78f93");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult(t("contact.form.success"));
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

  return (
    <Reveal className='contact' id="contact">
      <div className="contact-col">
        <p>
          {t("contact.description1")}<br />
          {t("contact.description2")}<br />
          {t("contact.description3")}
        </p>
        <ul>
          <li className="contact-name">{t("contact.companyName")}</li>
          <li><span className="icon-badge"><MdEmail className='icon' /></span> {t("contact.email")}</li>
          <li><span className="icon-badge"><FaLocationDot className='icon' /></span> {t("contact.address1")}<br />{t("contact.address2")} <br />{t("contact.address3")}</li>
          <li><span className="icon-badge"><IoPerson className='icon' /></span> {t("contact.director")}</li>
          <li><span className="icon-badge"><BsFillTelephoneFill className='icon' /></span>{t("contact.phone")}</li>
          <li><span className="icon-badge"><IoPerson className='icon' /></span> {t("contact.manager")}</li>
          <li><span className="icon-badge"><BsFillTelephoneFill className='icon' /></span>{t("contact.phoneManger")}</li>
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
          <button type='submit' className='btn dark-btn' disabled={status === "sending"}>
            {status === "sending" ? "..." : t("contact.form.submit")}
          </button>
        </form>
        {result && <span className={`form-result ${status}`}>{result}</span>}
      </div>
    </Reveal>
  )
}

export default Contact
