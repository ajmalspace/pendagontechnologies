import React, { useState } from "react";
import portfolioData from "../Data/portfolioData";
import creativeDesignData from "../Data/creativeDesignData";
import brandingData from "../Data/brandingData";

// ── Normalize each data source into a common shape ──────────────
// Each category keeps its own natural dimension (height in px) so the
// masonry layout below never has to force mismatched images into the
// same box — that's what was causing the overlap.
const webProjects = portfolioData.map((p) => ({
  id: `web-${p.id}`,
  title: p.title,
  tag: "Website Development",
  image: p.image,
  url: p.url,
  height: 300, // landscape website screenshots
}));

const brandingProjects = brandingData.map((b) => ({
  id: `brand-${b.id}`,
  title: b.client,
  tag: "Branding",
  image: b.image,
  height: b.size === "tall" ? 480 : 340, // same sizing BrandingPortfolio uses
}));

const creativeProjects = creativeDesignData.map((c) => ({
  id: `creative-${c.id}`,
  title: c.title,
  tag: "Creative Design",
  image: c.image,
  height: c.height, // poster-style varied heights, straight from the data
}));

const allProjects = [...webProjects, ...brandingProjects, ...creativeProjects];

const filterTags = [
  "All",
  "Website Development",
  "Branding",
  "Creative Design",
];

const Woworks = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) => selectedTag === "All" || project.tag === selectedTag,
  );

  return (
    <div className="mb-10 px-7 font-space md:px-12 pt-20" id="works-section">
      <p className="mt-6 text-[20px] font-medium uppercase">our wow works</p>
      <div className="mt-10 md:px-0">
        <div className="flex flex-wrap md:gap-2 gap-3 ">
          {filterTags.map((tag, i) => (
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
          ))}
        </div>

        {/* Masonry columns — each card sizes to its own image, so mixing
            landscape screenshots, tall branding shots and posters never
            overlaps or gets squashed into a mismatched box. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 my-15 [column-fill:_balance]">
          {filteredProjects.map((project) => {
            const isLink = Boolean(project.url);
            const Wrapper = isLink ? "a" : "div";
            const wrapperProps = isLink
              ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Visit the live ${project.title} website`,
                }
              : {};

            return (
              <Wrapper
                key={project.id}
                {...wrapperProps}
                className="group mb-6 block break-inside-avoid"
              >
                <div
                  className="w-full overflow-hidden rounded-xl"
                  style={{ height: `${project.height}px` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-[18px] font-semibold">{project.title}</h3>
                  <span className="shrink-0 text-[11px] px-4 py-2 font-normal rounded-full border border-black text-black">
                    {project.tag}
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Woworks;
