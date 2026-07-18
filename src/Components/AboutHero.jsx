import React from "react";
import { HeroBg } from "../assets/assets";
import { FaArrowDown } from "react-icons/fa";

const AboutHero = () => {
  return (
    <div>
      <section className="relative w-full h-auto min-h-[70vh] sm:h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-8 sm:pt-16 pb-6">
        <img
          className="hidden md:block absolute -z-10 w-full h-full opacity-30"
          src={HeroBg}
          alt=""
        />
        <h2 className="text-4xl font-space font-semibold md:text-[64px] leading-tight text-black-800 pt-10">
          <div className="block">
            <span className="bg-gradient-to-r from-[#6c44bd] pl-7">
              We Are a
            </span>{" "}
            <span>Creative Studio Built </span>
            <br />
          </div>
          <span className="text-black block pl-10">
            for{" "}
            <span className="bg-gradient-to-l from-[#FF960B] pr-18">
              Impact
            </span>
          </span>
        </h2>

        <p className="pt-6 text-[#00000070] md:text-[16px] md:text-base px-2 font-inter">
          Crafting digital products and services that <br />
          engage users and deliver results.
        </p>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 absolute bottom-10 rounded-full bg-black flex items-center justify-center animate-bounce">
            <span className="text-white">
              <FaArrowDown size={15} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
