import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClear } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className=' container fixed z-10 bg-opacity-30  bg-black '>
      <div className='  mx-auto flex items-center justify-between h-20 md:px-8'>
        {/* Logo */}
        <div className='text-2xl font-extrabold font-cinzel text-white mx-4 flex flex-col select-none'>
          Bistro-Boss
          <span className='text-sm'> R E S T A U R A N T</span>
        </div>

        <div className='md:hidden mx-4'>
          {isMenuOpen ? (
            <GrClear
              size={25}
              className='cursor-pointer'
              onClick={toggleMenu}
              aria-label='Close Menu'
            />
          ) : (
            <GiHamburgerMenu
              size={25}
              className='cursor-pointer'
              onClick={toggleMenu}
              aria-label='Open Menu'
            />
          )}
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-16 left-0 md:top-0 md:left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ease-in-out z-40`}
        >
          <div className='lg:ml-48 flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 md:p-0'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
              data-aos='fade-left'
            >
              HOME
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
              data-aos='fade-left'
            >
              CONTACT US
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
              data-aos='fade-left'
            >
              DASHBOARD
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
              data-aos='fade-left'
            >
              OUR MENU
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
              data-aos='fade-left'
            >
              OUR SHOP
            </NavLink>

            <div className='w-10 h-10'>
              <img src={Logo} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
