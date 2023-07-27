import React from "react";
import PartenairePicture from "../assets/logo-partenaire.png";

function Partenaires() {
  return (
    <section className="partenaires-wrapper">
      <h1 className="partenaires-title">Nos Partenaires</h1>
      <div className="partenaires">
        <div className="partenaires-items">
          <img src={PartenairePicture} alt="premium" height="300px" />
          <h4>Partenaire 1</h4>
        </div>
        <div className="partenaires-items">
          <img src={PartenairePicture} alt="premium" height="300px" />
          <h4>Partenaire 2</h4>
        </div>
        <div className="partenaires-items">
          <img src={PartenairePicture} alt="premium" height="300px" />
          <h4>Partenaire 3</h4>
        </div>
        <div className="partenaires-items">
          <img src={PartenairePicture} alt="premium" height="300px" />
          <h4>Partenaire 4</h4>
        </div>
        <div className="partenaires-items">
          <img src={PartenairePicture} alt="premium" height="300px" />
          <h4>Partenaire 1</h4>
        </div>
      </div>
    </section>
  );
}

export default Partenaires;
