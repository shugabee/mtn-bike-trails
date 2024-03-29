import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setUserId } from "../../redux/userReducer";
import "./SignIn.css";


const SignIn = ({setUserId}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const changeHandlerUsername = (event) => {
    setUserName(event.target.value);
  };

  const changeHandlerPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const user = { username:username, password:password };
    axios
      .post("https://mtn-bike-trail.online/auth/login", user)
      .then((res) => {
        console.log(res.data);
        setUserId(res.data.userId);
        navigate("/profile");
       
      })
      .catch((error) => {
        alert("Sorry, Username or Password is incorrect")
      })
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="signin-container">
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={handleSignIn}>

        <label for="username">Username</label>
        <input
          className="signin-input-box"
          id="username"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(event) => changeHandlerUsername(event)}
        />

        <label for="password">Password</label>
        <input
          className="signin-input-box"
          id="password"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => changeHandlerPassword(event)}
        />

        <div>
          <button className="signin-form-submit-btn" type="submit">Sign In</button>
        </div>
      </form>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default connect(undefined, {setUserId})(SignIn);
