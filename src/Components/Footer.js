import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            {/* <div className="bg-pink-500 p-2 rounded-md mr-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div> */}
            <span className="text-2xl font-bold">METRO TAILORS</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Services', 'Faq', 'Contact Us'].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-white flex items-center w-[100px]">
                  <span className="mr-2">›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FiMapPin className="mr-2 mt-1 text-pink-500" size={20} />
              <span>Robertsganj<br />Sonbhadera, UP</span>
            </li>
            <li className="flex items-center">
              <FiPhone className="mr-2 text-pink-500" size={20} />
              <span>308-446-7904</span>
            </li>
            <li >
                <a href="mailto:tahzib.ansari01@gmail.com" className="flex items-center">
              <FiMail className="mr-2 text-pink-500" size={20} />
              <span>metro@Email.Com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-gray-800 text-white p-2 mb-2 rounded-lg focus:outline-none"
            />
            <button className="bg-[#FFAF00] text-black py-2 rounded-full hover:bg-[#dd9e16] transition duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;