import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Work1, Work2, Work3, Work4 } from "../assets/assets";

const workItems = [
  {
    id: 1,
    title: "Silverline Rental Group",
    tag: "Website",
    img: Work1,
  },
  {
    id: 2,
    title: "CycleMate Mobile",
    tag: "UI/UX",
    img: Work2,
  },
  {
    id: 3,
    title: "UNBOSKO",
    tag: "Branding",
    img: Work3,
  },
  {
    id: 4,
    title: "Posters",
    tag: "Graphic Design",
    img: Work4,
  },
];

const RecentWorks = () => {
  return (
    <section className="bg-white text-gray-900 my-20 md:my-40 px-8 md:px-11 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col justify-start gap-5 mb-10 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl md:text-[46px] font-bold font-space">
          RECENT WORKS
        </h2>

        <Link
          to="/services"
          className="flex items-center gap-2 text-sm font-medium text-gray-900"
        >
          See More Works
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>

      {/* Work Items */}
      <div className="grid md:grid-cols-2 gap-y-16 gap-x-8 my-16">
        {workItems.map((item) => (
          <article key={item.id}>
            <div className="h-[280px] md:h-[480px]">
              <img
                src={item.img}
                alt={`${item.title} ${item.tag} project`}
                width="600"
                height="480"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Category Tag */}
            <div className="mt-5">
              <span className="inline-block text-[12px] px-6 py-2 font-medium rounded-full border border-gray-600 text-gray-900">
                {item.tag}
              </span>
            </div>

            {/* Project Title */}
            <div className="flex items-center justify-between mt-3">
              <h3 className="text-lg md:text-3xl font-semibold font-space mt-2">
                {item.title}
              </h3>

              <Link
                to="/services"
                aria-label={`View ${item.title} project`}
                className="inline-flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full text-xl relative overflow-hidden group transition-transform duration-200 hover:scale-[0.97]"
              >
                <div className="w-5 h-5 overflow-hidden">
                  <GoArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:-translate-y-4"
                  />

                  <GoArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 group-hover:-translate-y-full"
                  />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;