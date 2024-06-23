import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../Images/Webweaverslogo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToAbout = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({
      top: screenHeight,
      behavior: 'smooth'
    });
    setMenuOpen(false); // Close the menu after scrolling
  };

  return (
    <div className='relative h-16 md:mt-0 md:mb-0 mb-12 -mt-12 md:h-[92px] flex flex-col items-center md:flex-row md:justify-center md:items-center bg-[#eae8dc]'>
      <div className='h-[72px] w-5/6 md:w-[1261px] my-20 md:my-0 bg-[#f8f7f1] md:bg-[#eae8dc] rounded-full flex justify-between items-center px-4 md:px-0'>
        <div className='flex items-center'>
          <div className='h-[60px] w-[60px] bg-rounded-full'>
            <Image src={logo} alt='logo' className='object-contain mx-3 md:mx-6 my-1' height={70} width={70} />
          </div>
          <h1 className='text-blue-950 mx-7 my-2 italic text-2xl md:opacity-0 font-mono'>Webweavers</h1>
        </div>
        <div className='hidden md:flex md:items-center md:w-1/2 justify-end mr-3'>
          <a href='#' className='text-gray-500 font-mono text-xl mx-4' onClick={scrollToAbout}>About</a>
          <a href='mailto:webweavers@miet.ac.in' className='text-white bg-blue-950 py-3 px-5 rounded-full text-center font-mono text-xl mx-4'>Contact us</a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-blue-950'>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-[#eae8dc] transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className='flex flex-col items-center my-44 justify-start h-full'>
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-blue-950'>
            <FiX size={30} />
          </button>
          <a href='#' className='text-gray-500 font-mono text-2xl mb-8' onClick={scrollToAbout}>About</a>
          <a href='mailto:webweavers@miet.ac.in' className='text-gray-500  py-3 px-6 rounded-full text-center font-mono text-2xl' onClick={() => setMenuOpen(false)}>Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
