import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import Slide1 from '../../assets/home/slide1.jpg';
import Slide2 from '../../assets/home/slide2.jpg';
import Slide3 from '../../assets/home/slide3.jpg';
import Slide4 from '../../assets/home/slide4.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={'Form 11:00 AM to 10:00 PM'}
        subHeading={'ORDER ONLINE'}
      />
      <div className='w-11/12 mx-auto text-center mt-12'>
        <Swiper
          slidesPerView={1} // Default for smaller screens
          spaceBetween={10} // Default for smaller screens
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // Tablet view
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // PC view
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className='mySwiper mb-24'
        >
          <SwiperSlide className='flex flex-col items-center gap-2'>
            <img src={Slide1} alt='Slide1' className='mx-auto' />
            <h3 className='text-4xl uppercase text-center -mt-6 text-white'>
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col items-center gap-2'>
            <img src={Slide2} alt='Slide2' className='mx-auto' />
            <h3 className='text-4xl uppercase text-center -mt-6 text-white'>
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col items-center gap-2'>
            <img src={Slide3} alt='Slide3' className='mx-auto' />
            <h3 className='text-4xl uppercase text-center -mt-6 text-white'>
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col items-center gap-2'>
            <img src={Slide4} alt='Slide4' className='mx-auto' />
            <h3 className='text-4xl uppercase text-center -mt-6 text-white'>
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col items-center gap-2'>
            <img src={Slide1} alt='Slide1' className='mx-auto' />
            <h3 className='text-4xl uppercase text-center -mt-6 text-white'>
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
