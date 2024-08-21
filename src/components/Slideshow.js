import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import Logo from '../images/landinglogo.png';

const images = [slide1, slide2, slide3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateLogo, setAnimateLogo] = useState(false);

  const nextSlide = () => {
    triggerLogoAnimation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    triggerLogoAnimation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const triggerLogoAnimation = () => {
    setAnimateLogo(true);
    setTimeout(() => {
      setAnimateLogo(false);
    }, 700); // Duration of the animation (should match CSS)
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slideshow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition duration-700 ease-in-out"
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Logo in the center with animation */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={Logo}
          alt="Logo"
          className={`h-72 opacity-90 transition-opacity duration-700 ease-in-out ${animateLogo ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>

      {/* Social Media Icons at the bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-6 text-white">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
