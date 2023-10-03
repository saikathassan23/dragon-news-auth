import { useEffect, useState } from 'react';
import BreakingNews from '../shared/Header/BreakingNews';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import Navbar from '../shared/Navbar/Navbar';
import News from '../shared/News/News';
import RightNav from '../shared/RightNav/RightNav';

const Home = () => {
  
 
  return (
    <div className=''>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
        <LeftNav />
        <div className='col-span-3'>
          <News/>
        </div>
        <RightNav />
      </div>
    </div>
  );
};

export default Home;
