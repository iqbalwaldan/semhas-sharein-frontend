import React from 'react'
import Card from './card'

export default function Features() {
  return (
    <section id='features' className="w-full h-full bg-white bg-cover bg-center bg-no-repeat px-8">
      <div className="flex flex-col lg:flex-row pt-10">
        <div className="lg:ml-0 flex flex-col items-center lg:items-center text-center lg:text-left justify-center flex-1 lg:px-0">
            <h1 className="text-5xl font-semibold text-[#F7B217]"><span className="text-neutral-80 text-5xl font-semibold">Choose Your&nbsp;</span>Package Now</h1>
            <p className="mt-4 mb-12 text-lg font-normal text-neutral-80 text-center px-[35%]">Select a package that aligns with your business needs and strategies to achieve maximum profit potential.</p>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-12'>
        <Card/>
      </div>
    </section>
  )
}
