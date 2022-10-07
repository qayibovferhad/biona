import React from 'react'
import { Link } from 'react-router-dom';
import ProductsData from '../data/supplement';
import ReactStars from 'react-stars'

const Shopmenu = (props) => {

    const products = ProductsData.map(product =>{
        return (
            <div className='col-lg-3 col-12'>
                 <div data-aos="fade-up"data-aos-anchor-placement="top-bottom" className="shopmenu-product" >
                <div className="shopmenu-img" key={product.id}>
                <div className="shopmenu-top">
                    <span>sale</span>
                </div> 
                <img className='shopmenuphoto'  src={product.img} alt="" />
            </div>
            <div className="shopmenu-title">
                <h5>{product.title}</h5>
                <h4><del>${product.del}</del></h4>
                <h4>${product.price}</h4>
               <ReactStars count={product.count} value = {0} color1={"red"} color2= {"red"} size={22} edit={false} />
        
                <div className="shopmenu-button">
               <Link to={`/supplement/${product.id}`}> <button  className='shopbutton'>Buy Now </button></Link>
               </div>
            </div>
            </div>
            </div>
            
          )
    })
  return (
    <section>
            <div className="container">
            <div className="shopmenu-text">
            <div className="circle"></div>
            <h2>Supplement</h2>
            </div>
            <div className="shopmenu-products">
                <div className="container">
                    <div className="row">
                      {products}                  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shopmenu