// src/components/AboutSection.jsx
import AboutImage from "../assets/About.webp";

const AboutSection = () => {
  return (
    <section className="px-10 sm:px-6 md:px-11 py-25 space-y-25 font-space">
      {/* WHO WE ARE */}
      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 items-start">
  <div>
    <h3 className="uppercase text-lg sm:text-xl font-semibold text-black">
      Who We Are
    </h3>
  </div>

  <div className="md:col-span-2 space-y-5">
    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-gray-800">
      We are <strong>Pendagon Technologies</strong>, a full-service digital
      marketing and web development agency based in{" "}
      <strong>Kasaragod, Kerala</strong>. We help businesses build powerful
      brands, strengthen their online visibility, and achieve measurable
      digital growth. We work with startups, small and medium-sized businesses,
      and established enterprises across India and leading GCC markets such as
      the UAE, Qatar, and Saudi Arabia.
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-gray-800">
      Founded on <strong>February 26, 2024</strong>, Pendagon Technologies
      operates under the leadership of its Board of Directors: Sabith
      Aboobacker, Mohammed Jafar Sadik, Mohammed Safuvan E, Mohammed Thajuddeen
      K, and Saifudheen VK. Our work is guided by a simple but powerful
      principle: <strong>“Do it once. Do it right.”</strong> This philosophy
      reflects our commitment to strategic planning, creative excellence,
      technical precision, and consistent quality across every project.
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-gray-800">
      With <strong>2.5 years of industry experience</strong>, a specialised
      team of <strong>25 professionals</strong>, and more than{" "}
      <strong>350 successfully completed projects</strong>, we have built a
      trusted reputation for delivering practical, creative, and
      performance-focused digital solutions. Our multidisciplinary team
      combines marketing strategy, design, technology, and storytelling to
      create meaningful digital experiences that connect brands with the right
      audience.
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-gray-800">
      Our core services include performance marketing, search engine
      optimisation, social media marketing, strategic branding, UI/UX design,
      graphic design, content strategy, and custom website development. Every
      solution is carefully planned around the client’s business objectives,
      target audience, industry, market opportunities, and long-term growth
      goals.
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-gray-800">
      At Pendagon Technologies, we do more than promote businesses online. We
      create distinctive brand identities, build customer-focused digital
      platforms, improve search visibility, generate qualified leads, and
      develop scalable marketing systems that support sustainable growth. By
      combining bold creativity with data-driven decision-making, we transform
      ambitious ideas into credible, competitive, and globally recognised
      brands.
    </p>
  </div>
</div>

      {/* OUR EXPERTISE */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 items-start">
        <div>
          <h3 className="uppercase text-lg sm:text-xl font-semibold text-black">
            Our Expertise
          </h3>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-35 pt-10 sm:pt-0">
            <div className="text-center sm:text-left">
              <p className="text-6xl sm:text-7xl md:text-8xl font-semibold text-black">
                2<span className="text-orange-500 text-4xl sm:text-6xl">+</span>
              </p>
              <p className="text-[12px] uppercase font-medium text-gray-600 pt-2">Years of Work</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-6xl sm:text-7xl md:text-8xl font-semibold text-black">
                350<span className="text-orange-500 text-4xl sm:text-6xl">+</span>
              </p>
              <p className="text-[12px] uppercase font-medium text-gray-600 pt-2">Successful Projects</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-6xl sm:text-7xl md:text-8xl font-semibold text-black">
                25
              </p>
              <p className="text-[12px] uppercase font-medium text-gray-600 pt-2">Professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR MISSIONS */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 items-start">
        <div>
          <h3 className="uppercase text-lg sm:text-xl font-semibold text-black">
            Our Missions
          </h3>
        </div>
        <div className="md:col-span-2">
          <p className="text-[34px] sm:text-[20px] md:text-[30px] leading-snug font-normal text-gray-800">
            We deliver creative results-driven marketing that helps brands grow
            globally and connect locally through powerful storytelling and smart
            strategy.
          </p>
        </div>
      </div>

      {/* ABOUT IMAGE */}
      <div className="flex justify-center">
        <img
          src={AboutImage}
          alt="About"
          className="w-[326px] h-[250px] sm:w-[90%] md:w-[1373px] md:h-[633px] rounded-xl shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
