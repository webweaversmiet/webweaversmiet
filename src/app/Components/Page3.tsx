import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import nirdesh from '../Images/nirdesh.jpg';
import priyanshi from '../Images/priyanshi.jpg';
import tejus from '../Images/tejus.jpg';
import krishna from '../Images/krishna.jpg';
import prakhar from '../Images/prakhar.jpg';
import deepanshi from '../Images/deepanshi.jpg';
import shruti from '../Images/shruti.png';
import rishika from '../Images/rishika.jpg';
import ananya from '../Images/ananya.jpg';
import zaid from '../Images/zaid.jpg';

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const teamMembers = [
    { id: 1, name: 'Nirdesh Sharma', description: 'Leads the team, providing strategic vision and guidance.', image: nirdesh },
    { id: 2, name: 'Tejus Gupta', description: 'Handles administrative tasks and coordinates team activities as Secretary.', image: tejus },
    { id: 3, name: 'Deepanshi Gautam', description: 'Organizes and manages events seamlessly as Event Coordinator.', image: deepanshi },
    { id: 4, name: 'Krishna Sharma', description: 'Creates user-friendly interfaces as Senior Frontend Developer.', image: krishna },
    { id: 5, name: 'Abhishek Panwar', description: 'Expert in server-side logic and database management as Senior Backend Developer.', image: rishika },
    { id: 6, name: 'Ananya Choudhary', description: 'Designs visually appealing graphics and layouts as Senior Graphic Designer.', image: ananya },
    { id: 7, name: 'Rishika Yadav', description: 'Crafts engaging and impactful written content as Senior Content Writer.', image: rishika },
    { id: 8, name: 'Shruti Sharma', description: 'Oversees social media strategies and engagement as Social Media Manager.', image: shruti },
    { id: 9, name: 'Priyanshi Sharma', description: 'Creates user-centric and visually pleasing websites as Web Designer.', image: priyanshi },
    { id: 10, name: 'Prakhar Rai', description: 'Manages the planning and execution of events as Senior Event Manager.', image: prakhar },
    { id: 11, name: 'Mohammad Zaid', description: 'Manages the planning and execution of video projects as Senior Video Editor.', image: zaid },
    { id: 12, name: 'Nirdesh Sharma', description: 'Leads the team, providing strategic vision and guidance.', image: nirdesh },

  ];

  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to([...imageRefs.current, ...descRefs.current], {
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        onComplete: () => {
          setCurrentIndexes(prevIndexes => prevIndexes.map(index => (index + 3) % teamMembers.length));
          gsap.to([...imageRefs.current, ...descRefs.current], {
            opacity: 1,
            duration: 1,
            stagger: 0.5
          });
        }
      });
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
      <div className='h-1/5 w-full flex justify-center items-center'>
        <div className='w-5/6 h-full flex flex-col justify-center overflow-hidden items-start gap-0'>
          <span className='rounded-tr-xl py-1 px-5 text-white my-4 bg-blue-950'>
            <span ref={containerRef} className='text-lg md:text-xl font-mono'>Team</span>
          </span>
          <h1 ref={textRef} className='text-3xl md:text-5xl font-mono text-blue-950'>Our Dedicated Team</h1>
        </div>
      </div>
      <div className='h-auto md:h-3/4 w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center'>
        <div className='w-[90%] md:w-5/6 h-full flex flex-col md:flex-row justify-center items-center md:justify-center md:items-center border-black border-2'>
          {currentIndexes.map((index, idx) => (
            <div
              key={teamMembers[index].id}
              className='w-full md:w-1/3 h-[75vh] md:h-full border-b-2 md:border-r-2 md:border-b-0 border-black flex flex-col md:flex-none'
            >
              <div
                className='h-1/2 md:h-3/5 flex justify-center items-center'
              >
                <div
                  ref={el => { imageRefs.current[idx] = el; }}
                  className='w-[55%] h-[60%] md:w-[50%] rounded-tl-full rounded-tr-full rounded-br-full md:h-[60%] overflow-hidden '
                >
                  <Image src={teamMembers[index].image} layout="responsive" width={300} height={300} alt={`image of ${teamMembers[index].name}`} objectFit="cover" />
                </div>
              </div>
              <div
                
                className='h-1/2 md:h-2/5 border-t-2 border-black px-2'
              >
                <div
                ref={el => { descRefs.current[idx] = el; }}
                className='h-5/6 md:h-full p-6'>
                <div className='h-2/3 w-full flex justify-center items-center'>
                  <h1 className='text-xl font-mono text-slate-500 text-center'>{teamMembers[index].description}</h1>
                </div>
                <div className='h-1/3 w-full flex justify-center items-center'>
                  <div className='text-2xl font-bold italic text-slate-500'>{teamMembers[index].name}</div>
                </div>
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
