import { Navigate } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  //we have to wait until user get set or that will find user false and next statement will execute and navigate to login through we are logged in
  if (loading) return <h1 className="text-6xl">Loading...</h1>;

  if (!user.email) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
