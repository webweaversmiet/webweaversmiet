import React from 'react';
import Image from 'next/image';
import hero from '../Images/image3.webp';
import { motion } from 'framer-motion';

const Herosection: React.FC = () => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row justify-center h-[100vh] items-start bg-white p-8 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <span className='text-[#0170c1]'>WebWeavers</span><div className="text-lg md:text-[1.5rem] ">Weaving the future of web.</div>
        </motion.h1>
        <motion.p 
          className="text-gray-700 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
         Empowering web developers to innovate through hands-on workshops, collaborate with industry leaders and peers, and elevate their skills. Join us to push digital boundaries and shape the future of web development together.
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.5 }}
        >
          <motion.button 
            className="bg-[#0170c1] hover:bg-[#0170d9] text-white px-4 py-2 rounded-l-full rounded-r-full w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
          >
            Connect with us 
          </motion.button>
          <motion.button 
            className="border rounded-l-full rounded-r-full border-gray-400 text-gray-800 px-2 py-2 w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
          >
            View More
          </motion.button>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          <Image
            src={hero}
            alt="hero"
            className="rounded-lg"
            width={700} // Adjust width based on your image size
            height={400} // Adjust height based on your image size
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Herosection;
