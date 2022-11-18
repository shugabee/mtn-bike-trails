import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link style={{ textDecoration: "none", color: 'tan'}} to="/">
        MainPage
      </Link>
    </header>
  );
}

export default Header