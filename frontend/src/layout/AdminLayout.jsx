import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../contexts/AuthContexts";

function AdminLayout() {
  const { user } = useCurrentUser();

  if (user.role === "admin") {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/signin" replace />;
}

export default AdminLayout;
