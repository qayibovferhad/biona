import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Payment = (props) => {
  const [num, setNum] = useState("");

  const handleNumChange = (event) => {
    const limit = 4;
    setNum(event.target.value.slice(0, limit));
  };
  const [num1, setNum1] = useState("");

  const handleNumChange1 = (event) => {
    const limit = 16;
    setNum1(event.target.value.slice(0, limit));
  };

  return (
    <section className="payment">
      <div className="container">
        <div className="payment-text">
          <div className="circle"></div>
          <h2>Payment</h2>
        </div>
        <div className="payment-box">
          <div className="payment-form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
              <input type="email" placeholder="Email Address" />

              <input type="text" placeholder="City" />
              <input type="text" placeholder="Zip Code" />
              <input
                type="number"
                placeholder="Card Number"
                value={num1}
                onChange={handleNumChange1}
              />

              <input
                type="number"
                placeholder="CVV"
                value={num}
                onChange={handleNumChange}
              />
              <button type="submit">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
