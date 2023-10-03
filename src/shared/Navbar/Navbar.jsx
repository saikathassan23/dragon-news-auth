import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import avatar from '../../assets/user.png';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogout() {
    logout()
      .then(() => {
        toast.error('logged out');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const navLinks = (
    <>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/career'}>Career</NavLink>
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5 text-gray-500'
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-5 text-gray-500'>
          {navLinks}
        </ul>
      </div>
      <div className='navbar-end flex items-center gap-3'>
        {user ? (
          <>
            <img
              src={user?.photoURL ? user.photoURL : avatar}
              className='w-10 rounded-full h-10'
              alt=''
            />
            <button
              onClick={handleLogout}
              className='px-6 py-2 bg-gray-900 text-white rounded-sm font-bold'
            >
              Logout
            </button>
          </>
        ) : (
          <Link to={'/login'}>
            <button className='px-6 py-2 bg-gray-900 text-white rounded-sm font-bold'>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
