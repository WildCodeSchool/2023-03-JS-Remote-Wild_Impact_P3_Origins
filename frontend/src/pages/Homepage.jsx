import React from "react";
import HeaderSwiper from "../components/HeaderSwiper";
import Gabarits from "../components/Gabarits";

function Homepage() {
  return (
    <div className="container">
      <header className="header-container">
        <HeaderSwiper />
      </header>
      <section>
        <Gabarits />
      </section>
    </div>
  );
}

export default Homepage;
