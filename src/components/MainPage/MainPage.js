import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="mountain-image">
      </div>

      <div className="sign-in-btn-container">
        <div>
          <Link to="/login">
            <button className="sign-in-btn">Sign In</button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button className="sign-in-btn">Register</button>
          </Link>
        </div>
      </div>

      <div className="map-image-container">
        <img
          className="map-image"
          src="https://drive.google.com/uc?export=view&id=1u_un1kFmiga6gZGoic3HAmWo2XIY68FQ"
          alt="picture of map"
        />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
