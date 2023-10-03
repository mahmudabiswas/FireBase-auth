import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRawter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRawter;
