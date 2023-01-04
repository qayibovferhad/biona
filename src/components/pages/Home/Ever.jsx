import React from "react";
import data from "../../data/data1";

const ever = () => {
  return (
    <section className="ever">
      <div className="container">
        <div className="ever-text">
          <div className="row">
            {data.data5.map((item, index) => {
              return (
                <div className="col-lg-4 col-12">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="ever-textbox"
                  >
                    <div className="ever-textbox-number">
                      <h2>{item.id}</h2>
                    </div>
                    <div className="ever-textbox-title">
                      <h2>{item.title}</h2>
                      <h6>{item.para}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ever;
