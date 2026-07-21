import React from "react";
import {
  BirminghamLogo,
  BlackandFighterLogo,
  CokomiLogo,
  FlywellLogo,
  FamsLogo,
  GulfguardLogo,
  HeroBg,
  JanardanLogo,
  RassLuxeLogo,
  StarLogo,
  silverlineLogo,
  yemmarkLogo,
  SamsLogo,
  apislogo,
  dreamflowerlogo,
} from "../assets/assets";
import TrustedClients from "./TrustedClients";

const logos = [
  {
    img: CokomiLogo,
    link: "https://cokomi.com/",
    alt: "Cokomi logo",
  },
  {
    img: FlywellLogo,
    link: "",
    alt: "Flywell logo",
  },
  {
    img: GulfguardLogo,
    link: "https://gulfguardqatar.com/",
    alt: "Gulf Guard Qatar logo",
  },
  {
    img: JanardanLogo,
    link: "https://www.janardanhospital.com/",
    alt: "Janardan Hospital logo",
  },
  {
    img: BirminghamLogo,
    link: "https://birmingham.com/",
    alt: "Birmingham logo",
  },
  {
    img: BlackandFighterLogo,
    link: "https://blackandfighter.com/",
    alt: "Black and Fighter logo",
  },
  {
    img: FamsLogo,
    link: "https://www.instagram.com/fams_uae/",
    alt: "FAMS UAE logo",
  },
  {
    img: RassLuxeLogo,
    link: "https://www.instagram.com/rassluxe_perfumes/",
    alt: "Rass Luxe Perfumes logo",
  },
  {
    img: StarLogo,
    link: "https://www.instagram.com/star_tiles._/",
    alt: "Star Tiles logo",
  },
  {
    img: silverlineLogo,
    link: "https://www.instagram.com/silverline_rental/",
    alt: "Silver Line Construction Machinery Rental logo",
  },
  {
    img: yemmarkLogo,
    link: "https://www.instagram.com/yemmark_tvs/",
    alt: "Yemmark TVS logo",
  },
  {
    img: SamsLogo,
    link: "https://www.instagram.com/sams_future.ev/",
    alt: "Sams Future EV logo",
  },
  {
    img: apislogo,
    link: "https://www.instagram.com/apis.paramedical_institute/",
    alt: "APIS Paramedical Institute logo",
  },
  {
    img: dreamflowerlogo,
    link: "https://www.ivfkeraladf.com/",
    alt: "Dreamflower IVF Centre logo",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-8 sm:pt-24 pb-16 md:my-20">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-0 -z-10 w-full h-full object-cover opacity-30"
      />

      {/* Main Heading */}
      <h1 className="pt-20 text-3xl sm:text-4xl md:text-[64px] font-semibold leading-tight md:leading-[70px] space-y-4">
        <span className="block">
          <span className="bg-gradient-to-r from-[#4B327C] pl-2 sm:pl-7">
            Your Tru
          </span>
          sted Creative
        </span>

        <span className="block pl-2 sm:pl-10">
          Digital{" "}
          <span className="bg-gradient-to-l from-[#FF960B] pr-2 sm:pr-7">
            Partner
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="pt-6 px-2 text-base text-gray-700">
        We are one of the best digital marketing agencies in Kasaragod, Kerala.
        Performance-oriented
        <br className="hidden sm:block" /> digital marketing that helps your
        business stand out from the competition.
      </p>

      <TrustedClients logos={logos} />
    </section>
  );
};

export default Hero;
