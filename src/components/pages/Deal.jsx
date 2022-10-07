import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import products from "../data/productdata"
import single from "../assets/img/single_prod.webp"
import CarouselProductItem from './CarouselProductItem';
 const Deal = () => {
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
    <section className='deal'>
                    <div className="container">
                      <div className="deal-text">
                      <div className='circle'></div>

                        <h1>Deal Of The Days</h1>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                      </div>
                    <OwlCarousel className="carousel slider-items owl-carousel" {...options}>
            {  
              products.deal.map((item,index)=>{
                return( 
                  <CarouselProductItem  mehsul = {item} key ={item.id} image = {item.image} title = {item.title} price = {item.price} />
                 )
                })
                 }
                </OwlCarousel>
                </div>   
                </section>
  )
}

export default Deal