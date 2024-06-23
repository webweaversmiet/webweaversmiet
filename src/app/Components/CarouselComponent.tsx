import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../Images/about.jpeg';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <section className='bg-red-300 w-full h-600'>
        <section className="overflow-hidden w-full h-full relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="min-w-800 flex-shrink-0">
              <Image
                src={logo}
                alt="Slide 1"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
              />
            </div>
            <div className="min-w-800 flex-shrink-0">
              <Image
                src={logo}
                alt="Slide 2"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="min-w-800 flex-shrink-0">
              <Image
                src={logo}
                alt="Slide 3"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="min-w-800 flex-shrink-0">
              <Image
                src={logo}
                alt="Slide 4"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="min-w-800 flex-shrink-0">
              <Image
                src={logo}
                alt="Slide 5"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
          <div className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentIndex === 1 ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentIndex === 2 ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentIndex === 3 ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentIndex === 4 ? 'bg-blue-600' : 'bg-gray-300'}`} />
        </div>
      </section>
    </div>
  );
};

export default CarouselComponent;
