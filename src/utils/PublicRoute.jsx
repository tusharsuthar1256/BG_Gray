import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../utils/UserProvider.jsx";

const PublicRoute = () => {
  const { user } = useContext(UserContext);

  // Redirect to Editor if the user is already logged in
  return user ? <Navigate to="/editior" /> : <Outlet />;
};

export default PublicRoute;
