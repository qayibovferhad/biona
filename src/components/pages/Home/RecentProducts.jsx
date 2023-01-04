import React from "react";
import productimage from "../../assets/img/prod9 (1).webp";
// import products from '../../data/productdata'
import products from "../../data/productdata";
import single from "../../assets/img/single_prod.webp";
import ReactStars from "react-stars";
import RecentProductItem from "./RecentProductItem";
import { useState } from "react";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const RecentProducts = () => {
  const [state, setState] = useState(1);
  const { t, i18n } = useTranslation();
  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className="recent">
      <div className="container">
        <div className="recent-text">
          <div className="circle"></div>
          <h1>{t("home.5")}</h1>
          <div className="recent-category">
            <ul>
              <li>
                <a
                  onClick={() => setState(1)}
                  style={{ color: state === 1 ? "red" : "black" }}
                  className="active"
                >
                  {t("Shop.1")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setState(2)}
                  style={{ color: state === 2 ? "red" : "black" }}
                >
                  {t("Shop.2")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setState(3)}
                  style={{ color: state === 3 ? "red" : "black" }}
                >
                  {t("Shop.3")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setState(4)}
                  style={{ color: state === 4 ? "red" : "black" }}
                >
                  {t("Shop.4")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => setState(5)}
                  style={{ color: state === 5 ? "red" : "black" }}
                >
                  {t("Shop.5")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="recent-products">
          <div className="container">
            <div className="row">
              {state === 1
                ? products.foodgym.map((item, inx) => (
                    <RecentProductItem
                      mehsul={item}
                      key={item.id}
                      count={item.count}
                      single={item.single}
                      recentimg={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))
                : state === 2
                ? products.supplement.map((item, nx) => (
                    <RecentProductItem
                      mehsul={item}
                      key={item.id}
                      count={item.count}
                      single={item.single}
                      recentimg={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))
                : state === 3
                ? products.nutrition.map((item, nx) => (
                    <RecentProductItem
                      mehsul={item}
                      key={item.id}
                      count={item.count}
                      single={item.single}
                      recentimg={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))
                : state === 4
                ? products.sportdrink.map((item, nx) => (
                    <RecentProductItem
                      mehsul={item}
                      key={item.id}
                      count={item.count}
                      single={item.single}
                      recentimg={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))
                : state === 5
                ? products.vitamins.map((item, nx) => (
                    <RecentProductItem
                      mehsul={item}
                      key={item.id}
                      count={item.count}
                      single={item.single}
                      recentimg={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  ))
                : null}
              {/* <RecentProductItem mehsul={item} key = {item.id} count ={item.count} single={item.single} recentimg = {item.image} title = {item.title} price = {item.price} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProducts;
