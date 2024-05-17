import React from "react";

export default function HeroTermsAndConditions() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url('/assets/images/home-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl 2xl:text-7xl font-semibold text-white">
            Terms and Conditions
          </h1>
          <p className="text-lg 2xl:text-2xl font-normal text-white max-w-[954px]">
            Please read this agreement carefully because it contains important
            information regarding legal rights and remedies
          </p>
        </div>
      </div>
    </div>
  );
}
