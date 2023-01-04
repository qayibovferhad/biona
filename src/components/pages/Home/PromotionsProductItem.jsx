import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";

const PromotionsProductItem = (props) => {
  const { addItem } = useCart();
  const [title, setTitle] = useState("Add to Cart");
  return (
    <div>
      <div class="item">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="promotions-product"
        >
          <div className="promotions-img">
            <div className="promotions-top">
              <span>sale</span>
            </div>
            <img
              className="promotionsphoto"
              width={"140px"}
              src={props.image}
              alt=""
            />
          </div>
          <div className="promotions-title">
            <h5>{props.title}</h5>
            <h4>
              <del>${props.del}</del>
            </h4>
            <h4>${props.price}</h4>
            <div className="offers-button">
              <button
                onClick={() => {
                  setTitle("Added to Cart");
                  addItem(props.mehsul);
                }}
                className="cardbutton"
              >
                {title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsProductItem;
