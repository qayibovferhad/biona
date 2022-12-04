
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import products from "../../data/productdata"
import single from "../../assets/img/single_prod.webp"
import React, { useState, useRef, useEffect } from 'react'
import Countdown from 'react-countdown';
import PromotionsProductItem from './PromotionsProductItem';
import { useCart } from 'react-use-cart'
import  '../../data/langConfig/i18next';
import { useTranslation } from "react-i18next";
const Completionist = () => <span>Promotion Is Ended</span>;

const Promotions = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
     
        if (completed) {
        
          return <Completionist />;
        } else {
 
          return <span>
            <div className="counter-clock">
                        <div className="clock-day clock-box">
                            <h3>{0+"" + days}</h3>
                            <h5>{t("home.12")}</h5>
                        </div>
                        <div className="clock-hour clock-box">
                            <h3>{hours}</h3>
                            <h5>{t("home.13")}</h5>
                        </div>
                        <div className="clock-min clock-box">
                            <h3>{minutes}</h3>
                            <h5>{t("home.14")}</h5>
                        </div>
                        <div className="clock-sec clock-box">
                            <h3> {seconds}</h3>
                            <h5>{t("home.15")}</h5>
                        </div>
                       </div></span>;
        }
      };
      
      
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        smartSpeed: 3700,
        autoplay: true,
        autoplayTimeout: 2600,
        loop: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
       
      };

       
  return (
    <section className='promotions'>
                    <div className="container">
                      <div className="promotions-text">
                      <div className='circle'></div>
             
                        <h1>{t("home.25")}</h1> 
                        <Countdown date={Date.now() + 345444345} renderer={renderer}/>
                     
                      </div>
                    <OwlCarousel className="carousel slider-items owl-carousel" {...options}>
            {  
              products.promotion.map((item,index)=>{
                return(
                  <PromotionsProductItem mehsul = {item} key ={item.id} image = {item.image}  title = {item.title} del = {item.del} price = {item.price} />
            
                )
              })
            }
  

</OwlCarousel>
</div>   

    </section>
  )
}

export default Promotions;
