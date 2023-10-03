import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('from login pageeeee', location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success('Login successful');
        navigate(location?.state ? location?.state : '/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      {/* login */}
      <div className='hero h-[90vh] bg-base-100'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <form onSubmit={handleLogin}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='text'
                    placeholder='email'
                    name='email'
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='text'
                    placeholder='password'
                    name='password'
                    className='input input-bordered'
                  />
                  <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className='form-control mt-6 p-0'>
                  <button type='submit' className='btn btn-neutral'>
                    Login
                  </button>
                </div>
              </form>
              <label className='label'>
                New here?{' '}
                <Link to='/register' className='label-text-alt link link-hover'>
                  Create an account
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
