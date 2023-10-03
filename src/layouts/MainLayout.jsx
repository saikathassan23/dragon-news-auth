import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='font-poppins max-w-7xl mx-auto'>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
