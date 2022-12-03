import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import products from "../../data/productdata"
import single from "../../assets/img/single_prod.webp"
import OfferProductItem from './OfferProductItem';
import  '../../data/langConfig/i18next';
import { useTranslation } from "react-i18next";
const Offers = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        // items: 2,
        // navText: ["<i class='fa-solid fa-chevron-left offers-left'></i>", "<i  class='fa-solid fa-chevron-right offers-right'></i>"],
        smartSpeed: 3700,
        autoplay: true,
        autoplayTimeout: 2600,
        loop: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            800:{
              items:2
            },
            900:{
              items:2
            },
            950:{
              items:2
            },
            970:{
              items:2
            },
            990:{
              items:2
            },
            1000:{
                items:4,
            }
        }
      };
  return (
    <section className='offers'>
                    <div className="container">
                      <div className="offers-text">
                      <div className='circle'></div>

                        <h1>{t("home.5")}</h1>
                        <p>{t("home.6")}</p>
                      </div>
                    <OwlCarousel className="carousel slider-items owl-carousel" {...options}>
            {  
              products.offers.map((item,index)=>{
                return(
                  <OfferProductItem mehsul = {item} key ={item.id} image = {item.image} title = {item.title} price = {item.price} />
              
                )
              })
            }
  

</OwlCarousel>
</div>   

    </section>
  )
}

export default Offers