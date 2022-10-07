import React from 'react'
import mainimg from "../assets/img/home_img (1).webp"
const Main = () => {
  return (
    <div className='main'>
    <div className='container'>
        <div className="row">
     <div className='col-lg-6 col-12'>
        <div className="main-left">
            <h1 class="animate__animated animate__bounce"><span>Boost</span> Your immune system today</h1>
             <button><span>Shop Now</span></button>
             </div>
          </div>
        <div className='col-lg-6  d-lg-block d-none'>
            <div className='main-right'>
                <div className='animate__animated animate__bounce mainimg'>
            <img src={mainimg} alt="" />
                 </div>
                  </div>
               </div>
              </div>
             </div>
             </div>
  )
}

export default Main