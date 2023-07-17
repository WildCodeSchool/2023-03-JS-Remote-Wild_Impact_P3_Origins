import React from "react";
import AbonnementPicture from "../assets/personnage-utilisateur.png";

function AbonnementArguments() {
  return (
    <div className="abonnement-container">
      <div className="image-cont" id="Abonnement">
        <img src={AbonnementPicture} alt="premium" height="800px" />
      </div>
      <div className="text-container">
        <h3 className="abonnement-title">Pourquoi s'abonner ?</h3>
        <ul className="arguments-list">
          <li className="arguments-item">Contenu exclusif</li>
          <li className="arguments-item">Liste des favoris</li>
          <li className="arguments-item">Derniers news</li>
        </ul>
        <button className="abonnement-submit main-btn" type="submit">
          s'abonner
        </button>
      </div>
    </div>
  );
}

export default AbonnementArguments;
