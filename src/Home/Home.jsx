import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro-Boss </title>
      </Helmet>
      <div className=' text-center '>
        <Banner />
      </div>
      <Category />
    </>
  );
};

export default Home;
