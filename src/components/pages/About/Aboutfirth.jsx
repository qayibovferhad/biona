import React from 'react'
import nationimg from "../../assets/img/home3_img2.webp"
import { Link } from 'react-router-dom'
import  '../../data/langConfig/i18next';
import { useTranslation } from "react-i18next";
const Aboutfirth = () => {
    const { t, i18n } = useTranslation();

    const langClick = (lang) => {
      i18n.changeLanguage(lang);
    };
      
              
  return (
    <section className='aboutfirth'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="nation-text">
                    <div className="circle"></div>
                    <h1>{t("about.11")}</h1>
                    <p>{t("about.12")}</p>
                    <button><Link className='buttonlink' to={'/shop'}>{t("about.13")}</Link></button>
                </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div  className="nation-img">
                        <img data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" src={nationimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutfirth