import React from "react";
import { FaArrowDown } from "react-icons/fa";
import performanceMarketingData from "../Data/performanceMarketingData";
import ContactForm from "../Components/ContactForm";

const PerformanceMarketingPortfolio = () => {
  const handleScroll = () => {
    document
      .getElementById("pm-comparisons")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full font-space">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[65vh] flex flex-col justify-center items-center text-center px-6 pt-16 pb-10 bg-gradient-to-b from-white to-[#f9f5f2]">
        <p className="text-[13px] md:text-[16px] uppercase tracking-[0.2em] text-gray-500 mb-4">
          Performance Marketing
        </p>

        <h2 className="font-semibold text-4xl md:text-[60px] leading-tight max-w-3xl">
          Before it worked.
          <br />
          <span className="bg-gradient-to-r from-[#4B327C] to-[#FF960B] bg-clip-text text-transparent">
            After, it paid for itself.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-gray-600 font-inter text-base md:text-lg">
          Every campaign we run gets measured against where it started.
          Here&apos;s what moved for a few of our clients.
        </p>

        <button
          type="button"
          onClick={handleScroll}
          aria-label="Scroll to comparisons"
          className="w-10 h-10 mt-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce"
        >
          <FaArrowDown size={14} />
        </button>
      </section>

      {/* ── Before / After rows ── */}
      <section
        id="pm-comparisons"
        className="max-w-5xl mx-auto px-6 md:px-0 py-20 md:py-28 space-y-16"
      >
        {performanceMarketingData.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-14">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold">
                {item.client}
              </h3>
              <span className="text-[12px] uppercase tracking-wide text-gray-500">
                {item.metric}
              </span>
            </div>

            <div className="space-y-5">
              {/* Before bar */}
              <div>
                <div className="flex justify-between text-sm text-gray-500 mb-1.5">
                  <span>Before</span>
                  <span className="font-medium text-gray-700">
                    {item.beforeLabel}
                  </span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#eeeeee]">
                  <div
                    className="h-3 rounded-full bg-gray-400"
                    style={{ width: `${item.beforeValue}%` }}
                  />
                </div>
              </div>

              {/* After bar */}
              <div>
                <div className="flex justify-between text-sm text-gray-500 mb-1.5">
                  <span>After</span>
                  <span className="font-medium text-gray-900">
                    {item.afterLabel}
                  </span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#eeeeee]">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-[#4B327C] to-[#FF960B]"
                    style={{ width: `${item.afterValue}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-[15px] text-gray-600 font-inter max-w-2xl">
              {item.description}
            </p>
          </div>
        ))}

        
      </section>

      <div className="md:text-center pt-4 md:pt-10 md:text-[36px] text-xl font-semibold py-7">
        <p>Ready for a before-and-after of your own?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default PerformanceMarketingPortfolio;
