import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
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
      .post("http://localhost:8080/auth/login", user)
      .then((res) => {
        console.log(res.data);
        navigate("/profilePage");
        // setUserName("");
        // setPassword("");
      })
      .catch((error) => {
        alert(error, "Sorry, Username or Password is incorrect")
      })
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={handleSignIn}>
        <label>Username</label>
        <input
          className="register-input-box"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(event) => changeHandlerUsername(event)}
        />

        <label>Password</label>
        <input
          className="register-input-box"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => changeHandlerPassword(event)}
        />

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
