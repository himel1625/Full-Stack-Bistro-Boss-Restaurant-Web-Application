import CoverImg from '../../../assets/home/chef-service.jpg';
const Cover = ({ CoverCaption, CoverTitle }) => {
  return (
    <div className='relative'>
      <img src={CoverImg} alt='' />
      <div
        className='absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-44 bg-black opacity-30 rounded-sm
       text-black flex items-center justify-center px-4 '
      >
        <div className='text-center text-white'>
          <p className='uppercase lg:text-4xl font-cinzel font-bold'>
            {CoverCaption}
          </p>
          <p>{CoverTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
