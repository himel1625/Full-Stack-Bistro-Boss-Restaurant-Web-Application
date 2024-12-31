import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('../menu.json')
      .then(res => res.json())
      .then(data => {
        const PopularItem = [...data].filter(
          item => item.category === 'popular',
        );
        setMenu(PopularItem);
      });
  }, []);

  const CustomButton = () => (
    <button className='bg-transparent font-bold text-black border-0 border-b-2 border-black rounded-none text-base py-1.5 px-4 hover:bg-yellow-400 hover:bg-opacity-10 hover:border-black'>
      Your Button Text
    </button>
  );

  return (
    <div>
      <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'} />
      <div className='md:grid md:grid-cols-2 gap-6 items-center justify-evenly mb-10 mt-10'>
        {menu.map(item => (
          <div key={item._id} className='md:flex items-center justify-center'>
            <div>
              <img
                className='h-24 w-24 rounded-full text-center mx-auto'
                src={item.image}
                alt='img'
              />
            </div>
            <div className='mx-6'>
              <div className='flex gap-6'>
                <p className='text-xl font-bold font-cinzel'>
                  {item.name}--------------
                </p>
                <p className='font-cinzel font-bold text-yellow-600'>
                  {item.price}
                </p>
              </div>
              <p className='font-bold font-inter w-96'>{item.recipe}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mb-10'>
        <CustomButton className='mt-4'>VIEW FULL MENU</CustomButton>
      </div>
    </div>
  );
};

export default PopularMenu;
