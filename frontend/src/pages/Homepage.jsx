import React from "react";
import EGamers from "../assets/Gamers-esport.png";

function Homepage() {
  return (
    <div className="container">
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">Homepage</h2>
        </div>
        <div className="image-container">
          <img
            className="main-picture"
            src={EGamers}
            alt="esport"
            width="100%"
          />
        </div>
      </header>
    </div>
  );
}

export default Homepage;
