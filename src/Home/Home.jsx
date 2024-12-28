import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner/Banner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro-Boss </title>
      </Helmet>
      <div>
        <Banner />
      </div>
    </>
  );
};

export default Home;
