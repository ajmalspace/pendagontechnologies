import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Work3 } from "../assets/assets";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  { id: 1, title: "DIGITAL MARKETING", img: Work3, rotation: "-rotate-6" },
  { id: 2, title: "PERFORMANCE MARKETING", img: Work3, rotation: "rotate-3" },
  { id: 3, title: "BRANDING", img: Work3, rotation: "-rotate-12" },
  { id: 4, title: "UI/UX DESIGNING", img: Work3, rotation: "rotate-6" },
  { id: 5, title: "WEBSITE DEVELOPMENT", img: Work3, rotation: "-rotate-3" },
  { id: 6, title: "CREATIVE DESIGNS", img: Work3, rotation: "rotate-12" },
];

const ServicesSection = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div>
      <h2 className="text-[46px] font-space font-bold md:mb-10 md:ml-11 ml-9">
        SERVICES
      </h2>

      <div className="grid grid-cols-1">
        {services.map((service, index) => {
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`flex relative items-center justify-between gap-4 md:py-10 md:px-10 py-8 px-8 transition-all duration-300 ease-in-out cursor-pointer
                ${isActive ? "bg-[#4B327C] text-white" : "text-black"}
              `}
            >
              {/* Hover Image */}
              {isActive && (
                <div className="absolute w-[140px] left-[30%] top-1/2 transform -translate-y-1/2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`object-cover h-[180px] rounded-xl transition-transform duration-300 ${service.rotation}`}
                  />
                </div>
              )}

              {/* Service Title */}
              <div className="text-[18px] font-space font-medium w-[234px] pl-2">
                {service.title}
              </div>

              {/* Number */}
              <div className="text-sm font-bold w-1/6 text-center">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Arrow Icon */}
              <div className="w-10 flex justify-center items-center">
                <div
                  className={`p-4 rounded-full transition-all duration-300
                    ${isActive ? "bg-orange-500 text-white" : "text-black"}
                  `}
                >
                  {isActive ? (
                    <GoArrowUpRight size={15} strokeWidth={2} />
                  ) : (
                    <FaArrowRight size={15} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
