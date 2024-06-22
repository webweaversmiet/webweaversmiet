'use client';
import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
    className='bg-[#0170c1]'
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: '50px',
        height: '50px',
        opacity: 0.5,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        animationDelay: '01s',
      }}
    />
  );
};

export default MouseFollower;
