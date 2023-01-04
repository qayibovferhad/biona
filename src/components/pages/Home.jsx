import React from "react";
import Hero from "./Home/Hero";
import Power from "./Home/Power";
import Strong from "./Home/Strong";
import Guarantee from "./Home/Guarantee";
import News from "./Home/News";
import Footer from "./Home/Footer";
import Pictures from "./Home/Pictures";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Partner from "./Home/Partner";
import Move from "./Home/Move";
import RecentProducts from "./Home/RecentProducts";
import Offers from "./Home/Offers";
import Deal from "./Home/Deal";
import Promotions from "./Home/Promotions";
import Bit from "./Home/Bit";
import Ever from "./Home/Ever";
import Nation from "./Home/Nation";
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero />
      <Power />
      <RecentProducts />
      <Strong />
      <Offers />
      <Guarantee />
      <Move />
      <Deal />
      <Bit />
      <Promotions />
      <Nation />
      <Ever />
      <News />
      <Pictures />
      <Partner />
    </>
  );
};

export default Home;
