import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function Join() {
  return (
    <section className="w-full h-full bg-white px-24 py-20">
      <div className="flex flex-row items-center">
        <div className="h-full w-1/2 pr-28">
          <div className="flex flex-col">
            <span className="text-5xl font-bold  text-button-base">
              Come On&nbsp;
            </span>
            <h1 className="text-5xl font-bold text-neutral-80 mb-8">
              Let's Join Sharein now
            </h1>
            <h1 className=" text-neutral-80 mb-6">
            Let us work together efficiently to identify and 
            acquire the clients best suited to your specific needs, 
            and generate significant profit increases 
            through the implementation of our carefully 
            designed business strategies.
            </h1>
          </div>
        </div>
        <div className="w-1/2 ml-4">
          <img src="/assets/images/person1.png" />
        </div>
      </div>
    </section>
  );
}
