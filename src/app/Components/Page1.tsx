'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import heroimage1 from '../Images/heroimage1.gif';
import heroimage2 from '../Images/heroimage2.gif';
import heroimage3 from '../Images/heroimage3.gif';
import Navbar from './Navbar';

const Page1 = () => {
  // Refs for GSAP animation targets
  const image1Ref = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const image3Ref = useRef(null);
  const image1Refunder = useRef(null);
  const image3Refunder = useRef(null);
  const contentDivRef = useRef(null); 
  const contentDiv2Ref = useRef(null); 

  // Function to handle hover animation
  const handleHover = () => {
    gsap.to(image1Ref.current, { x: 100, duration: 0.3 });
    gsap.to(text1.current, { x: 40, duration: 0.3 });
    gsap.to(text2.current, { x: -30, duration: 0.3 });
    gsap.to(text3.current, { x: 30, duration: 0.3 });
    gsap.to(image1Refunder.current, { x: 50, duration: 0.3 });
    gsap.to(image3Ref.current, { x: -120, duration: 0.3 });
    gsap.to(image3Refunder.current, { x: -60, duration: 0.3, delay: 0 });
    gsap.to(contentDivRef.current, { x: 0, duration: 0.3 });
  };

  // Function to handle hover exit (reset animation)
  const handleHoverExit = () => {
    gsap.to(image1Ref.current, { x: 0, duration: 0.3 });
    gsap.to(text1.current, { x: 0, duration: 0.3 });
    gsap.to(text2.current, { x: 0, duration: 0.3 });
    gsap.to(text3.current, { x: 0, duration: 0.3 });
    gsap.to(image3Ref.current, { x: 0, duration: 0.3 });
    gsap.to(image3Refunder.current, { x: 0, duration: 0.3 });
    gsap.to(image1Refunder.current, { x: 0, duration: 0.3 });
  };

  // Function to run animations on component mount
  useEffect(() => {
    // Set initial position
    gsap.set(contentDivRef.current, { x: -600 });

    // Animate to final position
    gsap.to(contentDivRef.current, { x: 0, duration: 1, ease: "power3.out" });

    gsap.set(contentDiv2Ref.current, { x: -800 });

    // Animate to final position
    gsap.to(contentDiv2Ref.current, { x: 0, duration: 1, delay: 0.5, ease: "power3.out" });
  }, []);

  return (
    <>
      <div className='flex flex-col  justify-center items-center md:flex-row md:justify-center md:items-center h-full my-0 bg-[#eae8dc]'>
        {/* left section */}
        <div className='w-full h-[1000px] md:w-[1261px] my-2 md:h-[800px] flex flex-col justify-start items-center md:flex-row md:justify-between md:items-center'>
          <div className='w-full h-[400px] md:w-[500px] flex justify-start md:items-end overflow-hidden'>
            <div ref={contentDivRef} className='w-full md:w-[540px] h-full'>
              <div className='h-1/2 flex flex-col items-start justify-end'>
                <h1 className='text-5xl mx-5 md:mx-0 md:text-7xl font-mono'>Insurance</h1>
                <h1 className='text-5xl mx-5 md:mx-0 md:text-7xl font-mono'>Coverage You</h1>
                <h1 className='text-5xl mx-5 md:mx-0 md:text-7xl font-mono'>Can Count On</h1>
              </div>
              <div className='h-1/4 mx-6 my-4 md:mx-4 md:my-4'>
                <h1 className='text-lg md:text-2xl font-mono text-start'>
                  Wherever and whenever you need. It’s our job to protect you and what matters to you most.
                </h1>
              </div>
              <div className='h-1/4    flex justify-start items-start'>
                <a href='https://www.commudle.com/communities/webweavers' className='bg-blue-950 mx-7 my-2 md:mx-0 md:my-0  py-3 px-4 md:py-4 md:px-6 rounded-full text-white text-xl md:text-xl font-mono'>Connect us</a>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className='relative  w-full h-[500px] md:w-[661px] flex justify-center items-center md:h-[700px] overflow-hidden' // Removed overflow-hidden
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}>
            <div ref={contentDiv2Ref} className='md:w-full  h-[800px] w-[370px] md:h-full flex flex-col justify-center items-center'>
              <div className='relative h-[150px] md:h-1/3 w-full flex'>
                <div className='w-[150px] md:w-[290px] h-full bg-teal-300 relative' style={{ borderRadius: '50% 0 50% 0' }}>
                  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='relative w-full h-full'>
                      <div className='absolute top-0 left-0 w-full h-full bg-teal-300 rounded-full' style={{ borderRadius: '50% 0 50% 0' }}></div>
                      <div ref={image1Refunder} className='absolute top-[0%] left-0 w-full h-full bg-yellow-300 rounded-full' style={{ borderRadius: '50% 0 50% 0' }}></div>
                      <div ref={image1Ref} className='absolute top-[0%] left-0 w-full h-full bg-purple-500 rounded-full overflow-hidden' style={{ borderRadius: '50% 0 50% 0' }}>
                        <Image src={heroimage1} alt='image' layout="fill" objectFit="cover" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-2/3 h-full bg-[#0170c1] flex justify-center items-center text-xl md:text-4xl font-mono text-white' style={{ borderRadius: '0 0 0 50%' }}>
                  <h1 ref={text1} className='text-xl md:text-4xl font-mono text-white'>COLLABORATIVE</h1>
                </div>
              </div>
              <div className='relative h-[150px] md:h-1/3 w-full flex'>
                <div className='w-2/3 h-full bg-[#77a8c7] rounded-r-full flex justify-center items-center text-xl md:text-4xl font-mono text-white'>
                  <h1 ref={text2} className='text-xl md:text-4xl font-mono text-white'>CREATIVE</h1>
                </div>
                <div className='w-[150px] md:w-1/3 h-full bg-green-500 rounded-full relative'>
                  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='relative w-full h-full'>
                      <div className='absolute top-0 left-0 w-full h-full bg-teal-300 rounded-full'></div>
                      <div ref={image3Refunder} className='absolute top-[0%] left-0 w-full h-full bg-yellow-300 rounded-full'></div>
                      <div ref={image3Ref} className='absolute top-[0%] left-0 w-full h-full bg-purple-500 rounded-full overflow-hidden'>
                        <Image src={heroimage3} alt='image' layout="fill" objectFit="cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative h-[150px] md:h-1/3 w-full flex'>
                <div className='w-[150px] md:w-[290px] h-full bg-red-800 relative overflow-hidden' style={{ borderRadius: '0 0 0 50%' }}>
                  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='relative w-full h-full'>
                      <div className='absolute top-0 left-0 w-full h-full bg-teal-500 rounded-full' style={{ borderRadius: '0 0 0 50%' }}></div>
                      <div className='absolute top-[0%] left-0 w-full h-full bg-yellow-500 rounded-full' style={{ borderRadius: '0 0 0 50%' }}></div>
                      <div className='absolute top-[0%] left-0 w-full h-full bg-purple-500 overflow-hidden'>
                        <Image src={heroimage2} alt='image' layout="fill" objectFit="cover" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-2/3 h-full bg-[#0170c1] rounded-r-full flex justify-center items-center text-xl md:text-4xl font-mono text-white'>
                  <h1 ref={text3} className='text-xl md:text-4xl font-mono text-white'>INNOVATIVE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
