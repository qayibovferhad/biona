import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";

const CarouselProductItem = (props) => {
  const { addItem } = useCart();
  const [title, setTitle] = useState("Add to Cart");
  return (
    <div>
      <div class="item">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="deal-product"
        >
          <div className="deal-img">
            <div className="deal-top">
              <span>sale</span>
            </div>
            <img
              className="dealphoto"
              width={"140px"}
              src={props.image}
              alt=""
            />
          </div>
          <div className="deal-title">
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
                {title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProductItem;
