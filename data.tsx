// 'use client'
// import React, { useState, useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import Image from 'next/image';
// import logo from '../app/Images/Webweavers.png'
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';
// import Herosection from './Components/Herosection';
// import about from '../app/Images/about.jpeg';
// import { motion } from 'framer-motion';
// import Foot from './Components/Foot';
// import Team from './Components/Team';
// import Aboutus from './Components/Aboutus';
// import TeamMember from './Components/TeamMember';
// import Event from './Components/Event';
// import App from './Components/App';
// const Page: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loaderVisible, setLoaderVisible] = useState(true);

//   useEffect(() => {
    
//     const elemContainer = document.querySelector("#elem-container") as HTMLElement;
//     const fixedImage = document.querySelector("#fixed-image") as HTMLElement

//     const swiper = new Swiper(".mySwiper", {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: 100,
//     });

//     setTimeout(() => {
//       setLoaderVisible(false);
//     }, 200)
//     return () => {
//       // Cleanup event listeners and any other side effects
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='font-{bellota}'>
//         {/* {loaderVisible && (
//         <div id="loader">
//           <h1>INNOVATIVE</h1>
//           <h1>CREATIVE</h1>
//           <h1>COLLABORATIVE</h1>
//         </div>
//       )} */}
//       <App/>
//        <div id="fixed-image"></div>
//       <div id="main">
//         <div id="page1">
//           <nav className="flex h-44 justify-between items-center px-5 py-2">
//             <Image src={logo} alt='logo' className='h-36 w-36 md:h-36 md:w-36 lg:h-36 lg:w-36 object-contain' height={140} width={140} />
//             <div className="flex gap-4">
//               <motion.h4 className='bg-[#0170c1] rounded-r-full rounded-l-full text-white py-3 px-5'><a href="#page2-bottom">About</a></motion.h4>
//               <h4 className='bg-[#0170c1] rounded-r-full rounded-l-full py-3 px-5 text-white'><a href="#">Contact</a></h4>
//             </div>
//           </nav>
//           <Herosection/>
//         </div>
//         <div id="page2">
//           <div id="page2-bottom" className='h-[100vh]'>
//             <div className='w-5/6'>
//           <h2 className="text-teal-500 text-sm font-semibold tracking-wide uppercase mb-4">About Us</h2>
//         <h1 className="text-3xl font-extrabold leading-tight text-gray-900 mb-4">Helping businesses <span className="text-teal-500">succeed</span> through the power of video.</h1>
        
//         <a href="#" className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700">
//           Sign Up for Free
//         </a>
//         </div>
//             <div id="bottom-part2">
//               <Image src={about} alt='about' />
//               <p>WebWeavers is a dynamic web society dedicated to empowering seekers with comprehensive knowledge in web development. We offer resources, workshops, and a supportive community to enhance skills, foster innovation, and inspire web enthusiasts to achieve their goals.</p>
//             </div>
//           </div>
//           <div id="gooey"></div>
//         </div>
//       </div>
//       <Aboutus/>
//       <Event/>
//       <TeamMember/>
//       <Team/>
//       <Foot/> 
      
//     </div>
//   );
// }

// export default Page;
