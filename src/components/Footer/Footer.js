import React from 'react';
import { BsInstagram, BsFacebook, BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className='footer-icons'>
        <BsInstagram size={"30px"}/>
        <BsFacebook size={"30px"} />
        <BsApple size={"30px"}/>
        <FaGooglePlay size={"30px"}/>
      </div>
      
      <img
        className='footer-image'
        src="https://drive.google.com/uc?export=view&id=1XMbahxL-8meV7x9KnU_9ftj96bGfmA_c"
        alt="mountain picture"
      />
    </footer>
  );
}

export default Footer