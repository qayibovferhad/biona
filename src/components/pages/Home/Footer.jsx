import React from 'react'
import footer from "../../assets/img/footer_logo.svg"
import {Link} from "react-router-dom"
import  '../../data/langConfig/i18next';
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className='footer'>
     <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="footer-info footer-box">
            <div className="footer-logo">
              <img src={footer} alt="" />
            </div>
            <div className="footer-media">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <p>{t("home.21")}</p>
            <p>Zemez © . All rights reserved.</p>
        </div>
        </div>

            <div className="col-lg-4 d-lg-block d-none col-12 ">
            <div className="footer-nav footer-box">
              <ul>
                <li ><Link to="/">{t("navbar.1")}</Link></li>
                <li><Link to="/shop">{t("navbar.2")}</Link></li>
                <li><Link to="/blog">{t("navbar.3")}</Link></li>
                <li><Link to="/about">{t("navbar.4")}</Link></li>
                <li><Link to="/contact">{t("navbar.5")}</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="footer-mail footer-box">
                <h1>{t("home.22")}</h1>
                <form>
                  <input type="mail" className='inputmail' placeholder='Enter Email' />
                  <button type='submit' className='inputsubmit'>{t("home.23")}</button>
                </form>
                <div className="footer-mail-box">
                <i class="fa-solid fa-phone"></i>
                <div className="footer-mail-box-text">
                <h6>{t("home.26")}</h6>
                <h5>+18 800 555 35 35</h5>
                </div>
                
                </div>
                <div className="footer-mail-box">
                <i class="fa-solid fa-location-dot"></i>
                <div className="footer-mail-box-text">
                <h6>160 Broadway, New York, NY 10038,</h6>
                <h6>102 1st Avenue, New York, NY 100</h6>
                </div>
                
                </div>
               
              </div>
            </div>

      </div>
     </div>
    </section>
  )
}

export default Footer