import { useEffect, useState } from 'react';
import Category from '../../components/Category/Category';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className=''>
      <h1>All Categories</h1>
      {categories.map((category) => (
        <Category key={category.id} category={category}/>
      ))}
    </div>
  );
};

export default LeftNav;
