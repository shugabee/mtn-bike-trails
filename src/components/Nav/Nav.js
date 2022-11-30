import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
        <Link to="/profilePage">
            <button>
                Profile Page
            </button>
        </Link>

        <Link to="/favoriteTrails">
            <button>
                Favorite Trails
            </button>
        </Link>

        <Link to="/trailsToTry">
             <button>
                To do list
            </button>
        </Link>
    </nav>
  )
}

export default Nav