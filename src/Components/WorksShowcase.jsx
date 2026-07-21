import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WorkVideo, WorkVideo2 } from "../assets/assets";

// TODO: replace WorkVideo2 with the real SEO project image/video once available

const fadeSlide = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
});

const WorksShowcase = () => {
  return (
    <section className="px-7 md:px-20 pt-10 md:py-5 font-space space-y-24 md:space-y-20">
      {/* ── Work 1: Reel Creation — text left, media right ── */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-10 justify-between items-center">
        {/* Left: Content */}
        <motion.div
          className="leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide("left")}
        >
          <p className="text-[16px] font-semibold uppercase tracking-wide text-gray-700 mb-4">
            Reels Creation
          </p>

          <h2 className="text-3xl md:text-[46px] font-bold leading-tight mb-6">
            See the Story <br className="hidden md:block" />
            Behind Our Work
          </h2>

          <p className="text-gray-600 text-base md:text-[18px] mb-8 max-w-md">
            From strategy to execution, take a closer look at how we bring
            brands to life through design, development, and marketing that
            performs.
          </p>

          <Link
            to="/works"
            className="inline-flex items-center gap-3 rounded-full bg-[#4c327d] text-white px-6 py-3 text-sm font-semibold hover:bg-[#FF960B] transition-colors duration-300"
          >
            See Our Works
            <FaArrowRight aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Right: Media */}
        <motion.div
          className="w-full md:w-[50%] sm:rotate-4 rotate-0 mt-10 flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide("right")}
        >
          <video
            src={WorkVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="sm:h-[500px] h-[350px] mt-2"
          />
        </motion.div>
      </div>

      {/* ── Work 2: SEO — media left, text right ── */}
      <div className="flex flex-col sm:flex-row-reverse gap-2 md:gap-10 justify-between items-center">
        {/* Right (visually): Content */}
        <motion.div
          className="leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide("right")}
        >
          <p className="text-[16px] font-semibold uppercase tracking-wide text-gray-700 mb-4">
            seo
          </p>

          <h2 className="text-3xl md:text-[46px] font-bold leading-tight mb-6">
            Ranking Higher, <br className="hidden md:block" />
            Growing Faster
          </h2>

          <p className="text-gray-600 text-base md:text-[18px] mb-8 max-w-md">
            We help brands climb the search rankings with technical SEO, content
            strategy, and data-backed optimization that turns visibility into
            real business growth.
          </p>

          <Link
            to="/works"
            className="inline-flex items-center gap-3 rounded-full bg-[#4c327d] text-white px-6 py-3 text-sm font-semibold hover:bg-[#FF960B] transition-colors duration-300"
          >
            See Our Works
            <FaArrowRight aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Left (visually): Media */}
        <motion.div
          className="w-full md:w-[50%] mt-10 flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide("left")}
        >
          <video
            src={WorkVideo2}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="sm:h-[500px] h-[350px] mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorksShowcase;
