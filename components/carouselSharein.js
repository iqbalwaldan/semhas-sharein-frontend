"use client";
import React, { useEffect, useState } from "react";

const slides = [
  {
    url: "/assets/images/chat-image.png",
    span: "Simplify 1",
    text: "Social Media Strategy with Sharein 1",
  },
  {
    url: "/assets/images/calendar-image.png",
    span: "One easy",
    text: "step to make your business more known",
  },
  {
    url: "/assets/images/frame-image.png",
    span: "Simplify 3",
    text: "Social Media Strategy with Sharein 3",
  },
  {
    url: "/assets/images/analytics-image.png",
    span: "Simplify 4",
    text: "Social Media Strategy with Sharein 4",
  },
];

export default function CarouselSharein() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const renderDots = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`w-3 h-3 2xl:w-4 2xl:h-4 rounded-full border mx-2 cursor-pointer ${
          slideIndex === currentIndex ? "bg-white" : ""
        }`}
      ></div>
    ));
  };

  const renderImages = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        className={`mx-auto ${
          slideIndex === currentIndex ? "block" : "hidden"
        }`}
      >
        <img src={slide.url} alt={`Slide ${slideIndex}`} />
      </div>
    ));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="h-screen w-register-left mx-auto p-20 bg-[url('/assets/images/Register-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="h-full bg-blue-500 bg-opacity-30 backdrop-blur-lg rounded-2xl border-[6px] border-[#5882C1] border-opacity-50">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="mx-auto w-[350px] h-[300px] 2xl:w-[502px] 2xl:h-[502px]">
            {renderImages()}
          </div>
          <p className="text-center font-extrabold text-3xl 2xl:text-5xl text-white px-14">
            <span className="font-extrabold text-3xl 2xl:text-5xl text-[#F7B217]">
              {slides[currentIndex].span}{" "}
            </span>
            {slides[currentIndex].text}
          </p>
          <div className="flex mx-auto mt-16 2xl:mt-20 mb-6">
            {renderDots()}
          </div>
        </div>
      </div>
    </div>
  );
}
