import React from 'react'
import data from '../../data/data1'
const Power = () => {
  return (
    <section className='power'>
    <div className='container'>
        <div className='row'>

            {data.data2.map((item,index)=>{
                return(
                    <div className='col-lg-4 col-12'>
                    <div data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom" className="poweritem-box">
                    <i class={item.class} ></i>
                        <h4>{item.title}</h4>
                        <p>But I must explain to you how all this mistaken idea pleasure</p>
                        <div className="itembox-under">
                            <a href="#">
                            <i class="fa-solid fa-arrow-right-long right"></i>
                
                            </a>
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

export default Power