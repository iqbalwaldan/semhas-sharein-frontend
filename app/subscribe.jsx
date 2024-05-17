import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function Subscribe() {
  return (
    <section className="w-full h-full bg-white px-24 py-20">
      <div className="flex flex-row items-center">
        <div className="h-full w-1/2">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-neutral-80 mb-8">
              <span className="text-5xl font-bold  text-button-base">
                The Perks&nbsp;
              </span>
              of Subscribing to our Services?
            </h1>
            <div className="flex items-center">
              <AiOutlineCheck color="green" />
              <p className="ml-4">Your account&#39;s security is guranteed</p>
            </div>
            <div className="flex items-center">
              <AiOutlineCheck color="green" />
              <p className="ml-4">
                24/7 customer support is ready to assist you
              </p>
            </div>
            <div className="flex items-center">
              <AiOutlineCheck color="green" />
              <p className="ml-4">
                Training to become proficient in using the application
              </p>
            </div>
            <div className="flex items-center">
              <AiOutlineCheck color="green" />
              <p className="ml-4">Intuitive application usability</p>
            </div>
            <div className="flex items-center">
              <AiOutlineCheck color="green" />
              <p className="ml-4">
                Continous updates and improvements to enhance your experience
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-4">
          <img src="/assets/images/person.png" />
        </div>
      </div>
    </section>
  );
}
