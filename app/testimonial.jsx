import React from "react";

export default function Testimonial() {
  return (
    <section className="w-full h-full bg-white px-36 py-12">
      <div className="flex flex-col justify-center items-center mb-16">
        <span className="text-5xl  text-neutral-80">
          Client&nbsp;
        </span>
        <h1 className="text-5xl font-semibold text-primary-60 mb-8">
         Testimonials
        </h1>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/images/testi.png" alt="increase" />
        </div>
      </div>
    </section>
  );
}
