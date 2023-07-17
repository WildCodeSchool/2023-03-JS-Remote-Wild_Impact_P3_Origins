import React from "react";
import { Link } from "react-router-dom";
import { TfiGame, TfiHeadphoneAlt, TfiDesktop, TfiHome } from "react-icons/tfi";
import logoGamer from "../assets/logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="nav-footer">
        <div className="footer-logo">
          <div className="logo">
            <img
              className="main-picture"
              src={logoGamer}
              alt="logoGamer "
              width="30%"
            />
            <h1> Esport</h1>
          </div>
        </div>
      </div>
      <ul className="footer-links">
        <li className="footer-item">
          <Link to="/" className="footer-link">
            <TfiHome /> Home
          </Link>
          <div className="footer-item-wrapper" />
        </li>
        <li className="footer-item">
          <Link to="/games" className="footer-link">
            <TfiGame /> Jeux
          </Link>
          <div className="footer-item-wrapper" />
        </li>
        <li className="footer-item">
          <Link to="/teams" className="footer-link">
            <TfiHeadphoneAlt /> Equipes
          </Link>
          <div className="nav-item-wrapper" />
        </li>
        <li className="footer-item">
          <Link to="/videos" className="footer-link">
            <TfiDesktop /> Videos
          </Link>
          <div className="footer-item-wrapper" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
