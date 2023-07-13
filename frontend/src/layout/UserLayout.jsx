import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConnexionBar from "../components/ConnexionBar";

function UserLayout() {
  return (
    <div>
      <ConnexionBar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default UserLayout;
