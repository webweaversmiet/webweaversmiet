'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Page4: React.FC = () => {


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
    <div className="flex h-full md:h-screen flex-col md:flex-row p-8 bg-[#eae8dc]">
      <div className='h-1/5 w-full md:w-1/3 md:flex justify-center  items-center'>
        <div className='w-5/6 h-full flex flex-col justify-center items-start gap-0'>
          <span className='rounded-tr-3xl md:mx-12 py-2 px-3 text-white -mx-2  my-4  bg-blue-950'>
            <span ref={containerRef} className='text-xl  md:text-2xl font-mono'>Event</span>
          </span>
          <span className=' h-16 md:h-32'>
  <h1 ref={textRef} className='text-3xl md:mx-12 md:text-4xl font-mono text-blue-950'>Relive the Highlights</h1>
</span>

        </div>
      </div>
      <div className="md:w-1/3 flex flex-col  bg-[#eae8dc] p-8 ">
        <h2 className="text-2xl font-mono mb-4">Frequently asked questions</h2>
        <div className="flex mb-4">
          <button className="mr-4 text-lg font-mono border-b-2 border-black">General</button>
          <button className="text-lg font-semibold">Setting up FAQs</button>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-mono mb-2">What is an FAQ section?</h3>
          <p className="text-gray-600 mb-4">
            An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
          </p>
          <div className="flex space-x-4">
            <button aria-label="Share on Facebook">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600"><use xlinkHref="#facebook-icon" /></svg>
            </button>
            <button aria-label="Share on Twitter">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600"><use xlinkHref="#twitter-icon" /></svg>
            </button>
            <button aria-label="Share on LinkedIn">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600"><use xlinkHref="#linkedin-icon" /></svg>
            </button>
            <button aria-label="Copy link">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600"><use xlinkHref="#link-icon" /></svg>
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-mono mb-2">Why do FAQs matter?</h3>
          <p className="text-gray-600">
            FAQs help provide quick answers to common questions, improving customer satisfaction and reducing support workload.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 md:flex-row md:justify-center md:items-center flex flex-col  p-8 ">
      <div className='w-auto h-4/5 md:w-5/6 md:h-5/6   flex flex-col justify-center items-center md:flex-row md:justify-around md:items-start'>
          <div className='w-[90%] md:w-[400px] h-[350px]  md:h-3/5 transform transition-transform hover:scale-95 mt-4 md:mt-0'>
            <div className='bg-green-300  h-[70px] md:h-1/4 border-t-4 border-l-4 border-r-4 w-full border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-green-300 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full text-4xl md:text-5xl font-mono flex justify-center items-start bold text-blue-950'></div>
            <div className='bg-green-300 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
            <div className='bg-green-300 h-[70px] md:h-1/4 w-full border-l-4 border-r-4 border-black rounded-r-full rounded-l-full flex justify-center items-start text-base md:text-xl text-blue-950'>
            </div>
            <div className='bg-green-300 h-[70px] md:h-1/4 w-full   border-b-4 border-l-4 border-r-4 border-black rounded-r-full rounded-l-full'></div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Page4;
