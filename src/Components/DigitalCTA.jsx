import React from 'react';

const DigitalCTA = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 bg-white font-space pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center  ">
        {/* Left side */}
        <div>
          <p className="text-[20px] font-medium uppercase text-gray-700 mb-6 ">What next?</p>
          <h2 className="text-[70px] sm:text-5xl font-medium text-black leading-[75px]  ">
            LET’S WORK <br /> TOGETHER!
          </h2>
        </div>

        {/* Right side */}
        <div className=''>
          <p className="text-[36px] font-medium text-gray-800 pt-38 mb-18  ">
            Let’s turn your vision into a bold, 
            unforgettable brand that drives 
            growth.
          </p>
          <button className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300  text-sm font-medium text-black hover:bg-gray-100 transition">
            Get pricing info<span className="ml-2">💸</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalCTA;
