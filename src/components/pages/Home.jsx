import React from 'react'
import Hero from "./Hero"
import Power from "./Power"
import Strong from "./Strong"
import Guarantee from "./Guarantee"
import News from "./News"
import Footer from './Footer'
import Pictures from './Pictures'
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';
import Partner from './Partner'
import Move from './Move'
import RecentProducts from './RecentProducts'
import Offers from './Offers'
import Deal from './Deal'
import Promotions from './Promotions'
import Bit from './Bit'
import Ever from './Ever'
import Nation from './Nation'
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
  )
}

export default Home