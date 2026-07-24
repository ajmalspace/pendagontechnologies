import React from "react";
import { FaArrowDown } from "react-icons/fa";
import brandingData from "../Data/brandingData";
import ContactForm from "../Components/ContactForm";

const BrandingPortfolio = () => {
  const handleScroll = () => {
    document
      .getElementById("brand-wall")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* ── Hero: minimal, centered wordmark feel ── */}
      <section className="relative w-full min-h-[65vh] flex flex-col justify-center items-center text-center px-6 pt-16 pb-10 bg-white">
        <p className="font-space text-[13px] md:text-[16px] uppercase tracking-[0.35em] text-gray-500 mb-6">
          Branding Solutions
        </p>

        <h2 className="font-space font-bold uppercase text-4xl md:text-[80px] leading-[0.95] tracking-tight">
          Identities
          <br />
          <span className="text-[#FF960B]">that</span> stick.
        </h2>

        <p className="mt-8 max-w-lg text-gray-600 font-inter text-base md:text-lg">
          A selection of brands we&apos;ve built or rebuilt from the ground
          up — mark, color, voice, and everything that has to feel like one
          brand across every touchpoint.
        </p>

        <button
          type="button"
          onClick={handleScroll}
          aria-label="Scroll to brand wall"
          className="w-10 h-10 mt-10 rounded-full bg-[#4B327C] text-white flex items-center justify-center animate-bounce"
        >
          <FaArrowDown size={14} />
        </button>
      </section>

      {/* ── Masonry brand wall ── */}
      <section
        id="brand-wall"
        className="bg-[#0d0d10] px-4 md:px-10 py-16 md:py-24"
      >
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-7xl mx-auto [column-fill:_balance]">
          {brandingData.map((item) => (
            <div
              key={item.id}
              className={`group relative mb-5 break-inside-avoid rounded-2xl overflow-hidden ${
                item.size === "tall" ? "h-[520px]" : "h-[340px]"
              }`}
            >
              <img
                src={item.image}
                alt={`${item.client} brand identity`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 font-space text-white">
                <span className="inline-block text-[11px] px-3 py-1 mb-3 font-medium rounded-full border border-white/40 text-white/90">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {item.client}
                </h3>
                <p className="text-[13px] text-white/70 font-inter max-w-xs opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="md:text-center pt-10 md:pt-16 md:text-[36px] text-xl font-semibold py-7 font-space">
        <p>Have a brand that needs a stronger identity?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default BrandingPortfolio;
