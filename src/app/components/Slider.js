"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Adjust the time as needed

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [currentIndex, slides.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!slides || slides.length === 0) return <div>Loading...</div>;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full text-xl sm:text-2xl"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full text-xl sm:text-2xl"
      >
        <FaArrowRight />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`text-sm sm:text-base ${currentIndex === index ? "text-blue-500" : "text-gray-400"}`}
          >
            <FaCircle />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
