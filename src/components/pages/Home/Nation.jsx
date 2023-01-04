import React from "react";
import nationimg from "../../assets/img/pr.webp";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const Nation = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className="nation">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="nation-text"
            >
              <div className="circle"></div>
              <h1>{t("home.16")}</h1>
              <p>{t("home.6")}</p>
              <button>{t("home.2")}</button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="nation-img">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={nationimg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nation;
