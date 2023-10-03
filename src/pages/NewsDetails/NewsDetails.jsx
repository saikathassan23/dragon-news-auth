import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import BreakingNews from '../../shared/Header/BreakingNews';
import Header from '../../shared/Header/Header';
import RightNav from '../../shared/RightNav/RightNav';

const NewsDetails = () => {
  const { newsId } = useParams();
  //   console.log('from news details page', newsId);
  const [data, setData] = useState([]);
  const [singleNews, setSingleNews] = useState([]);
  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((all) => {
        setData(all);
        const sd = all.find((d) => d._id === newsId);
        setSingleNews(sd);
      });
  }, [newsId]);
  //   console.log(singleNews);
  const { title, image_url, details } = singleNews;
  return (
    <>
      <Header />
      <BreakingNews />
      <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-5'>
        <div className='col-span-4 space-y-4 '>
          {/* implement here */}
          <div className='border pb-5 rounded-t-md rounded-b-md'>
            <div className=''>
              <img className='w-full mb-4' src={image_url} alt='' />
            </div>
            <div className='px-5 space-y-5'>
              <h1 className='text-2xl font-semibold'>{title}</h1>
              <p className='text-base '>{details}</p>
              <div>
                <button className='px-5 py-2 bg-red-600 text-white rounded-md flex items-center gap-2'>
                  <FaArrowLeft /> All News in this category
                </button>
              </div>
            </div>
          </div>
        </div>
        <RightNav />
      </div>
    </>
  );
};

export default NewsDetails;
