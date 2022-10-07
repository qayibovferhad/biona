import React from 'react'
import nationimg from "../assets/img/pr.webp"
const Nation = () => {
  return (
    <section className='nation'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="nation-text">
                    <div className="circle"></div>
                    <h1>One nutrition, One nation.</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising born and I will give you a complete.</p>
                    <button>Shop Now</button>
                </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div  className="nation-img">
                        <img data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" src={nationimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nation