import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="profile-page-title-container">
        <h4>Profile Page</h4>
      </div>

      <Link to="/accomplishedTrails">
        <button>Accomplished Trails</button>
      </Link>
      <Link to="/favoriteTrails">
        <button>Favorite Trails</button>
      </Link>
      <Link to="/trailsToTry">
        <button>Trails to Try</button>
      </Link>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
