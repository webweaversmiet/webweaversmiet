import React from 'react';
import Image from 'next/image';
import logo from '../Images/Webweavers.png';

const TeamMember = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Meet Our Stellar Team! 🌟👩‍💻👨‍💻
          </p>
          <p className="text-base text-gray-700 md:text-lg">
          Get to know the brilliant minds behind our success, each contributing unique skills and passion.
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm text-gray-800">Product Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="text-sm text-gray-800">Design Team Lead</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Anthony Geek</p>
              <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Alice Melbourne</p>
              <p className="text-sm text-gray-800">Human Resources</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Martin Garix</p>
              <p className="text-sm text-gray-800">Bad boy</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Andrew Larkin</p>
              <p className="text-sm text-gray-800">Backend Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Sophie Denmo</p>
              <p className="text-sm text-gray-800">Designer UI/UX</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-20 h-20 mb-2 rounded-full shadow align center"
              src={logo}
              alt="Person"
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Benedict Caro</p>
              <p className="text-sm text-gray-800">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember;
