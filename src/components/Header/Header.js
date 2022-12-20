import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        className="bike-img"
        src="https://drive.google.com/uc?export=view&id=1co0W0mGATG5rR5EkU8WR6Mfh1VE4uBNZ"
        alt="bike-logo-pic"
      />
      <Link className="page-name-link" to="/">
        <h1 className='page-title'>
          Trail Tracks
          </h1>
      </Link>
    </header>
  );
}

export default Header;