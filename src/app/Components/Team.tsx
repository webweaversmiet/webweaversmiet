'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/Webweavers.png';
// import webweaverslogo from '../images/Webweavers.png'
// import nirdesh from '../images/nirdesh.jpg';
// import deepanshi from '../images/Deepanshi.jpg';
// import tojo from '../images/tojo.jpg'
// import Krishna from '../images/krishna.jpg';
// import Shruti from '../images/shruti.webp';
// import bhati from '../images/bhati.jpg'
// import prakhar from '../images/prakhar.jpg'
// import harshita from '../images/harshita.jpg'
// import ananya from '../images/ananya.jpg'
// import rishika from '../images/Rishika.jpg'
// import abhishek from '../images/abhishek.jpg'
const teamMembers = [
  { src: logo, name: 'Nirdesh Sharma', role: 'Lead' },
  { src: logo, name: 'Abhishek Panwar', role: 'Secretary'},
  { src: logo, name: 'Tejus Gupta', role: 'Web Developer'},
  { src: logo, name: 'Krishna Sharma', role: 'Event Designer' },
  { src: logo, name: 'Deepanshi Gautam', role: 'Event Manager' },
  { src: logo, name: 'Aayush Bhati', role: 'PR Manager' },
  { src: logo, name: 'Shruti Sharma', role: 'Event Manager' },
  { src: logo, name: 'Ananya Choudhary', role: 'Graphics Designer' },
  { src: logo, name: 'Priyanshi Sharma', role: 'Event Manager' },
  { src: logo, name: 'Rishika Yadav', role: 'Event Manager'},
  { src: logo, name: 'Prakhar Rai', role: 'Event Manager'},
  { src: logo, name: 'Harshita Narang', role: 'Event Manager'},
];

const Team: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalMembers = teamMembers.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const membersPerPage = isMobile ? 1 : 3;

  const prev = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const next = () => {
    if (offset < Math.ceil(totalMembers / membersPerPage) - 1) {
      setOffset(offset + 1);
    }
  };

  return (

<>

      <div className="relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-light text-blue-400 mb-6 text-center">
  Meet Our Stellar Team! 🌟👩‍💻👨‍💻
</h2>
        <div
          className="parent flex transition-transform duration-1000"
          style={{ transform: `translateX(-${offset * 100}%)` }}
          ref={carouselRef}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member flex-shrink-0 w-full sm:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-6 shadow-lg text-center">
                <Image
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={member.src}
                  alt={member.name}
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-semibold text-teal-600">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={prev} className="bg-blue-400 text-white p-3 rounded-l-full mx-2 hover:bg-white hover:text-[#48A0A9] hover:border-2 focus:outline-none">Prev</button>
        <button onClick={next} className="bg-blue-400 text-white p-3 rounded-r-full mx-2 hover:bg-white hover:text-[#48A0A9] hover:border-2 focus:outline-none">Next</button>
      </div>
    </>
  );
};

export default Team;