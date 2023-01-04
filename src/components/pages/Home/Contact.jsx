import React from "react";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="contact-web">
        <div className="container">
          <div className="contact-text">
            <div className="circle"></div>
            <h3>{t("contact.0")}</h3>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <form className="contactform">
                  <label for="text">{t("contact.1")}</label>
                  <input id="text" type="text" placeholder={t("contact.2")} />
                  <label for="mail">{t("contact.3")}</label>
                  <input placeholder={t("contact.4")} id="mail" type="email" />
                  <label for="phone">{t("contact.5")}</label>
                  <input id="phone" placeholder={t("contact.6")} type="tel" />
                  <label for="country">{t("contact.7")}</label>
                  <input placeholder={t("contact.8")} type="text" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-info">
                <div className="adress-info">
                  <h1>{t("contact.9")}:</h1>
                  <h3>2861 Fairview St Tallahassee, </h3>
                  <h3>New Mexico 86357 United States</h3>
                </div>
                <div className="adress-info">
                  <h1>{t("contact.5")}:</h1>
                  <h3>
                    +1 (406) 555-0120 <br />
                    +1 (406) 555-0120
                  </h3>
                </div>
                <div className="adress-info">
                  <h1>{t("contact.10")}:</h1>
                  <h3>email@example.com</h3>
                </div>
                <div className="adress-info">
                  <h1>{t("contact.11")}:</h1>
                  <h3>Mon – Fri: 7am – 10pm</h3>
                  <h3>​​Sat – Sun: 8am – 8pm</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
