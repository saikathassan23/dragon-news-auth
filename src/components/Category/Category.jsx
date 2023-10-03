import { NavLink } from 'react-router-dom';

const Category = ({ category }) => {
  // console.log(category);
  return (
    <div className='p-3'>
      <NavLink
        to={`/category/${category.id}`}
        className={({ isActive, isPending }) =>
          isActive ? 'bg-gray-100' : isPending ? 'pending' : ''
        }
      >
        <p className=''>{category.name}</p>
      </NavLink>
    </div>
  );
};

export default Category;
