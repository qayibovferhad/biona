import React from 'react'
import img from "../assets/img/about_img.webp"
import {Link} from "react-router-dom"

const Aboutfirst = () => {
  return (
    <>
    <section className="aboutfirst">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="let-food">
                    <div className="circle"></div>
                     <h3>Let food be thy medicine and medicine be thy food.</h3>
                    </div>
               
                </div>
                <div className="col-lg-6 col-12">
                    <div className="let-para">
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. </p>
                    </div>
                </div>

            </div>
            <div className="col-12">
                <div className="let-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="col-12">
                <div className="let-text">
                    <h1>The first wealth is health.</h1>
                    <button><Link to="/shop" className='buttonlink'>Shop Now</Link></button>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Aboutfirst