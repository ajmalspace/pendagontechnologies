import React from "react";
import { Link } from "react-router-dom";

const AboutJoin = () => {
  return (
    <section className="py-20 px-6 md:px-10 font-space">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="uppercase text-sm md:text-[20px] font-semibold tracking-wide text-black">
            Join With Us
          </h3>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 md:pl-24">
          <p className="text-2xl md:text-[40px] font-medium leading-snug">
            Shape the future of visual <br />
            storytelling with us.
          </p>

          <Link
            to="/career"
            className="inline-flex mt-6 px-6 py-3 border border-gray-300 rounded-full text-gray-800 font-medium hover:bg-gray-100 transition duration-300"
          >
            View Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutJoin;