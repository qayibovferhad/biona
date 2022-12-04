import React from 'react'
// import img from "../assets/img/about_img.webp"
import img from "../../assets/img/about_img.webp"
import {Link} from "react-router-dom"
import  '../../data/langConfig/i18next';
import { useTranslation } from "react-i18next";
const Aboutfirst = () => {
    const { t, i18n } = useTranslation();

    const langClick = (lang) => {
      i18n.changeLanguage(lang);
    };
  return (
    <>
    <section className="aboutfirst">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="let-food">
                    <div className="circle"></div>
                     <h3>{t('about.0')}</h3>
                    </div>
               
                </div>
                <div className="col-lg-6 col-12">
                    <div className="let-para">
                        <p>{t('about.1')}</p>
                    </div>
                </div>

            </div>
            <div className="col-12">
                <div className="let-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="col-12">
                <div className="let-text">
                    <h1>{t('about.2')}</h1>
                    <button><Link to="/shop" className='buttonlink'>Shop Now</Link></button>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Aboutfirst