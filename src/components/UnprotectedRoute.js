import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const UnprotectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    // user is authenticated
    return <Navigate to="/home" />;
  }
  return children;
};