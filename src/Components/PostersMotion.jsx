import React from "react";
import { WorkVideo4 } from "../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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

const PostersMotion = () => {
  return (
    <div className="min-h-fit sm:h-[70vh] bg-[#462d75] mb-10 py-10 sm:py-0">
      {/* ── Work 1: Reel Creation — text left, media right ── */}
      <div className="h-full flex flex-col sm:flex-row gap-8 sm:gap-2 md:gap-10 justify-between items-center px-6 sm:px-0">
        <motion.div
          className="w-full h-[35vh] sm:h-[70vh] flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide("right")}
        >
          <video
            src={WorkVideo4}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full max-w-full object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="leading-relaxed text-white max-w-md text-center sm:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlide("left")}
        >
          <p className="text-[14px] sm:text-[16px] font-semibold uppercase tracking-wide text-gray-300 mb-3 sm:mb-4">
            Poster Design
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[46px] font-bold leading-tight mb-4 sm:mb-6">
            Posters That <br className="hidden md:block" />
            Stop the Scroll
          </h2>

          <p className="text-gray-200 text-sm sm:text-base md:text-[18px] mb-6 sm:mb-8">
            From bold event posters to sharp promotional creatives, we design
            visuals that grab attention instantly and communicate your message
            with clarity and impact.
          </p>

          <Link
            to="/works"
            className="inline-flex items-center gap-3 rounded-full bg-white text-[#4c327d] px-6 py-3 text-sm font-semibold hover:bg-[#FF960B] hover:text-white transition-colors duration-300"
          >
            See Our Works
            <FaArrowRight aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PostersMotion;
