import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import teamMember1 from '../Images/teamimage.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import prakhar from '../Images/prakhar.jpg'
import deepanshi from '../Images/deepanshi.jpg'
import shruti from '../Images/shruti.webp'
import rishika from '../Images/rishika.jpg'
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const teamMembers = [
    { id: 1, name: 'Member 1', description: 'Description fkpjk3nfoi2ejuond3ine ci3for Member 1', image: prakhar },
    { id: 2, name: 'Member 2', description: 'Description for Member 2', image: deepanshi  },
    { id: 3, name: 'Member 3', description: 'Description for Member 3', image: shruti  },
    { id: 4, name: 'Member 4', description: 'Description for Member 4', image: rishika  },
    // Add more members as needed
  ];

  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes(prevIndexes => prevIndexes.map(index => (index + 3) % teamMembers.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      gsap.fromTo(
        container,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        text,
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className='w-auto h-full md:h-screen rounded-tl-3xl rounded-tr-3xl gap-12 mb-12 md:gap-0 flex flex-col bg-[#eae8dc]'>
      <div className='h-1/5 w-full flex justify-center  items-center'>
        <div className='w-5/6 h-full flex flex-col justify-center items-start gap-0'>
          <span className='rounded-tr-3xl py-1 px-5 text-white my-4 bg-blue-950'>
            <span ref={containerRef} className='text-lg md:text-xl font-mono'>Team</span>
          </span>
          <h1 ref={textRef} className='text-3xl md:text-5xl font-mono text-blue-950'>Our Dedicated Team</h1>
        </div>
      </div>
      <div className='h-auto md:h-3/4 w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center'>
        <div className='w-[90%] md:w-5/6 h-full flex flex-col md:flex-row justify-center items-center md:justify-center md:items-center border-black border-2'>
          {currentIndexes.map((index) => (
            <div key={teamMembers[index].id} className='w-full md:w-1/3 h-[75vh] md:h-full border-b-2 md:border-r-2 md:border-b-0 border-black flex flex-col md:flex-none'>
              <div className='h-1/2 md:h-3/5 flex justify-center items-center'>
                <div className='w-[60%] md:h-4/6 md:w-[260px] overflow-hidden h-auto bg-purple-500 rounded-tl-full rounded-tr-full rounded-br-full'>
                  <Image src={teamMembers[index].image} width={300} height={300} alt={`image of ${teamMembers[index].name}`} objectFit="cover" />
                </div>
              </div>
              <div className='h-1/2 md:h-2/5 border-t-2 border-black px-2'>
                <div className='h-2/3 w-full flex justify-center items-center'>
                  <h1 className='text-xl font-mono text-slate-500 text-center'>{teamMembers[index].description}</h1>
                </div>
                <div className='h-1/3 w-full flex justify-center items-center'>
                  <div className='text-2xl font-mono italic text-slate-500'>{teamMembers[index].name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page3;
