import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import products from "../../data/productdata";
import single from "../../assets/img/single_prod.webp";
import CarouselProductItem from "./CarouselProductItem";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const Deal = () => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
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
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <section className="deal">
      <div className="container">
        <div className="deal-text">
          <div className="circle"></div>

          <h1>{t("home.9")}</h1>
          <p>{t("home.6")}</p>
        </div>
        <OwlCarousel
          className="carousel slider-items owl-carousel"
          {...options}
        >
          {products.deal.map((item, index) => {
            return (
              <CarouselProductItem
                mehsul={item}
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Deal;
