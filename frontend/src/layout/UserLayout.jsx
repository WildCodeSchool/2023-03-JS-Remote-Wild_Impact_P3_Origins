import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import ConnexionBar from "../components/ConnexionBar";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <div>
      {/* <ConnexionBar /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
