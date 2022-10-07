import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/pages/Navbar'
import Home from '../components/pages/Home'
import { CartProvider } from 'react-use-cart'
import Card from '../components/pages/Card'
import Footer from '../components/pages/Footer'
import Contact from '../components/pages/Contact'
import Shop from '../components/pages/Shop'
import About from '../components/pages/About'
import Shopmenu from '../components/pages/Shopmenu'
import Productdetail from "../components/pages/ProductDetail"
import SnackDetail from "../components/pages/SnackDetail"
import SupplementDetail from "../components/pages/SupplementDetail"
import VitaminDetail from "../components/pages/Vitamindetail"
import Nutritiondetail from "../components/pages/Nutritiondetail"
import Drinkdetail from "../components/pages/Drinkdetail"
import Supplement from '../components/pages/Supplement'
import SportDrink from '../components/pages/SportDrink'
import Nutrition from '../components/pages/Nutrition'
import Snacks from '../components/pages/Snacks'
import Vitamins from '../components/pages/Vitamins'
const AppRouter = () => {
  return (
   <BrowserRouter>
   <CartProvider>
   <Navbar />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/card' element={<Card/>} ></Route>
        <Route path='/shopmenu' element={<Shopmenu/>}></Route>
         <Route path='/supplement' element={<Supplement/>}></Route>
         <Route path='/sportdrink' element={<SportDrink/>}></Route>
         <Route path='/nutrition' element={<Nutrition/>}></Route>
         <Route path='/snacks' element={<Snacks/>}></Route>
         <Route path='/vitamins' element={<Vitamins/>}></Route>
         <Route path = "/shopmenu/:productId" element={<Productdetail/>}></Route>
         <Route path = "/supplement/:productId" element={<SupplementDetail/>}></Route>
         <Route path = "/snacks/:productId" element={<SnackDetail/>}></Route>
         <Route path = "/vitamins/:productId" element={<VitaminDetail/>}></Route>
         <Route path = "/sportdrink/:productId" element={<Drinkdetail/>}></Route>
         <Route path = "/nutrition/:productId" element={<Nutritiondetail/>}></Route>
    </Routes>
   <Footer />
    </CartProvider>
   </BrowserRouter>
  )
}

export default AppRouter