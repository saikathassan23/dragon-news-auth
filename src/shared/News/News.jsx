import { useEffect, useState } from 'react';
import Khobor from '../../components/Khobor';

const News = () => {
  const [khobor, setKhobor] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => {
        setKhobor(data);
      });
  }, []);

  return (
    <div className='space-y-5'>
      <h1>Dragon News Home</h1>
      {khobor &&
        khobor.map((khoborItem) => (
          <Khobor khobor={khoborItem} key={khoborItem._id} />
        ))}
    </div>
  );
};

export default News;
