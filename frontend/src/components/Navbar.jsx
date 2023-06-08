import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="cont-logo">
        <h1 className="menu-logo">Origin's digital</h1>
      </div>
      <nav className="nav-container">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/games" className="menu-item">
              Jeux
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
