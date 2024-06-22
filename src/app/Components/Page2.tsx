'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import about from '../Images/about.gif';
// import htmlLogo from '../Images/htmllogo.avif'; // replace with the actual path
import cssLogo from '../Images/csslogo.jpeg'; // replace with the actual path
import reactLogo from '../Images/reactlogo.png'; // replace with the actual path
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const whiteDiv1Ref = useRef<HTMLDivElement>(null);
  const whiteDiv2Ref = useRef<HTMLDivElement>(null);
  const whiteDiv3Ref = useRef<HTMLDivElement>(null);
  const whiteDiv4Ref = useRef<HTMLDivElement>(null);
  const aboutSpanRef = useRef<HTMLSpanElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const webweaversTextRef = useRef<HTMLDivElement>(null);

  const [showLogos, setShowLogos] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 30%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(whiteDiv1Ref.current, { y: -800 }, { y: 0, ease: "bounce.out", duration: 1.5 })
        .fromTo(whiteDiv2Ref.current, { y: -800 }, { y: 0, ease: "bounce.out", duration: 1.5 }, "<")
        .fromTo(whiteDiv3Ref.current, { y: -800 }, { y: 0, ease: "bounce.out", duration: 1.5 }, "<")
        .fromTo(whiteDiv4Ref.current, { y: -800 }, { y: 0, ease: "bounce.out", duration: 1.5 }, "<");

      gsap.fromTo(aboutTextRef.current!.children, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, stagger: 0.1, 
          scrollTrigger: {
            trigger: container,
            start: 'top 60%',
            toggleActions: 'play none none none'
          },
        }
      );
      gsap.fromTo(webweaversTextRef.current!.children, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, stagger: 0.1, 
          scrollTrigger: {
            trigger: container,
            start: 'top 60%',
            toggleActions: 'play none none none'
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (showLogos) {
      const tl = gsap.timeline();
      tl.fromTo(".logo", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 })
        .to(".logo", { opacity: 0, y: -20, duration: 0.5, delay: 1 });
      
      const timeout = setTimeout(() => setShowLogos(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showLogos]);

  const handleAboutHover = () => {
    setShowLogos(true);
  };

  const renderTextWithSpans = (text: string) => (
    <div style={{ display: 'inline', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}>
      {text.split(' ').map((char, index) => (
        <span key={index} style={{ display: 'inline-block', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}>
          {char}
        </span>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className='flex flex-col justify-center items-start md:flex-row md:justify-center w-full h-[1500px] md:h-screen rounded-tl-3xl rounded-tr-3xl bg-blue-950'>
      <div className='w-full  my-12 md:my-0 md:w-1/3 h-96 md:h-full flex flex-col justify-center items-center'>
        <div className='h-1/3 w-full  flex items-end relative'>
          <span
            ref={aboutSpanRef}
            className='py-1 px-2  md:py-2 md:px-3 mx-4 bg-purple-300 text-2xl md:text-3xl rounded-tr-3xl font-mono'
            onClick={handleAboutHover}
            onMouseEnter={handleAboutHover}
          >
            About
          </span>
         
        </div>
        <div className='h-2/3 w-full gap-0'>
          <h1 ref={aboutTextRef} className='text-3xl md:text-6xl text-[#eae8dc] mx-4 md:mx-12 my-4 md:my-10 font-mono'>
            {renderTextWithSpans('All  About')}
          </h1>
          <h1 ref={webweaversTextRef} className='text-2xl md:text-5xl text-[#eae8dc] mx-6 md:mx-20 -my-2 md:-my-8 font-mono'>
            {renderTextWithSpans('WEBWEAVERS')}
          </h1>
        </div>
      </div>
      <div className='w-full md:w-1/3 h-full my-3 md:my-4 px-4'>
        <div className='w-full h-1/3 flex justify-center items-center text-md md:text-lg px-4'>
          <p className='text-white font-mono'>
            Collaboration is key at Webweavers. We believe in working closely with clients, understanding their vision, and achieving goals together. Our team fosters a transparent, communicative environment, ensuring every project benefits from diverse perspectives. At Webweavers, we create solutions that reflect the collective creativity and expertise of our collaborative efforts.
          </p>
        </div>
        <div className='w-full h-1/3 md:my-0 my-3  flex justify-center items-center text-md md:text-lg px-4'>
          <p className='text-white font-mono'>
            At Webweavers, creativity is our cornerstone. We transform ideas into captivating digital experiences, ensuring every project is unique and engaging. Our creative team pushes boundaries, blending art and technology to craft visually stunning websites. With Webweavers, imagination comes to life, making your online presence truly unforgettable.
          </p>
        </div>
        <div className='w-full h-1/3 flex justify-center items-center text-md md:text-lg px-4'>
          <p className='text-white font-mono'>
            Innovation drives Webweavers forward. We embrace the latest technologies and trends to develop cutting-edge web solutions. Our innovative approach ensures your website remains ahead of the curve, providing exceptional functionality and user experience. Trust Webweavers to deliver forward-thinking solutions that set new standards in the digital landscape.
          </p>
        </div>
      </div>
      <div className='w-[80%] md:w-[400px] md:mx-0 mx-10 -my-30 h-full  overflow-hidden flex justify-start md:justify-end -my-6 items-end'>
        <div className='h-3/4   w-full'>
          <div className='h-1/3 flex md:flex-row md:justify-end'>
            {/* white div 1 */}
            <div ref={whiteDiv1Ref} className='w-1/2 h-full bg-[#eae8dc] rounded-tl-full rounded-bl-full rounded-tr-full md:rounded-tl-full md:rounded-bl-full'></div>
            {/* white div 2 */}
            <div ref={whiteDiv2Ref} className='w-1/2 h-full bg-[#0170c1]' style={{ borderRadius: '0 60% 0 0' }}></div>
          </div>
          <div className='h-1/3 flex flex-row justify-center'>
            {/* white div 3 */}
            <div ref={whiteDiv3Ref} className='w-1/2 h-full rounded-tl-full rounded-bl-full rounded-br-full bg-[#eae8dc]'></div>
            {/* white div 4 */}
            <div ref={whiteDiv4Ref} className='w-1/2 h-full bg-[#eae8dc] rounded-tr-full rounded-bl-full rounded-br-full'></div>
          </div>
          <div className='h-1/3 flex flex-row justify-center relative overflow-hidden'>
            <div style={{ borderRadius: '0 0 0 60%' }} className='w-1/2 h-full bg-[#5281a3]'></div>
            <div className='w-1/2 h-full rounded-bl-full rounded-br-full bg-[#eae8dc]'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
