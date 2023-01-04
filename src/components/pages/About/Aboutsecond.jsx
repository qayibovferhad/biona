import React from "react";
import Aboutsecondcard from "./Aboutsecondcard";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const Aboutsecond = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <section className="aboutsecond">
        <div className="container">
          <div className="aboutsecond-text">
            <div className="circle"></div>
            <h1>{t("about.7")}</h1>
            <p>{t("about.8")}</p>
          </div>
        </div>
        <div className="aboutsecond-cards">
          <div className="container">
            <div className="row">
              <Aboutsecondcard
                img={"fa-solid fa-power-off"}
                title={"Community"}
                para={"We are dedicated to supporting the changing needs."}
              />
              <Aboutsecondcard
                img={"fa-sharp fa-solid fa-spinner"}
                title={"Integrity"}
                para={"We are dedicated to supporting the changing needs."}
              />
              <Aboutsecondcard
                img={"fa-sharp fa-solid fa-apple-whole"}
                title={"Progress"}
                para={"We are dedicated to supporting the changing needs."}
              />
              <Aboutsecondcard
                img={"fa-sharp fa-solid fa-droplet"}
                title={"Passion"}
                para={"We are dedicated to supporting the changing needs."}
              />
              <Aboutsecondcard
                img={"fa-sharp fa-solid fa-bottle-water"}
                title={"Our responsibility"}
                para={"We are dedicated to supporting the changing needs."}
              />
              <Aboutsecondcard
                img={"fa-sharp fa-solid fa-ruler"}
                title={"Integrity"}
                para={"We are dedicated to supporting the changing needs."}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutsecond;
