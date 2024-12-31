import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const Testimonial = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/reviews.json') // Assuming the file is in the public folder
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className='mt-10'>
      <SectionTitle heading='What Our Clients Say' subHeading='TESTIMONIALS' />
      <div className='mt-20 mb-20'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          {menu.map(item => (
            <SwiperSlide key={item._id}>
              <div className='p-6 bg-white shadow-lg rounded-lg text-center'>
                <p className='text-yellow-500 font-bold mb-2'>
                  Rating: {item.rating} ★
                </p>
                <p className='text-gray-700 w-2/3 text-center mx-auto'>{item.details}</p>
                <h3 className='text-3xl mt-6 text-yellow-600 font-semibold mb-2'>{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
