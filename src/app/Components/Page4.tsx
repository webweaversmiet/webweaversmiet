import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import nextfest from '../Images/eventsecnextfest.png';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import caroimage1 from '../Images/heroimage3.gif';

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
      {/* Left Panel */}
      <div className="h-1/5 w-full md:w-1/3 md:flex justify-center items-center">
        <div className="w-5/6 h-full flex flex-col justify-center items-start gap-0">
          <span className="rounded-tr-xl md:mx-12 py-2 px-3 text-white -mx-2 my-4 bg-blue-950">
            <span ref={containerRef} className="text-xl md:text-2xl font-mono">
              Event
            </span>
          </span>
          <span className="h-20 overflow-hidden md:h-32">
            <h1 ref={textRef} className="text-3xl md:mx-12 md:text-3xl font-mono text-blue-950">
              Relive the Highlights
            </h1>
          </span>
        </div>
      </div>
      {/* Middle Panel */}
      <div className="md:w-1/3 flex flex-col bg-[#eae8dc] p-8">
        <Image src={nextfest} alt="NextFest" width={400} height={300} className="rounded-lg" />
        <h2 className="text-2xl font-mono mb-4">Experience NextFest: A Journey in Innovation 🚀</h2>
        <div className="mb-4">
          <h3 className="text-xl font-mono mb-2">Discover the Excitement</h3>
          <p className="text-gray-600 mb-4">
            Step into the world of Next.js with NextFest! Join us as we rewind through a day filled with inspiration, learning, and collaboration. From insightful workshops to engaging discussions, relive the highlights of our event where 100 passionate individuals converged at Audi-3. Explore the latest in web development and discover how Next.js can reshape your projects.
          </p>
          <div className="flex space-x-4">
            <button aria-label="Share on Facebook">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600">
                <use xlinkHref="#facebook-icon" />
              </svg>
            </button>
            <button aria-label="Share on Twitter">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600">
                <use xlinkHref="#twitter-icon" />
              </svg>
            </button>
            <button aria-label="Share on LinkedIn">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600">
                <use xlinkHref="#linkedin-icon" />
              </svg>
            </button>
            <button aria-label="Copy link">
              <svg width="24" height="24" fill="currentColor" className="text-gray-600">
                <use xlinkHref="#link-icon" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-mono mb-2">Why NextFest Matters</h3>
          <p className="text-gray-600">
            NextFest isn&apos;t just about technology; it&apos;s about fostering connections and inspiring innovation. Whether you&apos;re a seasoned developer or just starting your journey, NextFest offers a platform to learn, grow, and envision the future of web development. Join us in celebrating creativity and exploration in the digital age.
          </p>
        </div>
      </div>
      {/* Right Panel */}
      <div className="md:w-1/3 md:flex-row md:justify-center md:items-center flex flex-col p-8 relative overflow-hidden">
        <div className="relative  -mx-12 md:mr-0 w-[450px] md:w-full h-[40%] md:h-[300px] flex flex-col justify-center items-center md:flex-row md:justify-around md:items-start">
          {/* Carousel */}
            <Carousel 
              autoPlay 
              infiniteLoop 
              showThumbs={false} 
              showStatus={false} 
              showIndicators={false} 
              className="w-full h-full"
            >
              <div>
                <Image src={caroimage1} alt="Carousel Image 1" className="w-full h-full object-cover" />
              </div>
              <div>
                <Image src={caroimage1} alt="Carousel Image 2" className="w-full h-full object-cover" />
              </div>
              <div>
                <Image src={caroimage1} alt="Carousel Image 3" className="w-full h-full object-cover" />
              </div>
              <div>
                <Image src={caroimage1} alt="Carousel Image 4" className="w-full h-full object-cover" />
              </div>
              <div>
                <Image src={caroimage1} alt="Carousel Image 5" className="w-full h-full object-cover" />
              </div>
              <div>
                <Image src={caroimage1} alt="Carousel Image 6" className="w-full h-full object-cover" />
              </div>
            </Carousel>
        </div>
        
      </div>
    </div>
  );
};

export default Page4;
