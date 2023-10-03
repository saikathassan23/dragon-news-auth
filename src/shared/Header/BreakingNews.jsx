import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  const news = [
    'React is a great worldly used tools',
    'React is awesome',
    'View more of these news',
  ];
  return (
    <div className='bg-gray-100 p-5 flex items-center gap-5'>
      <Link to={'/latest'} className='px-6 py-2 bg-[#D72050] text-white rounded-sm font-bold'>
        Latest
      </Link>
      <Marquee speed={200} className='text-red-700' pauseOnHover={true}>
        {news.map((singleNews, indx) => (
          <Link className='ml-10' to={'/'} key={indx}>
            {singleNews}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
