import React from 'react'
import { useCart } from "react-use-cart";
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = (props) => {
  const {
    isEmpty,
    items,
    cartTotal,
    totalUniqueItems,
    totalItems,
   removeItem,
    updateItemQuantity,
    emptyCart,
  } = useCart();
const deleted = () => toast.info("Deleted", {
  position: "top-left",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  
  });;
  const added = () => toast.success("Added" , {
    position: "top-left",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });;
    const removed = () => toast.error("Removed" , {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });;
  
  if (isEmpty) return(
    <div className="container">
                <div className="card-text">
    <div className="circle"></div>
    <h1>My Cart</h1>
    <div className="circlev2">
    <i class="fa-solid fa-basket-shopping"></i>
    <p>Your cart is currently empty.</p>
    <button><Link className='buttonlink' to="/shop">RETURN TO SHOP</Link></button>
     </div>
     </div>
    </div>

  )

  return (
    <div className='cards'>
     <div className="container">
      <div className="card-text">
        <div className="circle"></div>
        <h1>My Cart</h1>
      </div>
      <div className="row">
        {items.map((item,key)=>{
        return(
          <div className="col-lg-6 col-12">
                <div className="card-product">
            <div className="container">
              <div className="row">
                <div className="col-4">
                <div className="card-product-img">
            <img src={item.image} alt="" />
          </div>
                </div>
                <div className="col-8">
                  <div className="card-product-text">
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                     <ReactStars count={item.count} value = {0} color1={"red"} color2= {"red"} size={22} edit={false} />
                     <span> Quantity:  
                      <button onClick={()=>{updateItemQuantity(item.id,item.quantity - 1);removed()}} className="quantitybutton" ><span>-</span></button>
                      {item.quantity}  
                       <button onClick={()=>{updateItemQuantity(item.id,item.quantity + 1);added()}} className="quantitybutton" ><span>+</span></button></span>
                       <p>Arriving: {item.arriving} December 2022</p>
                      <button className='removebutton' onClick={()=>{removeItem(item.id);deleted()}} ><span><i class="fa-solid fa-x"></i></span></button>
                       <ToastContainer/>
                      </div>
                      </div>
                      </div>
                      </div>
        
                       </div>
                       </div>
  
        )
        })}
                        </div>
                  
                        <div className="card-end">
                        <div className="card-end-text">
                         <div className="container">
                         <h1>Order Summary</h1>
                          <h1>Total Items: {totalItems}</h1>
                           <h1>Total Price: {cartTotal.toFixed(2)}$</h1>
                           <h1>Tax: {(cartTotal*2/100).toFixed(2)}$</h1>
                           <h1>Shipping & handling: {(cartTotal*5/100).toFixed(2)}$</h1>
                           <h1>General Discount: -{(cartTotal*15/100).toFixed(2)}$</h1>
                           <h1>Order Total: {(cartTotal-cartTotal*15/100 + (cartTotal*2/100) +(cartTotal*5/100)).toFixed(2)}$</h1>
                           <div className="card-end-buttons">
                             <Link to={"/payment"}><button>Buy Now</button></Link>
                         <button onClick={()=>{emptyCart()}}>Cancel Order</button> 
                           </div>
                         </div>
                        </div>
                         </div>
                 
         
                </div>
                   </div>
  )
}

export default Card