import React from 'react';
import logo from '../Assets/metrologo.png'

const Navbar = () => {
  return (
    <nav className="bg-black text-white mt-5 mx-10 py-3 px-8 flex items-center justify-between rounded-full">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* <div className=" p-2 rounded-lg">
          <img
            src={logo}
            alt="Dorze logo"
            className="h-10 w-full"
          />
        </div> */}
        <div className='text-[18px] font-bold text-[#FFAF00]'>Metro Tailor</div>
        
      </div>

      {/* Links Section */}
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="hover:text-pink-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-500">
            Pages
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-500">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-500">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-500">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-500">
            Contact
          </a>
        </li>
      </ul>

      {/* Appointment Button */}
      <a
        href="#"
        className="bg-[#FFAF00] text-black px-6 py-2 rounded-full hover:bg-[#dd9e16] duration-300"
      >
        Appointment
      </a>
    </nav>
  );
};

export default Navbar;
