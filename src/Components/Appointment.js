import React, { useEffect } from 'react';
import img1 from '../Assets/member4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppointmentSection = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
        once: false,
        easing: 'ease',
    });
    AOS.refresh();
}, []);

  return (
    <div className="bg-black text-white py-10 flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/3">
        <img
          src={img1}
          alt="Tailor"
          className="w-[300px] h-full object-cover mx-auto" data-aos="fade-down" loading='lazy'
        />
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <p className="text-red-500 mb-2">APPOINTMENT</p>
          <h2 className="text-3xl font-bold mb-4">
            Do You Have Any Questions? We Are Here To Answer
          </h2>
          <p className="mb-4">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-up">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
            />
            <div className="flex space-x-4">
              <input
                type="date"
                placeholder="Date"
                className="w-1/2 p-2 bg-gray-800 rounded-lg focus:outline-none"
              />
              <input
                type="time"
                placeholder="Time"
                className="w-1/2 p-2 bg-gray-800 rounded-lg focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FFAF00] text-black px-6 py-2 rounded-full hover:bg-[#dd9e16] transition duration-300"
            >
              GET APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;