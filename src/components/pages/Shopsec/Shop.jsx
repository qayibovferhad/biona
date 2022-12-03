import React from 'react'
import ShopItem from './ShopItem'
import supplement4 from "../../assets/img/supplement4.jpg"
import drink6 from "../../assets/img/drink6.webp"
import drink4 from "../../assets/img/drink4.jpg"
import promotion11 from "../../assets/img/protein11.jpg"
import nutrition5 from "../../assets/img/nutrition5.jpg"
import vitamin6 from "../../assets/img/vitamin6.jpg"
import snacks9 from "../../assets/img/snacks9.jpg"
import { useTranslation } from "react-i18next";



const Shop = () => {
  const { t, i18n } = useTranslation();

  return (
   <>
    <section className='shop'>
      <div className="container">
        <div className="shoptext">
          <div className="circle"></div>
          <h3>{t("Shop.0")}</h3>
        </div>
      <div className="row">
        <ShopItem img={promotion11} title={t("Shop.1")} link={"/shopmenu"}/>
        <ShopItem img={supplement4} title={t("Shop.2")} link={"/supplement"}/>
        <ShopItem img={drink6} title={t("Shop.3")} link={"/sportdrink"}/>
        <ShopItem img={nutrition5} title={t("Shop.4")} link={"/nutrition"}/>
        <ShopItem img={vitamin6} title={t("Shop.5")} link={"/vitamins"}/>
        <ShopItem img={snacks9} title={t("Shop.6")} link={"/snacks"}/>
      </div>
      </div>
    </section>
   </>
    )
}

export default Shop