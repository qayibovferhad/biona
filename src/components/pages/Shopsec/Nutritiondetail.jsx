import React from 'react'
import { useParams } from 'react-router-dom';
import productsData from '../../data/nutrition';
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';
import products from '../../data/productdata';
import ProductdetailItem from './ProductdetailItem';
const ProductDetail = () => {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod=>prod.id == productId)
    return (
        <section className='productdetail'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="productdetail-img">
                        <img src={thisProduct.img} alt="" />
                        <div className="productdetail-img-top">
                            <span>sale</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="productdetail-text">
                        <div className="product-detail-main">
                        <ReactStars count={thisProduct.count} value = {0} color1={"red"} color2= {"red"} size={22} edit={false} />
                        <h2>{thisProduct.title}</h2>
                        <div className="productdetail-text-price">
                            <h6>${thisProduct.del}</h6>
                            <h4>${thisProduct.price}</h4>
                        </div>
                        <p>{thisProduct.desc}</p>
                        <button><Link to={"/payment"} className="shopbutton" >Buy Now</Link></button>

                        <h5>Arriving:{thisProduct.arriving} December 2022</h5>
                        <h5>Category:{thisProduct.category}</h5>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="productdetail-related">
                <div className="circle">
                </div>
                <h2>Related Products</h2>
                <div className="row">
                {products.wheyprotein.map((item,inx)=>(
              <ProductdetailItem mehsul={item} key = {item.id} count ={item.count} single={item.single} recentimg = {item.image} title = {item.title} price = {item.price} />

                ))}
                </div>
            </div>
        </div>
         </section>
 
      )
}

export default ProductDetail