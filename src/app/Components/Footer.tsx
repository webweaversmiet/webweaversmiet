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
            <a href="/services" className="block font-mono">Services</a>
            <a href="/about" className="block font-mono">About</a>
            <a href="/faq" className="block font-mono">FAQ</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl md:text-lg font-mono mb-4">Contact</div>
          <div className="space-y-1">
            <div className="font-mono text-center">123-456-7890</div>
            <div className="font-mono text-center">info@mysite.com</div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl md:text-lg font-mono mb-4">Address</div>
          <div className="space-y-1">
            <div className="font-mono">500 Terry Francine Street</div>
            <div className="font-mono">San Francisco, CA 94158</div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl md:text-lg font-mono mb-4">Social</div>
          <div className="space-y-1">
            <a href="https://facebook.com" target="_blank" className="block font-mono">Facebook</a>
            <a href="https://linkedin.com" target="_blank" className="block font-mono">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" className="block font-mono">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4">
        <div className="max-w-7xl border-t border-white mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-mono my-4">© 2024 by webweavers</div>
          <a href="/privacy-policy" className="text-sm my-4 font-mono">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
