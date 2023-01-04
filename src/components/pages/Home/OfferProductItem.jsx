import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const OfferProductItem = (props) => {
  const { addItem } = useCart();
  const [title, setTitle] = useState("Add to Cart");
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div class="item">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="offers-product"
        >
          <div className="offers-img">
            <div className="offers-top">
              <span>sale</span>
            </div>
            <img
              className="offersphoto"
              width={"140px"}
              src={props.image}
              alt=""
            />
          </div>
          <div className="offers-title">
            <h5>{props.title}</h5>
            <h4>${props.price}</h4>
            <div className="offers-button">
              <button
                onClick={() => {
                  setTitle("Added to Cart");
                  addItem(props.mehsul);
                }}
                className="cardbutton"
              >
                {t("home.4")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProductItem;
