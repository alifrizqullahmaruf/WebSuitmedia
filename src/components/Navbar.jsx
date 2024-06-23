import { useEffect, useState } from 'react';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  // State to track previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // State to manage navbar visibility based on scroll direction
  const [visible, setVisible] = useState(true);
  // State to manage mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track active menu item
  const [activeMenu, setActiveMenu] = useState('Work'); // Default active menu item is 'Work'

  // Function to handle scroll behavior
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  // Effect to add scroll event listener and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]); // Dependencies ensure effect runs when states change

  // Function to handle click on menu items
  const handleMenuClick = (item) => {
    setActiveMenu(item);
    // Additional logic can be added here based on clicked item
  };

  // Function to toggle mobile menu open/close
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`w-full font-medium text-white bg-orange-600 fixed top-0 z-50 transition-all duration-300 ${visible ? 'bg-opacity-100' : 'bg-opacity-70'}`}>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div id="logo">
          <img width={140} src={logo} alt="Logo" />
        </div>
        <div className="md:hidden">
          {/* Hamburger menu button */}
          <button onClick={handleToggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div id="menu" className={`md:flex md:items-center md:static absolute w-full md:w-auto left-0 md:left-auto transition-all duration-300 ${isMenuOpen ? 'top-16 bg-orange-600' : '-top-96'}`}>
          {/* Menu items */}
          <ul className="flex flex-col md:flex-row md:gap-4">
            <li
              onClick={() => handleMenuClick('Work')}
              className={`duration-150 hover:border-white hover:border-b-4 ${activeMenu === 'Work' ? 'border-white border-b-4' : ''} p-4 md:p-0`}
            >
              Work
            </li>
            <li
              onClick={() => handleMenuClick('About')}
              className={`duration-150 hover:border-white hover:border-b-4 ${activeMenu === 'About' ? 'border-white border-b-4' : ''} p-4 md:p-0`}
            >
              About
            </li>
            <li
              onClick={() => handleMenuClick('Services')}
              className={`duration-150 hover:border-white hover:border-b-4 ${activeMenu === 'Services' ? 'border-white border-b-4' : ''} p-4 md:p-0`}
            >
              Services
            </li>
            <li
              onClick={() => handleMenuClick('Ideas')}
              className={`duration-150 hover:border-white hover:border-b-4 ${activeMenu === 'Ideas' ? 'border-white border-b-4' : ''} p-4 md:p-0`}
            >
              Ideas
            </li>
            <li
              onClick={() => handleMenuClick('Careers')}
              className={`duration-150 hover:border-white hover:border-b-4 ${activeMenu === 'Careers' ? 'border-white border-b-4' : ''} p-4 md:p-0`}
            >
              Careers
            </li>
            <li
              onClick={() => handleMenuClick('Contact')}
              className={`duration-150 hover:border-white hover:border-b-4 ${activeMenu === 'Contact' ? 'border-white border-b-4' : ''} p-4 md:p-0`}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
