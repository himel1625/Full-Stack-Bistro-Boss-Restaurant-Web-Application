import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import Contact from '../Pages/Contact/Contact';
import Featured from '../Pages/Featured/Featured';
import Newsletter from '../Pages/Newsletter/Newsletter';
import PopularMenu from '../Pages/PopularMenu/PopularMenu';
import Recommendation from '../Pages/Recommendation/Recommendation';
import Testimonial from '../Pages/Testimonial/Testimonial';

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
      <Newsletter />
      <PopularMenu />
      <Contact />
      <Recommendation />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
