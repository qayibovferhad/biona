import React from "react";

const Move = () => {
  return (
    <section className="move">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="move-box move1"
            >
              <div className="move-text">
                <h1>
                  Eat <span>Right!</span>
                </h1>
                <h2>Move More</h2>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="move-box move2"
            >
              <div className="move-text">
                <h1>
                  It's <span>Fun</span> to run
                </h1>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Move;
