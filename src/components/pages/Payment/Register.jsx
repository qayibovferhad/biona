import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="register-text">
          <div className="circle"></div>
          <h2>Register</h2>
        </div>
        <div className="register-box">
          <form>
            <label for="text">Name</label>
            <input id="text" type="text" placeholder="Your First Name" />
            <label for="text">Surname</label>
            <input id="text" type="text" placeholder="Your Surname" />
            <label for="mail">E-mail</label>
            <input placeholder="Your email" id="mail" type="email" />
            <label for="phone">Phone</label>
            <input id="phone" placeholder="Your phone" type="tel" />
            <label for="password">Password</label>
            <input id="password" placeholder="Password" type="password" />
            <div className="loginlink">
              <h6>Have your an account?</h6>
              <h6>
                <Link to={"/login"}>Login</Link>
              </h6>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
