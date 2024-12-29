import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import Slide1 from '../../assets/home/slide1.jpg';
import Slide2 from '../../assets/home/slide2.jpg';
import Slide3 from '../../assets/home/slide3.jpg';
import Slide4 from '../../assets/home/slide4.jpg';

const Category = () => {
  return (
    <div className='w-11/12 mx-auto text-center'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper mb-24 '
      >
        <SwiperSlide className='flex flex-col items-center'>
          <img src={Slide1} alt='Slide1' className='mx-auto' />
          <h3 className='text-4xl uppercase text-center -mt-24 text-white'>
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <img src={Slide2} alt='Slide2' className='mx-auto' />
          <h3 className='text-4xl uppercase text-center  -mt-24 text-white'>
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <img src={Slide3} alt='Slide3' className='mx-auto' />
          <h3 className='text-4xl uppercase text-center  -mt-24 text-white'>
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <img src={Slide4} alt='Slide4' className='mx-auto' />
          <h3 className='text-4xl uppercase text-center  -mt-24 text-white'>
            Desserts
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
