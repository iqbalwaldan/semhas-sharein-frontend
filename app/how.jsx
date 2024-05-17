import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function How() {
  return (
    <section className="w-full h-full bg-white px-24 py-20">
      <div className="flex flex-row">
        <div className="h-full w-1/2 pr-28">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-neutral-80 mb-8">
              How it&nbsp;
              <span className="text-5xl font-bold  text-primary-60">
                Works&nbsp;
              </span>
            </h1>
            <h1 className=" text-neutral-80 mb-6">
              Let us work together efficiently to identify and acquire the
              clients best suited to your specific needs, and generate
              significant profit increases through the implementation of our
              carefully designed business strategies.
            </h1>
            <img 
            src="/assets/images/laptop.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-11">
          <div className="flex flex-row">
            <img
              src="/assets/icons/icons.png"
              width={98}
              height={98}
              className="mr-5"
            />
            <div className="flex flex-col">
              <span className=" text-neutral-80 font-semibold text-3xl mb-3 ">
                Generate Caption
              </span>
              <h1>
                We meet with you to learn about your business, your goals, and
                your target audience.
              </h1>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/assets/icons/icons1.png"
              width={98}
              height={98}
              className="mr-5"
            />
            <div className="flex flex-col">
              <span className=" text-neutral-80 font-semibold text-3xl mb-3 ">
              Recommendation Hashtag
              </span>
              <h1>
                We meet with you to learn about your business, your goals, and
                your target audience.
              </h1>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/assets/icons/icons2.png"
              width={98}
              height={98}
              className="mr-5"
            />
            <div className="flex flex-col">
              <span className=" text-neutral-80 font-semibold text-3xl mb-3 ">
              Auto Generate Frame
              </span>
              <h1>
                We meet with you to learn about your business, your goals, and
                your target audience.
              </h1>
            </div>
          </div>
          <div className="flex flex-row">
            <img
              src="/assets/icons/icons3.png"
              width={98}
              height={98}
              className="mr-5"
            />
            <div className="flex flex-col">
              <span className=" text-neutral-80 font-semibold text-3xl mb-3 ">
              Discovery
              </span>
              <h1>
                We meet with you to learn about your business, your goals, and
                your target audience.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
