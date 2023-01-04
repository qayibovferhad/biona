import React from "react";
import { Link } from "react-router-dom";

const ShopItem = (props) => {
  return (
    <>
      <div className="col-lg-4 col-12">
        <div className="shopitem">
          <div className="shopitem-img">
            <img src={props.img} alt="" />
          </div>
          <div className="shopitem-text">
            <Link to={props.link} className="buttonlink">
              {" "}
              <h3>{props.title}</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItem;
