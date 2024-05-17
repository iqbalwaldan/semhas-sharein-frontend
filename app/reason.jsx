import React from "react";

export default function Reason() {
  return (
    <section className="w-full h-full bg-white px-36 py-12">
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="text-5xl font-semibold text-neutral-80">
          Why&nbsp;
          <span className="text-5xl font-semibold text-primary-base">
            Sharein&nbsp;
          </span>
          ?
        </h1>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/images/increase.png" alt="increase" />
          <h3 className="mt-8 mb-2 text-2xl font-bold text-[#2B3377]">
            Increase Sales
          </h3>
          <p className="text-xl font-normal text-neutral-70 px-[18%] text-center">
            Increase Sales with the latest marketing strategies based on our
            team&#39;s research
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/images/lamp.png" alt="increase" />
          <h3 className="mt-8 mb-2 text-2xl font-bold text-[#2B3377]">
            Saving Time
          </h3>
          <p className="text-xl font-normal text-neutral-70 px-[18%] text-center">
            with automation technology we will help you manage your business
            quickly and efficiently
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/images/riset.png" alt="increase" />
          <h3 className="mt-8 mb-2 text-2xl font-bold text-[#2B3377]">
            Reach a Wider Clientele
          </h3>
          <p className="text-xl font-normal text-neutral-70 px-[18%] text-center">
            By leveraging the power of automation, we will leverage a wider
            reach of the best clients
          </p>
        </div>
      </div>
    </section>
  );
}
