import React from "react";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <header>
      <div className="flex ">
        <Sidebar />
        <div className="flex justify-center  w-full " />
      </div>
    </header>
  );
}

export default AdminDashboard;
