import React from 'react'
import footer from "../assets/img/footer_logo.svg"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <section className='footer'>
     <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="footer-info footer-box">
            <div className="footer-logo">
              <img src={footer} alt="" />
            </div>
            <div className="footer-media">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <p>*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose.</p>
            <p>Zemez © . All rights reserved.</p>
        </div>
        </div>

            <div className="col-lg-4 d-lg-block d-none col-12 ">
            <div className="footer-nav footer-box">
              <ul>
                <li ><a href="#" className='active'>Home</a></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="footer-mail footer-box">
                <h1>Sign up for the newsletter</h1>
                <form>
                  <input type="mail" className='inputmail' placeholder='Enter Email' />
                  <button type='submit' className='inputsubmit'>Subscribe</button>
                </form>
                <div className="footer-mail-box">
                <i class="fa-solid fa-phone"></i>
                <div className="footer-mail-box-text">
                <h6>Contact for a Free Consultation:</h6>
                <h5>+18 800 555 35 35</h5>
                </div>
                
                </div>
                <div className="footer-mail-box">
                <i class="fa-solid fa-location-dot"></i>
                <div className="footer-mail-box-text">
                <h6>160 Broadway, New York, NY 10038,</h6>
                <h6>102 1st Avenue, New York, NY 100</h6>
                </div>
                
                </div>
               
              </div>
            </div>

      </div>
     </div>
    </section>
  )
}

export default Footer