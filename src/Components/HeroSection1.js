import React from "react";
import img1 from '../Assets/hero1.jpg'
import img2 from '../Assets/hero2.jpg'
import img3 from '../Assets/hero3.jpg'

const HeroSection1 = () => {
  return (
    <section className="bg-black text-white py-12 px-8 md:flex md:items-center">
      {/* Left Side: Text Section */}
      <div className="md:w-1/2 space-y-4 mx-20" data-aos="fade-up">
        <h1 className="text-5xl font-bold leading-tight" >
          We Speak In Thread And Needles
        </h1>
        <p className="text-lg text-gray-400">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before final copy
          is available.
        </p>
        <button className="bg-[#FFAF00] text-black px-6 py-2 rounded-full hover:bg-[#dd9e16] duration-300">
          GET STARTED
        </button>
      </div>

      {/* Right Side: Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex gap-3 items-center justify-center relative">
        {/* Vertical large image */}
        <div className="md:w-3/4 w-full h-auto border-r-8 border-b-8 border-red-600" data-aos="fade-right">
          <img
            src={img1} 
            alt="Tailoring suit"
            className="w-full h-[500px] object-cover" loading='lazy'
          />
        </div>
        <div className="md:w-3/4 w-full h-auto  border-l-8 border-b-8 border-red-600" data-aos="fade-left">
          <img
            src={img2}
            alt="Tailoring suit"
            className="w-full h-[500px] object-cover" loading='lazy'
          />
        </div>

        {/* Circular overlay image */}
        <div className="absolute  bottom-[-25%] transform translate-y-1/2 -translate-x-1/2 border-8 border-red-600 rounded-full overflow-hidden" data-aos="fade-up">
          <img
            src={img3} 
            alt="Woman with measuring tape"
            className="w-[250px] h-[250px] object-cover " loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
