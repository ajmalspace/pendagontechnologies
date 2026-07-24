import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import portfolioData from "../Data/portfolioData";

const WebPortfolio = () => {
  return (
    <section
      id="portfolio-section"
      className="bg-white text-gray-900 my-10 md:my-20 px-8 md:px-11 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <div className="flex flex-col justify-start gap-5 mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[16px] font-medium uppercase tracking-wide text-gray-500 mb-3 font-space">
            Website Development
          </p>
          <h2 className="text-3xl md:text-[46px] font-bold font-space leading-tight">
            LIVE ON THE WEB
          </h2>
        </div>

        <p className="text-gray-500 max-w-sm font-inter text-sm md:text-base">
          Every project below is a real, published site. Click any card
          to open it in a new tab and see it in action.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 gap-y-16 gap-x-8">
        {portfolioData.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the live ${project.title} website`}
            className="group block"
          >
            {/* Browser chrome frame — signals these are real, live sites */}
            <div className="rounded-t-xl border border-b-0 border-[#DADADA] bg-[#f3f3f3] px-4 py-3 flex items-center gap-4">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px] text-gray-500 font-inter border border-[#e5e5e5]">
                {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>

            {/* Image */}
            <div className="h-[160px] sm:h-[270px] overflow-hidden border border-t-0 border-[#DADADA] rounded-b-xl relative">
              <img
                src={project.image}
                alt={`${project.title} website homepage`}
                width="500"
                height="350"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900">
                  Visit Live Site
                  <GoArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg md:text-2xl font-semibold font-space">
                  {project.title}
                </h3>
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-lg group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors duration-300">
                  <GoArrowUpRight aria-hidden="true" />
                </span>
              </div>

              <p className="mt-2 text-[15px] text-gray-600 font-inter">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-block text-[12px] px-4 py-1.5 font-medium rounded-full border border-gray-600 text-gray-900">
                  {project.industry}
                </span>
                <span className="inline-block text-[12px] px-4 py-1.5 font-medium rounded-full bg-[#eeeeee40] text-gray-600">
                  {project.location}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WebPortfolio;
