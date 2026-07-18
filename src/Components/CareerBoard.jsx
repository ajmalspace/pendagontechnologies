import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ApplyNow from "./ApplyNow";

const CareerBoard = () => {
  return (
    <div>
      <section
        id="about"
        className="md:py-18 md:px-6 px-6 bg-white font-space overflow-hidden "
      >
        <div className="container grid-col mx-auto px-6  md:grid grid-cols-[5fr_1fr_5fr] mb-8">
          <div>
            <h2 className="text-[20px]  md:text-xl font-bold text-gray-800 mb-4 uppercase items-center">
              opening Positions
            </h2>
            <p className="text-[30px] md:text-[65px] md:leading-[75px] uppercase font-semibold items-center ">
              open positions in our design team
            </p>
          </div>
          <div className="mt-4 md:mt-0"></div>
          <div className="md:px-3 leading-relaxed items-center pt-13">
            <div className="mb-10 md:mb:0 flex-col">
              <div className="flex items-center justify-between  gap-y-2">
                <h3 className="text-[18px] md:text-[23px] font-bold">
                  Graphic Designing
                </h3>
                <p className="uppercase text-[10px] px-2  md:text-[10px] font-semibold md:px-2 py-1 rounded-full tracking-wide bg-[#FF960B] text-white">
                  Internship available
                </p>
              </div>
              <p className="text-gray-700 pt-2 text-[16px] gap-y-2 leading-">
                Craft stunning visuals and brand elements that communicate ideas
                clearly and beautifully.
              </p>
              <div className="flex justify-between  text-gray-400 mt-3">
                <p className="text-[10px] md:text-[15px]">
                  FULL TIME | ONSITE | 1+ YRS EXP
                </p>
                <Link
                  to="/applynow"
                  className="inline-flex text-[10px] md:text-[15px] items-center gap-x-1 uppercase hover:text-black underline"
                >
                  Apply Now <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="py-10">
              <div className="flex items-center justify-between flex-wrap gap-y-2">
                <h3 className="text-[18px] md:text-[23px] font-bold">
                  UI/UX Designing
                </h3>
              </div>
              <p className="text-gray-700 pt-2 text-[16px] leading-">
                Design intuitive interfaces and user flows that elevate the
                overall digital experience.
              </p>
              <div className="flex justify-between  text-gray-400 md:mt-3 mt-3">
                <p className="text-[10px] md:text-[15px]">
                  FULL TIME | ONSITE | 1+ YRS EXP
                </p>
                <Link
                  to="/applynow"
                  className="inline-flex text-[10px] md:text-[15px] items-center gap-x-1 uppercase hover:text-black underline"
                >
                  Apply Now <HiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:grid grid-cols-[5fr_1fr_5fr] mb-8">
          <div>
            <p className="text-[30px] md:text-[65px] md:leading-[75px] uppercase font-semibold items-center ">
              open positions in our marketing team
            </p>
          </div>
          <div className="mt-4 md:mt-0"></div>
          <div className="md:px-3 leading-relaxed">
            <div className="">
              <div className="flex items-center justify-between flex-wrap gap-y-2">
                <h3 className="text-[18px] md:text-[23px] font-bold">
                  Digital Marketing Lead
                </h3>
              </div>
              <p className="text-gray-700 pt-2 text-[16px] gap-y-2 leading-">
                Lead digital campaigns to boost brand growth and team success.
              </p>
              <div className="flex justify-between  text-gray-400">
                <p className="text-[10px] md:text-[15px]">
                  FULL TIME | ONSITE | 3+ YRS EXP
                </p>
                <Link
                  to="/applynow"
                  className="inline-flex text-[10px] md:text-[15px] items-center gap-x-1 uppercase hover:text-black underline"
                >
                  Apply Now <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="pt-10">
              <div className="flex items-center justify-between flex-wrap gap-y-2">
                <h3 className="text-[18px] md:text-[23px] font-bold">
                  SEO Specialist
                </h3>
              </div>
              <p className="text-gray-700 pt-2 text-[16px] gap-y-2 leading-">
                Optimize content and site structure to improve search rankings
                and organic traffic.
              </p>
              <div className="flex justify-between  text-gray-400">
                <p className="text-[10px] md:text-[15px]">
                  FULL TIME | ONSITE | FRESHERS
                </p>
                <Link
                  to="/applynow"
                  className="inline-flex text-[10px] md:text-[15px] items-center gap-x-1 uppercase hover:text-black underline"
                >
                  Apply Now <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="pt-10">
              <div className="flex items-center justify-between flex-wrap gap-y-2">
                <h3 className="text-[18px] md:text-[23px] font-bold">
                  Copy Writer
                </h3>
              </div>
              <p className="text-gray-700 pt-2 text-[16px] gap-y-2 leading-">
                Create compelling content that connects, persuades, and drives
                action.
              </p>
              <div className="flex justify-between  text-gray-400">
                <p className="text-[10px] md:text-[15px]">
                  FULL TIME | ONSITE | 3+ YRS EXP
                </p>
                <Link
                  to="/applynow"
                  className="inline-flex text-[10px] md:text-[15px] items-center gap-x-1 uppercase hover:text-black underline"
                >
                  Apply Now <HiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:grid grid-cols-[5fr_1fr_5fr] mt-15">
          <div>
            <p className="text-[30px] md:text-[65px] md:leading-[75px] uppercase font-semibold items-center ">
              open positions in our development team
            </p>
          </div>
          <div className="mt-7 md:mt-0"></div>
          <div className="">
            <div className="mb-10 md:mb:0 flex-col">
              <div className="flex items-center justify-between  gap-y-2">
                <h3 className="text-[15px] md:text-[23px] font-bold">
                  Full Stack developer
                </h3>
                <p className="uppercase text-[10px] px-2  md:text-[10px] font-semibold md:px-2 py-1 rounded-full tracking-wide bg-[#FF960B] text-white">
                  Internship available
                </p>
              </div>
              <p className="text-gray-700 pt-2 text-[16px] gap-y-2 leading-">
                Build and maintain robust web applications, working on both
                frontend and backend.
              </p>
              <div className="flex justify-between  text-gray-400">
                <p className="text-[10px] md:text-[15px]">
                  FULL TIME | ONSITE | 2+ YRS EXP{" "}
                  <span className="block">Freshers can apply</span>
                </p>
                <Link
                  to="/applynow"
                  className="inline-flex text-[10px] md:text-[15px] items-center gap-x-1 uppercase hover:text-black underline"
                >
                  Apply Now <HiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:grid grid-cols-[5fr_1fr_5fr] mb-8">
          <div>
            <p className="text-[24px] md:leading-[75px] uppercase font-semibold pt-14">
              Can’t find a role that fits?
            </p>
          </div>
          <div className="mt-4 md:mt-0"></div>
          <div className="">
            <div className="leading-relaxed pt-15">
              <div className="flex justify-between ">
                <h3 className="text-[20px] font-bold ">SHARE RESUME HERE</h3>
              </div>
              <a
                href="mailto:hello@pendagon.com"
                className="text-black pt-2 md:text-[40px] block hover:text-amber-500 transition duration-200"
              >
                HELLO@PENDAGON.COM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerBoard;
