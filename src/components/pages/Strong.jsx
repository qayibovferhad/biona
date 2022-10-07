import React from 'react'
import data from '../data/data1'
const Strong = () => {
  return (
          <section>
          <div className='container'>
           <div className="row">
               {data.data6.map((item)=>{
                 <div className="col-12">
                  <div className="strong-text">
                      <div className="circle"></div>
                            <h1>{item.title}</h1>
                            <p>{item.para}</p>
                            <button>SHOP NOW</button>
                             </div>
                               </div>
                                   })}               
                                 </div>
                                  </div>
                                    </section>
  )
  }

export default Strong