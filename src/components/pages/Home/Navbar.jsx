import React from "react";
import logo from "../../assets/img/logo.svg";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import "../../data/langConfig/i18next";
import { useTranslation } from "react-i18next";
import az from "../../assets/img/azerbaijan.svg";
import en from "../../assets/img/english.webp";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { totalItems } = useCart();

  const history = useNavigate();
  const handleLogoutClick = () => {
    localStorage.clear();
    console.log("salam");
    history("/login");
  };

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const authButton = () => {
    if (getEmail === null) {
      return (
        <>
          <Link to={"/login"} className="right-user">
            <i class="fa-solid fa-user"></i>
          </Link>
        </>
      );
    } else {
      return (
        <button onClick={handleLogoutClick}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i> {getEmail}
        </button>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-4">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa-solid fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                {t("navbar.1")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" href="#" className="nav-link">
                {t("navbar.2")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" href="#">
                {t("navbar.3")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="#">
                {t("navbar.4")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="#">
                {t("navbar.5")}
              </Link>
            </li>
          </ul>

          <div className="navbar-right">
            <ul>
              <li>
                <DarkMode />
              </li>

              <li>
                <button onClick={() => langClick("az")}>
                  <img width={"40px"} src={az} alt="" />
                </button>
                <button onClick={() => langClick("en")}>
                  <img width={"40px"} src={en} alt="" />
                </button>
              </li>
              <li>{authButton()}</li>
              <li></li>
              <li>
                <Link to="/card" className="right-card">
                  <span>{t("navbar.6")}:</span>{" "}
                  <i class="fa-solid fa-basket-shopping"></i>
                  <span className="right-card-number">{totalItems}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
