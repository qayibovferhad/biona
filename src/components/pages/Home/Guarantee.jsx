import React from 'react'
import data from '../../data/data1'
import  '../../data/langConfig/i18next';
import { useTranslation } from "react-i18next";
const Guarantee = () => {
    const { t, i18n } = useTranslation();

    const langClick = (lang) => {
      i18n.changeLanguage(lang);
    };
  return (
    <section className='guarantee'>
      
        <div className="container">
        <div className="guarantee-title">
            <div className="circle"></div>
            <h1>{t("home.7")}</h1>
            <p>{t("home.8")}</p>
        </div>
        <div className="row">
            {data.data3.map((item,key)=>{
                return(
                    <div className="col-lg-4 col-12">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="guarantee-box">
                        <div className="guarantee-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="guarantee-text">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                </div>
                )
            })}
      
        </div>
        </div>
    </section>
  )
}

export default Guarantee