import { useContext } from "react";
import { Appcontext } from "../context/AppContex";
import { Navigate } from "react-router-dom";

const OwnPrivateRoute = ({ children }) => {
  const { token } = useContext(Appcontext);
  if (token) {
    return children;
  }

  return <Navigate to={"/registration"} replace></Navigate>;
};

export default OwnPrivateRoute;
