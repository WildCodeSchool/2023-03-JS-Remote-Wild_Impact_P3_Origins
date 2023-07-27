import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiGame, TfiHeadphoneAlt, TfiDesktop, TfiHome } from "react-icons/tfi";
import logoGamer from "../assets/logo-white.png";
import { useCurrentUser } from "../contexts/AuthContexts";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { user } = useCurrentUser();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
            <img
              className="main-picture"
              src={logoGamer}
              alt="logoGamer "
              width="30%"
            />
            <h1> ORIGINS DIGITAL</h1>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setNavOpen(!navOpen)}
            type="button"
          >
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"} />
              <span className={navOpen ? "lineMiddle spin" : "lineMiddle"} />
              <span className={navOpen ? "lineBottom spin" : "lineBottom"} />
            </div>
          </button>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0.1s" : "0s",
        }}
      >
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "40px",
                transitionDelay: navOpen ? "0.1s" : "0s",
              }}
            >
              <TfiHome /> Home
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/games"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.2s" : "0s",
              }}
            >
              <TfiGame /> Jeux
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/teams"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.3s" : "0s",
              }}
            >
              <TfiHeadphoneAlt /> Equipes
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/videos"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.4s" : "0s",
              }}
            >
              <TfiDesktop /> Videos
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/signin"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.4s" : "0s",
              }}
            >
              <TfiDesktop /> Connexion
            </Link>
            <div className="nav-item-wrapper" />
          </li>

          {user.connected && (
            <li className="menu-item">
              <Link to="/profil" className="nav-link">
                Profil
              </Link>
              <div className="nav-item-wrapper" />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
