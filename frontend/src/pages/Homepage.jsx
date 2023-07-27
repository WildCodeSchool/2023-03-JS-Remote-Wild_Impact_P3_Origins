import React from "react";
import HeaderSwiper from "../components/HeaderSwiper";
import AbonnementArguments from "../components/AbonnementArguments";
import FavorisSwiper from "../components/FavorisSwiper";
import NewsAnimated from "../components/NewsAnimated";
import ReprendreSwiper from "../components/ReprendreSwiper";
import PremiumSwiper from "../components/PremiumSwiper";
import Partenaires from "../components/Partenaires";

function Homepage() {
  return (
    <div className="container">
      <header className="header-container">
        <HeaderSwiper />
      </header>
      <FavorisSwiper />
      <NewsAnimated />
      <ReprendreSwiper />
      <PremiumSwiper />
      <AbonnementArguments />
      <Partenaires />
    </div>
  );
}

export default Homepage;
