'use client'
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Footer from './Components/Footer';
import MouseFollower from './Components/MouseFollower';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Benefits from './Components/Benefits';

const Page: React.FC = () => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  return (
    <div>
          <Navbar/>
          <Page1 />
          <Page2 />
          <Benefits />
          <Page3 />
          <Page4 />
          <Footer />
          {/* <MouseFollower /> */}
        </div>
      
      
      
  );
}

export default Page;
