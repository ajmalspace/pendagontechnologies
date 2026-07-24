import React, { useState } from "react";
import { AinAl, Poster9, Rassluxe, Work1, Work2 } from "../assets/assets";

const projects = [
  {
    title: "Ain Al Khaleej",
    tag: "Branding",
    image: AinAl,
  },
  {
    title: "Cokomi UAE Ecommerce",
    tag: "Website",
    image: Work1,
  },
  {
    title: "Starlink Global",
    tag: "Creatives",
    image: Poster9,
  },
  {
    title: "Rassluxe",
    tag: "Branding",
    image: Rassluxe,
  },

];

const Woworks = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <div className="mb-10 px-7 font-space md:px-12 pt-20" id="works-section">
      <p className="mt-6 text-[20px] font-medium uppercase">our wow works</p>
      <div className="mt-10 md:px-0">
        <div className="flex flex-wrap md:gap-2 gap-3 ">
          {["All", "Web Design", "Branding", "UI/UX", "Creative Design"].map(
            (tag, i) => (
              <span
                key={i}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-200 cursor-pointer z-10 ${
                  selectedTag === tag
                    ? "bg-amber-500 text-white"
                    : "border border-[#DADADA] text-black hover:bg-amber-500 hover:text-white"
                }`}
              >
                {tag}
              </span>
            ),
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-y-25 gap-x-8 my-15">
          {projects
            .filter(
              (project) => selectedTag === "All" || project.tag === selectedTag,
            )
            .map((project, index) => (
              <div key={index} className="h-[280px] md:h-[480px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl "
                />
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[22px]">
                    {project.title}
                  </h3>
                  <span className="text-[12px] px-6 py-2 font-normal rounded-full border border-[#000000] text-[#000000]">
                    {project.tag}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Woworks;
