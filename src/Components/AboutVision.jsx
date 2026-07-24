import React from "react";
import Vision1 from "../assets/Vision1.webp";
import Vision2 from "../assets/Vision2.webp";
import Vision3 from "../assets/Vision3.webp";
import Vision4 from "../assets/Vision4.webp";
import Vision5 from "../assets/Vision5.webp";

const AboutVision = () => {
  return (
    <div className="mx-auto grid px-4 sm:px-9 items-start font-space">
      <div className="py-15">
        <p className="text-[30px] md:text-[40px] md:pr-45 uppercase font-semibold">
          Your vision, our creativity - brought to life through powerful visuals
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 ">
        <img
          src={Vision1}
          alt="Team 1"
          className="w-full h-[180px] md:w-[290px] md:h-[358px] object-cover bg-amber-700"
        />
        <img
          src={Vision4}
          alt="Team 2"
          className="w-full h-[110px] md:w-[285px] md:h-[214px] object-cover bg-amber-950"
        />
        <img
          src={Vision3}
          alt="Team 3"
          className="w-full h-[180px] md:w-[289px] md:h-[358px] object-cover bg-black"
        />
        <img
          src={Vision2}
          alt="Team 4"
          className="md:w-[192px] md:h-[214px] object-cover bg-amber-900 hidden md:block"
        />
        <img
          src={Vision5}
          alt="Team 5"
          className="md:w-[490px] md:h-[358px] object-cover bg-amber-400 hidden md:block"
        />
      </div>
      <div className="md:text-center pt-30 md:text-3xl text-xl font-semibold md:3xl py-7">
        <p>Ready to take next step with us?</p>
      </div>
    </div>
  );
};

export default AboutVision;
