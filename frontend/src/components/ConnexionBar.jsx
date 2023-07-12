import React from "react";
import { Link } from "react-router-dom";

function ConnexionBar() {
  return (
    <div className="connexionBar">
      <Link to="#Abonnement" className="Abonner-btn">
        Pourquoi s'abonner?
      </Link>
      <Link to="/profil" className="base-btn">
        Connexion
      </Link>

      <Link to="/admin/" className="base-btn">
        Administrateur
      </Link>
    </div>
  );
}

export default ConnexionBar;
