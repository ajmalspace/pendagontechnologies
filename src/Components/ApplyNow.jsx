import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const ApplyNow = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFileName(e.target.files?.[0]?.name || "");
  };

  return (
    <div className="font-space pt-26 pb-20 px-18">
      <div className="leading-relaxed">
        <h3 className="text-[58px] leading-[90px] font-space font-medium ">
          JOIN OUR TEAM
        </h3>
        <div className="flex gap-5">
          <p className="text-[24px] text-gray-600 font-normal">APPLY NOW </p>
          <div className="flex justify-center items-center">
            <div className="w-8 h-8  rounded-full bg-black flex items-center justify-center ">
              <span className="text-white">
                <FaArrowDown size={15} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="font-space  container mx-auto   md:grid grid-cols-[5fr_1fr_5fr] mb-8">
        <div className="leading-relaxed py-23 uppercase">
          <p className="pb-10 font-medium text-[20px]">Ready to Apply?</p>
          <p className=" font-medium text-[50px] leading-[50px]">
            Send us your resume and portfolio—we can’t wait to see your work!
          </p>
        </div>
        <div></div>
        <div className="pt-40 leading-7">
          <form
            action="https://formsubmit.co/pendagonsmm@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
          >
            {/* FormSubmit config */}
            <input
              type="hidden"
              name="_next"
              value="https://pendagon.in/thank-you"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Job Application - Pendagon"
            />

            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="Full Name"
                placeholder="Your full name"
                required
                className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 py-1 "
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="you@example.com"
                required
                className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 py-1 "
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="Phone Number"
                placeholder="Your phone number"
                required
                className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 py-1 "
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Portfolio Link</label>
              <input
                type="url"
                name="Portfolio Link"
                placeholder="Your portfolio URL"
                className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 py-1 "
              />
            </div>

            <div>
              <label className="block  font-medium text-black mb-1">
                Resume
              </label>

              <label className="block border-b border-gray-300 text-gray-400  cursor-pointer">
                {fileName || "Upload your resume"}
                <input
                  type="file"
                  name="Resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 rounded-full bg-black text-white px-8 py-1 hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
