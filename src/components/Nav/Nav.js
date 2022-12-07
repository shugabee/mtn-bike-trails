import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
        <Link className="nav-link" to="/profilePage">
            {/* <button>
                Profile Page
            </button> */}
            Profile Page
        </Link>

        <Link className="nav-link" to="/favoriteTrails">
            {/* <button>
                Favorite Trails
            </button> */}
            Favorite Trails
        </Link>

        <Link className="nav-link" to="/trailsToTry">
             {/* <button>
                To do list
            </button> */}
            To Do List
        </Link>
    </nav>
  )
}

export default Nav