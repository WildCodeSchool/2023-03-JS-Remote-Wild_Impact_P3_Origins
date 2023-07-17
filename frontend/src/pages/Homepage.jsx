import React from "react";
import HeaderSwiper from "../components/HeaderSwiper";
import AbonnementArguments from "../components/AbonnementArguments";

function Homepage() {
  return (
    <div className="container">
      <header className="header-container">
        <HeaderSwiper />
      </header>
      <AbonnementArguments />
    </div>
  );
}

export default Homepage;
