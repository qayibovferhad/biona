import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "../../data/data1";
const Partner = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        // items: 2,
        // navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        smartSpeed: 1400,
        autoplay: true,
        autoplayTimeout: 1400,
        loop: true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:4,
            },
            1000:{
                items:5,
            }
        }
      };
  return (
    <section className="carouselsection">
      <div className="carousel-title">
        <h3>Our Partner</h3>
      </div>
      <div className="container">
      <OwlCarousel className="carousel slider-items owl-carousel" {...options}>
         {data.data4.map((item,key)=>{
          return(
              <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" class="item">
            <img className="carouselimg" key={item.id} src={item.img} />
          </div>
          )
         })}
    </OwlCarousel>
      </div>
    </section>
   
  );
};

export default Partner
