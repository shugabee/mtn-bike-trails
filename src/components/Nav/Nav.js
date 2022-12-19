import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
        <Link className="nav-link" to="/profile">
            My Trails
        </Link>

        <Link className="nav-link" to="/favorites">
            Favorite Trails
        </Link>

    </nav>
  )
}

export default Nav