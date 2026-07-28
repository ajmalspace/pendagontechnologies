// src/components/TeamSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import divij from "../assets/2.webp";
import Hanshab from "../assets/1.webp";
import Ameera from "../assets/3.webp";
import Sreesan from "../assets/4.webp";
import Savad from "../assets/5.webp";
import Shamma from "../assets/6.webp";
import Sadeed from "../assets/7.webp";
import Shyam from "../assets/9.webp";
import Naja from "../assets/8.webp";
import Ashwin from "../assets/10.webp";
import Afla from "../assets/11.webp";

const teamMembers = [
  {
    name: "AMEERA",
    role: "VIDEO PRESENTER",
    image: Ameera,
  },
  {
    name: "DIVIJ P",
    role: "FULLSTACK DEVELOPER",
    image: divij,
  },
  {
    name: "ABDUL HANSHAB PH",
    role: "UI/UX DESIGNER",
    image: Hanshab,
  },
  {
    name: "SREESAN",
    role: "CINEMATOGRAPHER",
    image: Sreesan,
  },
  {
    name: "SAWAD",
    role: "GRAPHIC DESIGNER",
    image: Savad,
  },
  {
    name: "SHAMMA",
    role: "WEB DEVELOPER",
    image: Shamma,
  },
  {
    name: "SADEED",
    role: "SEO SPECIALIST",
    image: Sadeed,
  },
  {
    name: "NAJA",
    role: "DIGITAL MARKETER",
    image: Naja,
  },
  {
    name: "SHYAM",
    role: "DIGITAL MARKETER",
    image: Shyam,
  },
  {
    name: "ASHWIN",
    role: "MOTION GRAPHICS",
    image: Ashwin,
  },
  {
    name: "AFLA",
    role: "ADMINISTRATIVE OFFICER",
    image: Afla,
  },
];

const TeamSlider = () => {
  return (
    <div className="px-8 sm:px-6 md:px-10 py-5 bg-white font-space">
      <h2 className="text-justify text-xl sm:text-2xl font-semibold uppercase mb-10">
        Our Core Team
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={2}
        loop={Infinity}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="h-[260px] md:h-[340px] relative rounded-2xl group border border-[#dadada] overflow-hidden flex items-center justify-center">
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[260px] md:h-[350px] object-cover grayscale sm:hover:grayscale-0 sm:focus:grayscale-0 transition-all duration-300"
              />

              {/* Overlay Info Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-black sm:group-hover:bg-[#271a41] transition-all duration-300 md:rounded-xl md:p-3 pl-3 py-1 shadow-md rounded-xl">
                <h3 className="font-bold text-white md:text-sm text-[12px] sm:text-base">
                  {member.name}
                </h3>
                <p className="text-xs text-white md:text-sm text-[10px] sm:text-sm ">
                  {member.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
