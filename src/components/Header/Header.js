import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img className="bike-img" src='https://drive.google.com/uc?export=view&id=1DwahiLtfNMQTSzVTZiY13NLP9lOEW5F5' alt='bike-logo-pic' />
      <Link className="page-name-link" to="/">
        Main Page
      </Link>
    </header>
  );
}

export default Header;