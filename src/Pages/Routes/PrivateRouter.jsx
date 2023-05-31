import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import Loader from "../Shared/Loading/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
