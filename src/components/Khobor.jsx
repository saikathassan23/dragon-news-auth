import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from 'react-icons/fa';
import Rating from 'react-rating';
import { useLocation, useNavigate } from 'react-router-dom';

const Khobor = ({ khobor }) => {
  // console.log(khobor);
  const {
    _id: id,
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
  } = khobor;
  const date = author?.published_date?.split(' ')[0];
  const navigate = useNavigate();
  const location = useLocation();
  
  function handleReadMore() {
    navigate(`/news-details/${id}`);
  }

  return (
    <div className='space-y-4 border'>
      <div className='p-5 bg-gray-200'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img src={author?.img} className='w-12 rounded-full' alt='' />
            <div>
              <h1 className='font-semibold'>{author?.name}</h1>
              <p className='text-sm'>{date}</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </div>
      </div>
      {/* contents */}
      <div className='px-5 space-y-4'>
        <h1 className='text-2xl font-medium'>{title}</h1>
        <div>
          <img className='w-full' src={image_url} alt='' />
        </div>
        <p className='text-[#706F6F]'>{details.slice(0, 250)}</p>
        <span
          onClick={handleReadMore}
          className='text-sm text-orange-600 cursor-pointer'
        >
          Read More
        </span>
      </div>
      {/* divider */}
      <div className='px-5'>
        <div className='h-[2px] bg-gray-300'></div>
      </div>
      {/* rating and others */}
      <div className='px-5 flex items-center justify-between'>
        <div className='flex items-center gap-2 text-orange-600'>
          <Rating
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
          <span className='text-[#706F6F] mb-[2px]'>{rating.number}</span>
        </div>
        <div className='flex items-center gap-2 text-[#706F6F]'>
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default Khobor;
