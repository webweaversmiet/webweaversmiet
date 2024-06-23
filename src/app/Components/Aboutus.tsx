import React from 'react';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-24 lg:py-16 bg-white">
      <div className="lg:w-1/2">
        <h2 className="text-teal-500 text-sm font-semibold tracking-wide uppercase mb-4">About Us</h2>
        <h1 className="text-3xl lg:text-4xl font-extrabold  text-gray-900 mb-4">
          Helping businessessucceed through the power of video.
        </h1>
        <p className="text-gray-700 mb-6">
          Video is the future of business in this digital-focused world. Vidyard uses video to change the way companies connect and communicate. We help organizations of all sizes humanize their communications and personalize their customer experiences.
        </p>
        <a href="#" className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
          Sign Up for Free
        </a>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 relative">
        <div className="relative w-full h-64 lg:h-80">
          <Image
            src="/path/to/your/image.png" // Update this with the correct path to your image
            alt="Person working on a laptop"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
