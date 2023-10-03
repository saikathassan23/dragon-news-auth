import { updateProfile } from 'firebase/auth';
import { useContext, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const imageRef = useRef('');
  const navigate = useNavigate();

  //   register button
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(emailRef.current.value, passwordRef.current.value)
      .then((result) => {
        toast.success('Registration successfully');
        updateProfile(auth.currentUser, {
          displayName: nameRef.current.value,
          photoURL: imageRef.current.value,
        })
          .then(() => {
            console.log('profile updateProfileSuccess');
          })
          .catch((err) => {
            console.log(err);
          });
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      {/* user creation*/}

      <>
        <div className='hero h-[90vh]'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='text-center lg:text-left'>
              <h1 className='text-5xl font-bold'>Register now!</h1>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
              <div className='card-body'>
                <form onSubmit={handleRegister}>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>
                    <input
                      type='text'
                      ref={nameRef}
                      placeholder='Full name'
                      className='input input-bordered'
                    />
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      type='text'
                      ref={emailRef}
                      placeholder='email'
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Image Url</span>
                    </label>
                    <input
                      type='text'
                      ref={imageRef}
                      placeholder='image url'
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input
                      type='text'
                      ref={passwordRef}
                      placeholder='password'
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control mt-6 p-0'>
                    <button type='submit' className='btn btn-neutral'>
                      Register
                    </button>
                  </div>
                  <label className='label'>
                    Have an account?{' '}
                    <Link
                      to='/login'
                      className='label-text-alt link link-hover'
                    >
                      Please Login
                    </Link>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
