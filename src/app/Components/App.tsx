import React from 'react';
import Image from 'next/image';
import logo from '../Images/Webweavers.png'; // Update the path to your logo image
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-white text-gray-900 relative overflow-hidden">
    
      <div className="flex justify-between items-center px-8 py-4 bg-white">
        <div className="relative" style={{ top: '-20px' }}>
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>
        <div className="flex mb-3 md:mb-9 md:space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">HOME</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">UX WORK</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">UI PORTFOLIO</a>
        </div>
        <div className="flex md:space-x-4">
          <button className="bg-blue-500 text-white mb-3 md:mb-9 px-4 py-2 rounded-full hover:bg-blue-600">Contact us</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start mt-12 flex-grow text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          WebWeavers
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-5xl text-blue-500 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Weaving the future of web
        </motion.h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <span className="text-gray-600">✏️ UX Research</span>
          <span className="text-gray-600">• Digital Marketing</span>
          <span className="text-gray-600">• 🛠️ Agile Management</span>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          With the user testing results, let's redesign the app completely. With the user testing results, let's redesign the app completely.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-2 md:mb-0">View My Work</button>
          <button className="text-gray-600 hover:text-blue-500">View Video</button>
        </div>
      </div>
       
      <motion.div 
        className="flex justify-center space-x-8 py-6 md:py-9 bg-black"
       
      >
        <motion.div
          className="flex flex-col md:flex-row justify-around space-x-0 md:space-x-8 bg-black w-full md:w-5/6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <motion.button
            className="text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <div className="text-3xl md:text-5xl font-bold text-blue-500">10+</div>
            <div className="text-gray-100">Events <span role="img" aria-label="events">✨</span></div>
          </motion.button>
          <motion.div 
            className="h-16 bg-gray-400 md:w-px"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          ></motion.div> {/* Vertical line */}
          <motion.button
            className="text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="text-3xl md:text-5xl font-bold text-blue-500">12+</div>
            <div className="text-gray-100">Courses <span role="img" aria-label="courses">📚</span></div>
          </motion.button>
          <motion.div 
            className="h-16 bg-gray-400 md:w-px"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          ></motion.div> {/* Vertical line */}
          <motion.button
            className="text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <div className="text-3xl md:text-5xl font-bold text-blue-500">10K+</div>
            <div className="text-gray-100">Members <span role="img" aria-label="members">👥</span></div>
          </motion.button>
          <motion.div 
            className="h-16 bg-gray-400 md:w-px"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          ></motion.div> {/* Vertical line */}
          <motion.button
            className="text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            <div className="text-3xl md:text-5xl font-bold text-blue-500">500+</div>
            <div className="text-gray-100">Mentors <span role="img" aria-label="mentors">🧑‍🏫</span></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;

