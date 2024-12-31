import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import FeaturedImg from '../../assets/home/featured.jpg';

const Featured = () => {
  return (
    <div className='bg-featured bg-cover bg-fixed bg-center text-white'>
      <SectionTitle heading={'Featured item'} subHeading={'Check it out'} />
      <div className='flex flex-col md:flex-row items-center justify-center py-10 md:py-20 px-6 md:px-12 lg:px-36'>
        <div className='w-full md:w-1/2'>
          <img
            src={FeaturedImg}
            alt='Featured item'
            className='rounded-lg shadow-lg'
          />
        </div>
        <div className='mt-6 md:mt-0 md:ml-10 w-full md:w-1/2 text-base md:text-lg'>
          <p className='font-semibold text-sm md:text-base lg:text-lg'>
            AUG 20, 2024
          </p>
          <p className='my-2 text-lg md:text-xl lg:text-2xl font-bold'>
            WHERE CAN I GET SOME?
          </p>
          <p className='leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
