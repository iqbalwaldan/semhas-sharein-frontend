import React from "react";

export default function Commitment() {
  return (
    <section className="w-full h-full bg-primary-base px-24 py-20 flex flex-row gap-10">
      <div className="w-1/2">
        <div className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col">
            <div className="flex flex-col mb-4">
              <h1 className="text-neutral-10  text-6xl mb-3">245%</h1>
              <h1 className="text-neutral-30 text-lg font-light">
                More revenues for the brand
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-neutral-10  text-6xl mb-3">50+</h1>
              <h1 className="text-neutral-30 text-lg font-light">
                Client trust us
              </h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mb-4">
              <h1 className="text-neutral-10  text-6xl mb-3">130k</h1>
              <h1 className="text-neutral-30 text-lg font-light">
                Audiences reached{" "}
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-neutral-10  text-6xl mb-3">24+</h1>
              <h1 className="text-neutral-30 text-lg font-light">
                Worldwide awards
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="flex flex-col px-2">
          <div className="flex flex-col mb-4">
            <h1 className="text-neutral-10  text-6xl mb-3">Commitments</h1>
            <h1 className="text-neutral-30 text-lg font-light">
              We are committed to working collaboratively with you to gain a
              deeper understanding of how to expand your reach and create larger
              opportunities for strategic business growth.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
