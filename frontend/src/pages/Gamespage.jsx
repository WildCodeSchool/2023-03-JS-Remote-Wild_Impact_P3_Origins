import React from "react";
import { Link } from "react-router-dom";
import Gamer from "../assets/Gamer.png";

function Gamespage() {
  return (
    <div className="container">
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">Page des jeux</h2>
        </div>
        <div className="image-container">
          <img
            className="main-picture"
            src={Gamer}
            alt="esport"
            width="50%"
          />
        </div>


      </header>



    </div>
  );
}

export default Gamespage;
