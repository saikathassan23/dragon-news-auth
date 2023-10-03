import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log('from private route location is ---- ', location);

  if (!user?.email) {
    return <Navigate state={location.pathname} to='/login' />;
  }

  if (loading) return <h1 className='text-5xl'>Loading</h1>;

  return children;
};

export default PrivateRoutes;
