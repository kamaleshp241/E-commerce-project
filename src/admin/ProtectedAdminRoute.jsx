// src/admin/ProtectedAdminRoute.jsx

import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // 🚫 If not logged in, redirect to login
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ If logged in, show the admin pages
  return children;
};

export default ProtectedAdminRoute;
