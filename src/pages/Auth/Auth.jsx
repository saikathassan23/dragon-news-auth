import { useLocation } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname === '/auth/login' ? (
        <Login />
      ) : location.pathname === '/auth/register' ? (
        <Register />
      ) : (
        'Path not found'
      )}
    </>
  );
};

export default Auth;
