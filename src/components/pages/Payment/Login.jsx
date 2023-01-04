import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import users from "../../data/login";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
const Login = ({ user, setUser }) => {
  const { t, i18n } = useTranslation();

  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [alert, setAlert] = useState();

  const history = useNavigate();
  const name = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.current.value === "Ferhad" &&
      password.current.value === "ferhad1905"
    ) {
      localStorage.setItem("emailData", "Ferhad");
      localStorage.setItem("passwordData", "ferhad1905");
      history("/");
    } else {
      setAlert("Wrong password or username");
    }
  };
  return (
    <div className="loginsection">
      <div className="container">
        <div className="login-text">
          <div className="circle"></div>
          <h2>{t("Login.0")}</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h6 className="col-6 mb-3 text-center alert-danger">{alert}</h6>
        </div>
        <div className="login-form-main">
          <form onSubmit={handleSubmit} className="col-6 ">
            <div className="mb-3">
              <label for="text">{t("Login.1")}</label>
              <input id="text" ref={name} type="text" />
            </div>
            <div className="mb-3">
              <label for="passwordHelp">{t("Login.2")}</label>
              <input
                id="passwordHelp"
                ref={password}
                className="textinput"
                type="password"
              />
            </div>

            <button type="submit"> {t("Login.3")} </button>
            <h6>
              {t("Login.4")} <Link to={"/register"}>{t("Login.5")}</Link>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
