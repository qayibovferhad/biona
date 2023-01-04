import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/pages/Home/Navbar";
import Home from "../components/pages/Home";
import { CartProvider } from "react-use-cart";
import Card from "../components/pages/Payment/Card";
import Footer from "../components/pages/Home/Footer";
import Contact from "../components/pages/Home/Contact";
import Shop from "../components/pages/Shopsec/Shop";
import About from "../components/pages/About/About";
import Shopmenu from "../components/pages/Shopsec/Shopmenu";
import Productdetail from "../components/pages/Shopsec/ProductDetail";
import SnackDetail from "../components/pages/Shopsec/SnackDetail";
import SupplementDetail from "../components/pages/Shopsec/SupplementDetail";
import VitaminDetail from "../components/pages/Shopsec/Vitamindetail";
import Nutritiondetail from "../components/pages/Shopsec/Nutritiondetail";
import Drinkdetail from "../components/pages/Shopsec/Drinkdetail";
import Supplement from "../components/pages/Shopsec/Supplement";
import SportDrink from "../components/pages/Shopsec/SportDrink";
import Nutrition from "../components/pages/Shopsec/Nutrition";
import Snacks from "../components/pages/Shopsec/Snacks";
import Vitamins from "../components/pages/Shopsec/Vitamins";
import Payment from "../components/pages/Payment/Payment";
import Register from "../components/pages/Payment/Register";
import Login from "../components/pages/Payment/Login";
import Blog from "../components/pages/Blog/Blog";
import BlogDetail from "../components/pages/Blog/BlogDetail";
const AppRouter = () => {
  const [user, setUser] = useState({
    username: "Ferhad",
    password: "ferhad1905",
  });

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>

          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/shopmenu" element={<Shopmenu />}></Route>
          <Route path="/supplement" element={<Supplement />}></Route>
          <Route path="/sportdrink" element={<SportDrink />}></Route>
          <Route path="/nutrition" element={<Nutrition />}></Route>
          <Route path="/snacks" element={<Snacks />}></Route>
          <Route path="/vitamins" element={<Vitamins />}></Route>
          <Route
            path="/shopmenu/:productId"
            element={<Productdetail />}
          ></Route>
          <Route
            path="/supplement/:productId"
            element={<SupplementDetail />}
          ></Route>
          <Route path="/snacks/:productId" element={<SnackDetail />}></Route>
          <Route
            path="/vitamins/:productId"
            element={<VitaminDetail />}
          ></Route>
          <Route
            path="/sportdrink/:productId"
            element={<Drinkdetail />}
          ></Route>
          <Route
            path="/nutrition/:productId"
            element={<Nutritiondetail />}
          ></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:blogId" element={<BlogDetail />}></Route>
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
