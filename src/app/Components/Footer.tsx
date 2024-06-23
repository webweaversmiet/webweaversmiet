import React from 'react';
import Image from 'next/image';
import logo from '../Images/Webweaverslogo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row  justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-lg  font-mono mb-4 gap-2 flex flex-row">
            <Image src={logo} alt="logo" className="object-contain" height={50} width={50} />
          <div className="text-2xl md:opacity-0 md:text-xl md: font-mono italic py-2">Webweavers</div>
          </div>
          <div className="space-x-4 md:space-x-0 lg:space-y-4 md:space-y-1 flex flex-row md:flex-col md:justify-start justify-between">
            <a  className="block font-mono">Services</a>
            <a  className="block font-mono">About</a>
            <a  className="block font-mono">FAQ</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl md:text-lg font-mono mb-4">Contact</div>
          <div className="space-y-1">
            <div className="font-mono">+917900271204</div>
            <div className="font-mono">webweavers@miet.ac.in</div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl md:text-lg font-mono mb-4">Address</div>
          <div className="space-y-1">
            <div className="font-mono">N.H.58,Delhi-Roorkee Highway,</div>
            <div className="font-mono">Baghpat Bypass Road Crossing,</div>
            <div className="font-mono">Meerut Uttar Pradesh 250005</div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl md:text-lg font-mono mb-4">Social</div>
          <div className="space-y-1">
            <a href="https://github.com/webweaversmiet" target="_blank" className="block font-mono">Github</a>
            <a href="https://www.linkedin.com/company/webweaversmiet/" target="_blank" className="block font-mono">LinkedIn</a>
            <a href="https://www.instagram.com/webweaversmiet?igsh=MWhod2VlMjIxMHM0bA==" target="_blank" className="block font-mono">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4">
        <div className="max-w-7xl border-t border-white mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-mono my-4">© 2024 by webweavers</div>
          <span className="text-sm my-4 font-mono">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
