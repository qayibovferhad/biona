import React from "react";
import { Link } from "react-router-dom";
import mainimg from "../../assets/img/home_img (1).webp";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="main-left">
              <h1 class="animate__animated animate__bounce">
                <span>{t("home.0")} </span> {t("home.1")}
              </h1>
              <button>
                <Link className="buttonlink" to={"/shop"}>
                  {t("home.2")}
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6  d-lg-block d-none">
            <div className="main-right">
              <div className="animate__animated animate__bounce mainimg">
                <img src={mainimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
