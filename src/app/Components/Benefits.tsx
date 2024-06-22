'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

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
    <div className='w-full h-[1500px] md:h-screen rounded-tl-3xl rounded-tr-3xl bg-[#eae8dc] md:overflow-hidden'>
      <div className='h-1/5 w-full flex justify-center items-center'>
        <div className='w-5/6 h-full flex flex-col justify-center overflow-hidden items-start gap-0'>
          <span className='rounded-tr-3xl py-2 px-3 text-white my-4 bg-blue-950'>
            <span ref={containerRef} className='text-xl md:text-2xl font-mono'>Benefits</span>
          </span>
          <h1 ref={textRef} className='text-3xl md:text-5xl font-mono text-blue-950'>Strength that speaks for itself</h1>
        </div>
      </div>
      <div className='h-auto w-auto md:w-full md:h-4/5 full  flex flex-col md:flex-row md:justify-start  md:items-start lg:flex-col lg:justify-center lg:items-center'>
        <div className='w-auto h-4/5 md:w-5/6 md:h-5/6   flex flex-col justify-center items-center md:flex-row md:justify-around md:items-start'>
          <div className='w-[90%] md:w-[400px] h-[350px]  md:h-3/5 transform transition-transform hover:scale-95 mt-4 md:mt-0'>
            <div className='bg-violet-300  h-[70px] md:h-1/4 border-t-4 border-l-4 border-r-4 w-full border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-violet-300 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full text-4xl md:text-5xl font-mono flex justify-center items-start bold text-blue-950'>Connections</div>
            <div className='bg-violet-300 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-violet-300 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full flex justify-center items-start text-base md:text-xl text-blue-950'>
              <div className='w-4/6 h-full text-gray-100 -my-16 font-mono'>Joining a web society fosters valuable connections with peers and professionals....</div>
            </div>
            <div className='bg-violet-300 h-[70px] md:h-1/4 w-full   border-b-4 border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
          </div>
          <div className='w-[90%] md:w-[400px] h-[350px] md:h-3/5 transform transition-transform hover:scale-95 mt-4 md:mt-0'>
            <div className='bg-[#5281a3] h-[70px] md:h-1/4 border-t-4 border-l-4 border-r-4 w-full border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-[#5281a3] h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full text-4xl md:text-5xl font-mono flex justify-center items-start text-blue-950'>Guidance</div>
            <div className='bg-[#5281a3] h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-[#5281a3] h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full flex justify-center items-start text-base md:text-xl'>
              <div className='w-4/6 h-full text-gray-100 -my-16 font-mono'>Receive personalized guidance from mentors to enhance skills and career growth....</div>
            </div>
            <div className='bg-[#5281a3] h-[70px] md:h-1/4 w-full border-b-4 border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
          </div>
          <div className='w-[90%] md:w-[400px] h-[350px] md:h-3/5 transform transition-transform hover:scale-95 mt-4 md:mt-0'>
            <div className='bg-gray-100 h-[70px] md:h-1/4 w-full border-t-4 border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-gray-100 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full text-4xl md:text-5xl font-mono flex justify-center items-start text-blue-950'>Insights</div>
            <div className='bg-gray-100 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-gray-100 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full flex justify-center items-start text-base md:text-xl'>
              <div className='w-4/6 h-full text-blue-300 -my-16 font-mono'>Gain valuable insights from industry experts to stay informed and innovative....</div>
            </div>
            <div className='bg-gray-100 h-[70px] md:h-1/4 w-full border-b-4 border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
