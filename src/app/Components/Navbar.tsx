import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../Images/Webweaverslogo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='h-16 md:h-[112px] flex flex-col items-center md:flex-row md:justify-center md:items-center bg-[#f8f7f1]'>
      <div className='h-[72px] w-5/6 md:w-[1261px] my-20 md:my-0 bg-[#f8f7f1] rounded-full flex justify-between items-center px-4 md:px-0'>
        <div className='flex items-center'>
          <div className='h-[50px] w-[50px] bg-rounded-full'>
            <Image src={logo} alt='logo' className='object-contain mx-3 md:mx-6 my-1' height={50} width={50} />
          </div>
          <h1 className='text-blue-950 mx-7  text-2xl font-mono'>Webweavers</h1>
        </div>
        <div className='hidden md:flex md:items-center md:w-1/2 justify-end mr-3'>
          <a href='/about' className='text-gray-500 font-mono text-xl mx-4'>About</a>
          <a href='/contact' className='text-white bg-blue-950 py-2 px-5 rounded-full text-center font-mono text-xl mx-4'>Contact us</a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-blue-950'>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='absolute top-[112px] right-0 w-full md:hidden bg-[#eae8dc] flex flex-col items-end p-4'>
          <a href='/about' className='text-gray-500 font-mono text-xl mb-4'>About</a>
          <a href='/contact' className='text-white bg-blue-950 py-2 px-5 rounded-full text-center font-mono text-xl'>Contact us</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
