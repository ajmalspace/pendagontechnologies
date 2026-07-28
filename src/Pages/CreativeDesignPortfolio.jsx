import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import creativeDesignData from "../Data/creativeDesignData";
import ContactForm from "../Components/ContactForm";

const filters = [
  "All",
  "Poster",
  "Social Creative",
  "Packaging",
  "Print Design",
  "Animation",
];

const CreativeDesignPortfolio = () => {
  const [active, setActive] = useState("All");

  const handleScroll = () => {
    document.getElementById("cd-wall")?.scrollIntoView({ behavior: "smooth" });
  };

  const filtered =
    active === "All"
      ? creativeDesignData
      : creativeDesignData.filter((item) => item.type === active);

  return (
    <div className="w-full">
      {/* ── Hero: colorful swatch decoration ── */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-36 pb-10 bg-white overflow-hidden">
        <div className="absolute top-30 left-6 md:left-16 flex gap-2">
          {["#4B327C", "#FF960B", "#111014", "#e5e5e5"].map((c) => (
            <span
              key={c}
              className="w-6 h-6 md:w-8 md:h-8 rounded-md"
              style={{ background: c }}
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="font-space text-[13px] md:text-[16px] uppercase tracking-[0.2em] text-gray-500 mb-4">
          Creative Designing
        </p>

        <h2 className="font-space font-semibold text-4xl md:text-[60px] leading-tight max-w-2xl">
          Every pixel earns
          <span className="text-[#FF960B]"> its place.</span>
        </h2>

        <p className="mt-6 max-w-lg text-gray-600 font-inter text-base md:text-lg">
          Posters, social creatives, packaging and everything in between a
          sample of the visual work behind our clients&apos; campaigns.
        </p>

        <button
          type="button"
          onClick={handleScroll}
          aria-label="Scroll to gallery"
          className="w-10 h-10 mt-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce"
        >
          <FaArrowDown size={14} />
        </button>
      </section>

      {/* ── Filterable poster wall ── */}
      <section
        id="cd-wall"
        className="px-4 md:px-10 py-16 md:py-24 max-w-7xl mx-auto"
      >
        <div className="flex flex-wrap gap-3 mb-10 font-space">
          {filters.map((f) => (
            <span
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-200 cursor-pointer ${
                active === f
                  ? "bg-[#FF960B] text-white"
                  : "border border-[#DADADA] text-black hover:bg-[#FF960B] hover:text-white"
              }`}
            >
              {f}
            </span>
          ))}
        </div>

        <div className="columns-2 sm:columns-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative mb-4 break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
              style={{ height: `${item.height}px` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 font-space translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block text-[10px] px-2.5 py-1 mb-1.5 font-medium rounded-full bg-white text-gray-900">
                  {item.type}
                </span>
                <p className="text-white text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="md:text-center pt-4 md:pt-10 md:text-[36px] text-xl font-semibold py-7 font-space">
        <p>Need visuals that stop the scroll?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default CreativeDesignPortfolio;
