import React from "react";
import data from "../../data/data1";
const Pictures = () => {
  return (
    <section className="pictures">
      <div className="container-fluid">
        <div className="row">
          {data.data1.map((item, index) => {
            return (
              <div className="col-lg-3 col-12">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="pictures-box"
                >
                  <div className="pictures-img">
                    <img
                      className="picturesimage"
                      key={item.id}
                      src={item.photo}
                      alt=""
                    />
                    <div className="pictures-hidden">
                      <span>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pictures;
