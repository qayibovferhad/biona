import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "../../data/data1";
const Aboutthird = () => {
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
    <>
    <section className='aboutthird'>
    <div className="container">
        <div className="aboutthird-text">
                <div className="circle"></div>
                <h2>Our Partners</h2>
            </div>
        </div>
           <div className="aboutthird-main">
            <div className="container">
               <div className="aboutcarousel">
                
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
   
                 </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="aboutthird-main-text">
                            <p>
Since 1939, the Institute of Biona has been a forum for passionate science of food professionals and technologists to collaborate, learn, and contribute all with the goal of inspiring transforming collective scientific knowledge into innovative solutions for the benefit of all people around the world.As a scientific community grounded in purpose, Biona feeds the minds that feed the world.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="aboutthird-main-text">
                            <p>
                            At Biona we are committed to providing our members the resources and services necessary to enhance and advance their careers not only to improve and enrich their lives, but to help make greater contributions to their organizations and the science of food profession as a whole.

In doing so, we all contribute to improving the sustainability of our global food supply.</p>
                        </div>
                    </div>
                </div>
               
            </div>
           </div>
    </section>
    </>
  )
}

export default Aboutthird