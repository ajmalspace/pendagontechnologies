import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { HeroBg } from "../assets/assets";
import digitalMarketingData from "../Data/digitalMarketingData";
import ContactForm from "../Components/ContactForm";

const DigitalMarketingPortfolio = () => {
  const handleScroll = () => {
    document
      .getElementById("dm-results")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* ── Hero: dark, results-first ── */}
      <section className="relative w-full min-h-[70vh] sm:h-screen bg-[#111014] text-white flex flex-col justify-center px-6 sm:px-16 pt-26 pb-10 overflow-hidden">
        <img
          src={HeroBg}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <p className="font-space text-[13px] md:text-[16px] uppercase tracking-[0.2em] text-[#FF960B] mb-4">
          Digital Marketing
        </p>

        <h2 className="font-space font-semibold text-4xl md:text-[64px] leading-tight max-w-3xl">
          Campaigns built on
          <span className="bg-gradient-to-r from-[#8b6fce] to-[#FF960B] bg-clip-text text-transparent">
            {" "}numbers, not noise.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-gray-400 font-inter text-base md:text-lg">
          A look at real campaigns we&apos;ve run across SEO, paid media, and
          social every result below is a result we tracked, reported, and
          could defend in a client call.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
          {digitalMarketingData.slice(0, 3).map((item) => (
            <div key={item.id}>
              <p className="font-space font-semibold text-2xl md:text-4xl text-[#FF960B]">
                {item.highlightValue}
              </p>
              <p className="text-[11px] md:text-[13px] text-gray-400 uppercase tracking-wide mt-1">
                {item.highlightLabel}
              </p>
            </div>
          ))}
        </div>

       
      </section>

      {/* ── Results grid ── */}
      <section
        id="dm-results"
        className="bg-white px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <h2 className="font-space font-bold text-3xl md:text-[46px]">
            RESULTS BY THE NUMBERS
          </h2>
          <p className="text-gray-500 font-inter max-w-sm text-sm md:text-base">
            Every card is a real client engagement. Figures shown are
            illustrative sample data pending final client sign-off.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalMarketingData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden border border-[#e5e5e5] bg-white flex flex-col"
            >
              <div className="h-[160px] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.client} campaign preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-[#141319] text-white px-6 py-6">
                <p className="font-space font-semibold text-3xl text-[#FF960B]">
                  {item.highlightValue}
                </p>
                <p className="text-[12px] uppercase tracking-wide text-gray-400 mt-1">
                  {item.highlightLabel}
                </p>
              </div>

              <div className="px-6 py-6 flex-1 flex flex-col">
                <span className="inline-block w-fit text-[11px] px-3 py-1 mb-3 font-medium rounded-full border border-gray-300 text-gray-700">
                  {item.industry}
                </span>
                <h3 className="font-space font-semibold text-lg mb-2">
                  {item.client}
                </h3>
                <p className="text-[14px] text-gray-600 font-inter">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="md:text-center pt-4 md:pt-10 md:text-[36px] text-xl font-semibold py-7 font-space">
        <p>Want numbers like these for your brand?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default DigitalMarketingPortfolio;
