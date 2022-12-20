import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();


  const changeHandlerUsername = (event) => {
    setUserName(event.target.value)
  }

  const changeHandlerPassword = (event) => {
    setPassword(event.target.value)
  }

  const register = (event) => {
    event.preventDefault();
    const user = { username:username, password:password}
      axios
        .post("http://localhost:8080/auth/register", user)
        .then((res) => {
          console.log(res.data);
          setUserName("");
          setPassword("");
          // navigate("/profile");
        })
        .catch((error) => {
          alert(error, "could not register");
        });
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="register-container">
      <h3>Register</h3>
      <form className="login-form" onSubmit={register}>
        
          <label>Username</label>
          <input 
          className='register-input-box'
          placeholder= 'Username'
          type='text'
          name='username'
          value={username}
          onChange={(event) => changeHandlerUsername(event)}
          />
        
    
          <label>Password</label>
          <input 
          className='register-input-box'
          placeholder='Password'
          type='password' 
          name='password'
          value={password}
          onChange={(event) => changeHandlerPassword(event)}
          />
        
        <div>
          <button className= "register-form-submit-btn" type="submit">Register</button>
        </div>
      </form>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
