import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext"; 

const UnprotectedRoute = ({ children }) => {
  const { user, isAuthFetched } = useAuthContext()

  if (isAuthFetched && user) {
    return <Navigate to="/users" replace />;
  }

  return children;
};

export default UnprotectedRoute