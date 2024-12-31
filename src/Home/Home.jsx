import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import Contact from '../Pages/Contact/Contact';
import Featured from '../Pages/Featured/Featured';
import PopularMenu from '../Pages/PopularMenu/PopularMenu';

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
      <PopularMenu />
      <Featured />
      <Contact />
    </>
  );
};

export default Home;
