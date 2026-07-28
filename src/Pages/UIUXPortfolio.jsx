import React from "react";
import { FaArrowDown } from "react-icons/fa";
import uiuxData from "../Data/uiuxData";
import ContactForm from "../Components/ContactForm";

const UIUXPortfolio = () => {
  const handleScroll = () => {
    document.getElementById("uiux-gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* ── Hero: split, device on the right ── */}
      <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-center px-6 md:px-16 pt-26 pb-10 gap-10 bg-white overflow-hidden">
        <div className="flex-1">
          <p className="font-space text-[13px] md:text-[16px] uppercase tracking-[0.2em] text-gray-500 mb-4">
            UI / UX Designing
          </p>

          <h2 className="font-space font-semibold text-4xl md:text-[58px] leading-tight max-w-lg">
            Interfaces people
            <span className="bg-gradient-to-r from-[#4B327C] to-[#FF960B] bg-clip-text text-transparent">
              {" "}don&apos;t have to think about.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-gray-600 font-inter text-base md:text-lg">
            A look at apps and dashboards we&apos;ve designed with one goal:
            get the user to their outcome in as few taps as possible.
          </p>

          <button
            type="button"
            onClick={handleScroll}
            aria-label="Scroll to gallery"
            className="mt-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce"
          >
            <FaArrowDown size={14} />
          </button>
        </div>

        {/* Decorative stacked phone frame */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[220px] h-[440px] rounded-[2.5rem] border-[10px] border-[#111014] bg-[#111014] shadow-2xl rotate-3">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111014] rounded-b-2xl z-10" />
            <img
              src={uiuxData[0]?.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover rounded-[1.8rem]"
            />
          </div>
        </div>
      </section>

      {/* ── Horizontal scrolling gallery ── */}
      <section
        id="uiux-gallery"
        className="bg-[#f7f7f7] py-16 md:py-24"
      >
        <div className="px-6 md:px-16 mb-10">
          <h2 className="font-space font-bold text-3xl md:text-[40px]">
            SWIPE THROUGH THE WORK
          </h2>
        </div>

        <div className="flex gap-8 overflow-x-auto px-6 md:px-16 pb-8 snap-x snap-mandatory scrollbar-hide">
          {uiuxData.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[260px] md:w-[300px] font-space"
            >
              <div
                className={`relative overflow-hidden border-[10px] border-[#111014] bg-[#111014] shadow-xl ${
                  item.platform === "mobile"
                    ? "rounded-[2.2rem] h-[480px]"
                    : "rounded-2xl h-[380px]"
                }`}
              >
                {item.platform === "mobile" && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#111014] rounded-b-xl z-10" />
                )}
                <img
                  src={item.image}
                  alt={`${item.project} interface preview`}
                  className={`w-full h-full object-cover ${
                    item.platform === "mobile" ? "rounded-[1.5rem]" : "rounded-lg"
                  }`}
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <span className="inline-block text-[11px] px-3 py-1 mb-2 font-medium rounded-full border border-gray-300 text-gray-700">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold mb-1.5">
                  {item.project}
                </h3>
                <p className="text-[13px] text-gray-600 font-inter">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="md:text-center pt-10 md:pt-16 md:text-[36px] text-xl font-semibold py-7 font-space">
        <p>Have a product that needs a better experience?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default UIUXPortfolio;
