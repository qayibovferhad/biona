import React from 'react'
import logo from "../assets/img/logo.svg"
import { useCart } from 'react-use-cart'
import {Link} from "react-router-dom"
const Navbar = () => {
  const {totalItems} = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand ms-4" >
      <img src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa-solid fa-bars"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to= "/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to= "/shop" href='#' className="nav-link">Shop  </Link>
          </li>
          <li className="nav-item">
            <Link to= "/" className="nav-link" href="#">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to= "/about" className="nav-link" href="#">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" href="#">Contact Us</Link>
          </li>
      
        </ul>
        
       <div className='navbar-right'>
        <ul>
     
          <li>
          <a href="#" className='right-moon'><i class="fa-solid fa-moon"></i></a>

          </li>
          <li>
          <a href="#" className='right-user'><i class="fa-solid fa-user"></i></a>

          </li>
          <li></li>
          <li>
         <Link to="/card" className='right-card'><span>Cart:</span> <i class="fa-solid fa-basket-shopping"></i><span className='right-card-number'>{totalItems}</span></Link>
          </li>
        </ul>
       </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar