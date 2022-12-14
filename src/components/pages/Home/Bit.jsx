import React from "react";
import bitimg from "../../assets/img/v6_img2.webp";
import CountUp from "react-countup";

import VisibilitySensor from "react-visibility-sensor";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";

const Bit = () => {
  const [focus, setFocus] = React.useState(false);
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="bit"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="bit-text">
              <div className="circle"></div>
              <h1>{t("home.10")}</h1>
              <p>{t("home.6")}</p>
              <div className="bit-textboxes">
                <div className="bit-box">
                  <h4>
                    {" "}
                    <CountUp
                      start={focus ? 0 : null}
                      end={150}
                      duration={3}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span> +</span>
                  </h4>

                  <h6>Successful Program</h6>
                </div>
                <div className="bit-box">
                  <h4>
                    <CountUp
                      start={focus ? 0 : null}
                      end={230}
                      duration={4}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span> +</span>
                  </h4>
                  <h6>Successful Program</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="bit-img">
              <img src={bitimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bit;
