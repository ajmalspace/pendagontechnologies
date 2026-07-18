import React, { useState } from "react";

const interests = [
  "Digital Marketing",
  "Creative Design",
  "UI/UX Design",
  "Website Development",
  "SEO",
  "Branding / Rebranding",
  "Motion Design",
];

const ContactForm = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center px-11 py-30  font-space">
      <div className="w-full flex flex-col lg:flex-row ">
        {/* Left Section */}
        <div className="w-full lg:w-2/4">
          <h2 className="text-[16px] font-space font-medium uppercase mb-2 block lg:hidden">
            Contact
          </h2>
          <h2 className="text-[16px] font-space font-medium uppercase mb-4 hidden lg:block">
            Contact Us
          </h2>
          <h4 className="text-4xl sm:text-[46px] font-bold leading-12 uppercase font-space pt-3">
            Let’s Make <br /> an Impact
          </h4>
        </div>

        {/* Right Section */}
        <form
          action="https://formsubmit.co/hello@pendagon.com"
          method="POST"
          className="w-full lg:w-2/3 space-y-9"
        >
          <input
            type="hidden"
            name="_next"
            value="https://pendagon.com/thank-you"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="Selected Interests"
            value={selectedInterests.join(", ")}
          />

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-space">
            <div>
              <label className="text-[16px] font-medium block mb-1">Name</label>
              <input
                name="Name"
                type="text"
                placeholder="Evan"
                className="w-full border-b border-gray-200 focus:outline-none focus:border-black py-2 mt-4"
                required
              />
            </div>
            <div>
              <label className="text-[16px] font-medium block mb-1">
                Company
              </label>
              <input
                name="Company"
                type="text"
                placeholder="Google"
                className="w-full border-b border-gray-200 focus:outline-none focus:border-black py-2 mt-4"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[16px] font-medium block mb-1">
                Your Email
              </label>
              <input
                name="Email"
                type="email"
                placeholder="evan@gmail.com"
                required
                className="w-full border-b border-gray-200 focus:outline-none focus:border-black py-2 mt-4"
              />
            </div>

            <div className="ml-3">
              <label className="text-[16px] font-medium block mb-1">
                Your Phone
              </label>
              <input
                name="Phone"
                type="text"
                placeholder="Your phone number"
                required
                className="w-full border-b border-gray-200 focus:outline-none focus:border-black py-2 mt-4 "
              />
            </div>
          </div>

          {/* Interests */}
          <div>
            <p className="text-[16px] font-medium mt-5 pb-5">
              I’m interested in…
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-5 py-2 rounded-full text-sm border transition-all duration-300 cursor-pointer ${
                    selectedInterests.includes(interest)
                      ? "bg-orange-400 text-white border-orange-400"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <p className="text-[16px] font-medium mb-5">
              Tell us about your project
            </p>
            <textarea
              name="Project Description"
              placeholder="Write something concise..."
              rows="5"
              className="w-full border-b border-gray-200 focus:outline-none focus:border-black py-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-[#FF960B] cursor-pointer transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
