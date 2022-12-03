import React from 'react'
import { useState,useRef } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import users from "../../data/login"

const Login = ({ user, setUser }) => {
//     let navigate = useNavigate();
// const[username, setUser] = useState();
// const[password, setPass] = useState();
const [alert, setAlert] = useState();
// const authenticationLogin = (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setAlert("Fill In The Boxes");
//     } else {
//       if (username === users[0].username && password === users[0].password) {
//         navigate("/");
//       } else {
//         setAlert("Wrong password or username");
//       }
//     }
//   };

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
      localStorage.setItem("passwordData", "ferhad123");
      history("/");
    }
    else {
              setAlert("Wrong password or username");
            }
  };
  return (
<div className='loginsection'>
    <div className="container">
    <div className="login-text">
        <div className="circle"></div>
        <h2>Login</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <h6 className='col-6 mb-3 text-center alert-danger'>{alert}</h6>
      </div>
      <div className="login-form-main">
        <form onSubmit={handleSubmit} className="col-6 ">
          <div className="mb-3">

                  <label for="text"  >Username</label>
             <input id='text' ref={name} type="text"  />
  
          </div>
          <div className="mb-3">
          <label for="passwordHelp"  >Password</label>
             <input id='passwordHelp' ref={password} className='textinput' type="password"  />
         
       
       
          </div>
            
          <button type="submit"> Submit </button>
          <h6>Don't have an account? <Link to={"/register"}>Register</Link></h6>
        </form>
      </div>
    </div>
    </div>
      
  )
}

export default Login