'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hero1 from '../Images/about.jpeg';
import hero2 from '../Images/about.jpeg';
import hero3 from '../Images/image2.jpg';
import { motion } from 'framer-motion';

const images = [hero1, hero2, hero3];

const Event: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center mb-12">
        <span className='text-[#0170c1]'>NextFest 2024:</span> Relive the Highlights
      </h1>
      <motion.div 
        className="flex flex-col md:flex-row justify-center items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <span className='text-[#0170c1]'>Glimpses of NextFest:</span>  A Workshop by WebWeavers
          </motion.h2>
          <motion.p 
            className="text-gray-700 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            Relive the moments from our exciting workshop where web enthusiasts came together to innovate, collaborate, and elevate their skills in the digital world.
          </motion.p>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Event Highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Keynote speeches from industry leaders.</li>
              <li>Hands-on workshops and coding sessions.</li>
              <li>Networking opportunities with professionals.</li>
              <li>Showcase of innovative projects and ideas.</li>
            </ul>
          </motion.div>
          
          

        </div>
        <div className="w-full md:w-1/2 p-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <div className="relative w-full h-[400px]">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`hero-${index}`}
                  className={`rounded-lg absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  layout="fill"
                  objectFit="cover"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
