import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../contexts/AuthContexts";
import Sidebar from "../pages/admin/Sidebar";

function AdminLayout() {
  const { user } = useCurrentUser();

  if (user.role === "admin") {
    return (
     <header>
      <div className="db-container">
        <Sidebar />
        <Outlet />
      </div>
     </header>
    );
  }
  return <Navigate to="/signin" replace />;
}

export default AdminLayout;
