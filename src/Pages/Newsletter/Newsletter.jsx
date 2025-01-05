import NewsletterImg from '../../assets/shop/banner2.jpg';

const Newsletter = () => {
  return (
    <div className='relative'>
      <img src={NewsletterImg} alt='' className='w-full h-auto' />
      <div
        className='absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-44 bg-white rounded-sm
       text-black flex justify-center items-center px-4'
      >
        <div className='text-center'>
          <p className='font-cinzel font-bold text-3xl'>Bistro Boss</p>
          <p className='font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
