import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ErrorLogo from '../../assets/Error/404.gif';

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Bistro-Boss | Error</title>
      </Helmet>
      <div className='flex items-center justify-center flex-col'>
        <img src={ErrorLogo} alt='ErrorPage' />
        <button
          onClick={() => navigate('/')}
          className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300'
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Error;
