import React from "react";
import { HeroBg } from "../assets/assets";
import { FaArrowDown } from "react-icons/fa";

const ServiceHero = () => {
  const handleScroll = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <span className="bg-gradient-to-r from-[#4B327C] pl-10">
              Smarter
            </span>{" "}
            Marketing.
            <br />
          </div>
          <span className="text-black ">
            <span className="block pl-10">
              Bigger{" "}
              <span className="bg-gradient-to-l from-[#FF960B] pr-10">
                Growth.
              </span>{" "}
            </span>
          </span>
        </h2>

        <p className="pt-6 text-[#00000070] md:text-[16px] md:text-base px-2 font-inter">
          <span className="text-gray-500">
            We craft your brand, website, and content with bold creativity and <br />
            clear strategy because your story is more than design it’s your
            legacy.
          </span>
        </p>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center items-center cursor-pointer">
          <div
            onClick={handleScroll}   // 👈 now clickable
            className="w-10 h-10 absolute bottom-10 rounded-full bg-black flex items-center justify-center animate-bounce"
          >
            <span className="text-white">
              <FaArrowDown size={15} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHero;
