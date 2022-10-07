import React from 'react'
import { useState } from 'react';
import { useCart } from 'react-use-cart'

const OfferProductItem = (props) => {
  const {addItem} = useCart();
  const [title,setTitle] = useState("Add to Cart");
  
  return (
    <div>
                <div class='item'>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="offers-product">
           
           <div className="offers-img">
               <div className="offers-top">
                   <span>sale</span>
               </div>
               <img className='offersphoto' width={"140px"} src={props.image} alt="" />
           </div>
           <div className="offers-title">
               <h5>{props.title}</h5>
               <h4>${props.price}</h4>
               <div className="offers-button">
               <button onClick={()=>{setTitle("Added to Cart");addItem(props.mehsul)}} className='cardbutton'>{title}</button>
               <button className='shopbutton'>Shop Now</button>
               </div>
           </div>
           </div>
          </div>
    </div>
  )
}

export default OfferProductItem