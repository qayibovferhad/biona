import React from 'react'
import data from '../../data/data1'
const Guarantee = () => {
  return (
    <section className='guarantee'>
      
        <div className="container">
        <div className="guarantee-title">
            <div className="circle"></div>
            <h1>30-day Money-Back Guarantee</h1>
            <p>If you are not 100% satisfied, tell us within 30 days, and get your money back.</p>
        </div>
        <div className="row">
            {data.data3.map((item,key)=>{
                return(
                    <div className="col-lg-4 col-12">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="guarantee-box">
                        <div className="guarantee-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="guarantee-text">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                </div>
                )
            })}
      
        </div>
        </div>
    </section>
  )
}

export default Guarantee