import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <div>
        <Header />
      </div>
      <h2>Log In</h2>
      <form className="login-form">
        <label>
          <label>Username</label>
          <input type="text"/>
        </label>
        <label>
          <label>Password</label>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
