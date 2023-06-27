import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";

function AdminLayout() {
  return (
    <header>
      <div className="db-container">
        <Sidebar />
        <Outlet />
      </div>
    </header>
  );
}

export default AdminLayout;
