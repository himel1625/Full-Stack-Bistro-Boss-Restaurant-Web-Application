
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // if (loading) return <LoadingSpinner />;
  // if (user) return children;
  return <Navigate to='/Login' state={location.pathname} />;
};

export default PrivateRoute;
