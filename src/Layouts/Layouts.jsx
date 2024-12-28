import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Layouts = () => {
  return (
    <div className='font-inter'>
      <Navbar />
      <div className='container mx-auto md:mx-auto scroll-smooth  min-h-[calc(100vh-232px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
