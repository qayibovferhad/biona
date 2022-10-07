import React from 'react'
import ShopItem from './ShopItem'
import supplement4 from "../assets/img/supplement4.jpg"
import drink6 from "../assets/img/drink6.webp"
import drink4 from "../assets/img/drink4.jpg"
import promotion11 from "../assets/img/protein11.jpg"
import nutrition5 from "../assets/img/nutrition5.jpg"
import vitamin6 from "../assets/img/vitamin6.jpg"
import snacks9 from "../assets/img/snacks9.jpg"



const Shop = () => {
  return (
   <>
    <section className='shop'>
      <div className="container">
        <div className="shoptext">
          <div className="circle"></div>
          <h3>Category</h3>
        </div>
      <div className="row">
        <ShopItem img={promotion11} title={"Whey Protein"} link={"/shopmenu"}/>
        <ShopItem img={supplement4} title={"Supplement"} link={"/supplement"}/>
        <ShopItem img={drink6} title={"Sport Drink"} link={"/sportdrink"}/>
        <ShopItem img={nutrition5} title={"Nutrition"} link={"/nutrition"}/>
        <ShopItem img={vitamin6} title={"Vitamins"} link={"/vitamins"}/>
        <ShopItem img={snacks9} title={"Snacks"} link={"/snacks"}/>
      </div>
      </div>
    </section>
   </>
    )
}

export default Shop