import React from "react";
import blogdata from "../../data/blogdata";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className="news">
      <div className="container">
        <div className="news-title">
          <div className=" col-12 circle"></div>
          <h2>{t("home.17")}</h2>
          <p>{t("home.18")}</p>
        </div>
        <div className="row">
          {blogdata.blogs.map((item, index) => {
            return (
              <div className="col-lg-4 col-12">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  key={item.id}
                  className="newsitem-box"
                >
                  <div className="newsitem-img">
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="newsitem-text">
                    <h4>{item.title}</h4>
                    <p>{item.para}</p>
                    <button>
                      {t("home.19")} <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
