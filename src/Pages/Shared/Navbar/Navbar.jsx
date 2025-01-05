import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5'; // Modern close icon
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container fixed z-10 bg-opacity-30 bg-black'>
      <div className='mx-auto flex items-center justify-between h-20 md:px-8'>
        {/* Logo */}
        <div className='text-2xl font-extrabold font-cinzel text-white mx-4 flex flex-col select-none'>
          Bistro-Boss
          <span className='text-sm'> R E S T A U R A N T</span>
        </div>

        <div className='md:hidden mx-4'>
          {isMenuOpen ? (
            <IoCloseSharp
              size={30}
              className='cursor-pointer text-white'
              onClick={toggleMenu}
              aria-label='Close Menu'
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className='cursor-pointer text-white'
              onClick={toggleMenu}
              aria-label='Open Menu'
            />
          )}
        </div>

        {/* Mobile Menu - Only for mobile view */}
        <div
          className={`${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden absolute top-16 right-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40`}
        >
          <div className='flex flex-col items-center gap-6 p-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
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
            >
              DASHBOARD
            </NavLink>
            <NavLink
              to='/menu'
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? 'text-customYellow' : 'text-gray-700'
                } hover:text-customYellow`
              }
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
            >
              OUR SHOP
            </NavLink>

            <div className='w-10 h-10'>
              <img src={Logo} alt='logo' />
            </div>
          </div>
        </div>

        {/* Desktop and Tablet Menu - No Changes */}
        <div className='md:flex hidden items-center gap-10'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-customYellow' : 'text-gray-700'
              } hover:text-customYellow`
            }
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
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to='/menu'
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-customYellow' : 'text-gray-700'
              } hover:text-customYellow`
            }
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
          >
            OUR SHOP
          </NavLink>

          <div className='w-10 h-10'>
            <img src={Logo} alt='logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
