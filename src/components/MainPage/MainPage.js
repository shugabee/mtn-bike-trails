import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <img alt="" />

      <div>
        <Link to="/signIn">
          <button>Sign In</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
