import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Header = () => {
  const navigate = useNavigate();
  function handleImageClick() {
    navigate('/');
  }
  return (
    <>
      <div className='text-center space-y-3 py-3'>
        <img
          onClick={handleImageClick}
          className='mx-auto cursor-pointer'
          src={logo}
          alt='logo'
        />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
    </>
  );
};

export default Header;
