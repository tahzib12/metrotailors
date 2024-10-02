import { useState, useEffect } from 'react';
import carouselimg1 from '../Assets/metrocar1.png';
import carouselimg2 from '../Assets/metrocar2.png';
import carouselimg3 from '../Assets/metrocar3.png';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function CarouselSlide({ activeIndex, slideIndex, children }) {
  return (
    <div
      className={`${
        activeIndex === slideIndex ? 'block' : 'hidden'
      } w-full h-full transition-opacity duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
}

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      label: 'Never goes out of style 1',
      text: 'We Are a Mid-Tier Menswear Company Aming For The 20-35 Market',
      interval: 2000,
      image: carouselimg1, // Add your image paths here
    },
    {
      label: 'Never goes out of style 2',
      text: 'We Are a Mid-Tier Menswear Company Aming For The 20-35 Market',
      interval: 2000,
      image: carouselimg2,
    },
    {
      label: 'Never goes out of style 3 ',
      text: 'We Are a Mid-Tier Menswear Company Aming For The 20-35 Market',
      interval: 2000,
      image: carouselimg3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, slides[activeIndex].interval);

    return () => clearInterval(interval);
  }, [activeIndex, slides]);

  return (
    <div className="relative w-full h-100vh overflow-hidden">
      {slides.map((slide, index) => (
        <CarouselSlide key={index} activeIndex={activeIndex} slideIndex={index}>
        
          <img src={slide.image} alt={slide.label} className='w-full object-cover' loading='lazy' />
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-2 text-center text-white">
            <h3 className="text-[46px] font-bold" data-aos="zoom-in">{slide.label}</h3>
            <p className='text-[25px]' data-aos="fade-up">{slide.text}</p>
          </div>
        </CarouselSlide>
      ))}

      {/* Carousel controls */}
      <button
        onClick={() => setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-4 bg-black bg-opacity-50 text-white"
      >
       <IoIosArrowBack  className='text-[30px] '/>

      </button>
      <button
        onClick={() => setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-4 bg-black bg-opacity-50 text-white"
      >
       <IoIosArrowForward className='text-[30px]'/>
      </button>
    </div>
  );
}

export default Carousel;
