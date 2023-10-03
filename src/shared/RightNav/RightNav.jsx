import { useContext } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import q1 from '../../assets/qZone1.png';
import q2 from '../../assets/qZone2.png';
import q3 from '../../assets/qZone3.png';
import { AuthContext } from '../../providers/AuthProvider';
const RightNav = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log('google login from left side nav', result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log('google login from left side nav', result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='space-y-4'>
      <h1 className='font-bold'>Login With</h1>
      <div className='space-y-2'>
        <button
          onClick={handleGoogleLogin}
          className='px-6 py-2 flex items-center gap-2  btn-outline border w-full  hover:bg-blue-500 hover:text-white rounded-sm text-blue-500 hover:border-none'
        >
          <FaGoogle />
          <span>Login with Google</span>
        </button>
        <button
          onClick={handleGithubLogin}
          className='px-6 py-2 flex items-center gap-2 btn-outline border w-full hover:bg-gray-500 hover:text-white rounded-sm text-black-500 hover:border-none'
        >
          <FaGithub />
          <span>Login with Github</span>
        </button>
      </div>
      <div className=''>
        <h1 className='font-bold mb-5 mt-8'>Find Us on</h1>
        <div className='flex items-center gap-2 p-3 border rounded-t-md'>
          <div className='text-[#3B599C] rounded-full w-10 h-10  flex items-center justify-center'>
            <FaFacebookF />
          </div>
          <a href=''>Facebook</a>
        </div>
        <div className='flex items-center gap-2 p-3 border-x '>
          <div className='text-[#58A7DE] rounded-full w-10 h-10  flex items-center justify-center'>
            <FaTwitter />
          </div>
          <a href=''>Twitter</a>
        </div>
        <div className='flex items-center gap-2 p-3 border rounded-b-md'>
          <div className='text-orange-500 rounded-full w-10 h-10  flex items-center justify-center'>
            <FaInstagram />
          </div>
          <a href=''>Instagram</a>
        </div>
      </div>
      {/* q zone */}
      <div className='bg-gray-300 p-5'>
        <h1 className='font-bold'>Q Zone</h1>
        <div className=''>
          <img className='mx-auto w-full' src={q1} alt='' />
          <img className='mx-auto w-full' src={q2} alt='' />
          <img className='mx-auto w-full' src={q3} alt='' />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
