import React from "react";

const Aboutsecondcard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-12">
        <div className="aboutsecond-card">
          <div className="aboutsecond-card-img">
            <i class={props.img}></i>
          </div>
          <div className="aboutsecond-card-text">
            <h3>{props.title}</h3>
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutsecondcard;
