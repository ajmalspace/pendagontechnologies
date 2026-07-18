import React from "react";
import { HeroBg } from "../assets/assets";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const DigitalHero = () => {
  return (
    <div>
      <div>
        <div>
           <section className="relative w-full h-auto min-h-[70vh]  sm:h-screen  flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-8  sm:pt-16 pb-6">
                  <img className="  hidden md:block absolute -z-10 top-0 left- w-full h-full" src={HeroBg} alt="" />
              <h2 className="text-[20px] font-space font-semibold md:text-5xl leading-tight text-black-800">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block"
                >
                  <span className="bg-gradient-to-r from-[#6c44bd] pl-7">
                    Digital
                  </span>{" "}
                  <span>Marketing That</span>
                  <br />
                </motion.div>
                <span className="text-black ">
                  <motion.span
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="block pl-10"
                  >
                    {" "}
                    Drives{" "}
                    <span className="bg-gradient-to-l from-[#FF960B] pr-10">
                      Real Results
                    </span>{" "}
                  </motion.span>
                </span>
              </h2>

              <p className="mt-7  text-gray-600">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className=" text-gray-500 md:text-[22px] text-[12px] "
                >
                  We strategize, optimize, and convert—delivering data-driven <br />
                  marketing that grows your brand in today’s fast-paced <br />
                  digital world.
                </motion.p>
              </p>

              {/* Scroll Down Indicator */}
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 absolute bottom-10 rounded-full bg-black flex items-center justify-center animate-bounce">
                  <span className="text-white">
                    <FaArrowDown size={15} />
                  </span>
                </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalHero;
