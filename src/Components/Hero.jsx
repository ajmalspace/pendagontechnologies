import React, { useEffect, useState } from "react";
import {
  HeroBg,
  CokomiLogo,
  AinAlKhaleejLogo,
  ApisLogo,
  BFLogo,
  ConceptsLogo,
  DreamFlowerLogo,
  ExitoLogo,
  FamsLogo,
  FlyWllLogo,
  FrDrivingLogo,
  HomeStoriesLogo,
  HykaaLogo,
  IndianaLogo,
  JanardhanLogo,
  KasaragodAssociationLogo,
  MqLogo,
  MuhdLogo,
  RassluxeLogo,
  SamsLogo,
  SigMetroLogo,
  StarLinkLogo,
  StartitlesLogo,
  YemmmarkkLogo,
  SilverlineLogo,
} from "../assets/assets";

import TrustedClients from "./TrustedClients";

const logos = [
  {
    img: CokomiLogo,
    link: "https://cokomi.com/",
    alt: "Cokomi logo",
  },
  {
    img: AinAlKhaleejLogo,
    link: "",
    alt: "Ain Al Khaleej logo",
  },
  {
    img: ApisLogo,
    link: "https://www.instagram.com/apis.paramedical_institute/",
    alt: "APIS Paramedical Institute logo",
  },
  {
    img: BFLogo,
    link: "https://blackandfighter.com/",
    alt: "Black & Fighter logo",
  },
  {
    img: ConceptsLogo,
    link: "",
    alt: "Concepts logo",
  },
  {
    img: DreamFlowerLogo,
    link: "https://www.ivfkeraladf.com/",
    alt: "Dream Flower IVF Centre logo",
  },
  {
    img: ExitoLogo,
    link: "",
    alt: "Exito logo",
  },
  {
    img: FamsLogo,
    link: "https://www.instagram.com/fams_uae/",
    alt: "FAMS UAE logo",
  },
  {
    img: FlyWllLogo,
    link: "",
    alt: "Fly WLL logo",
  },
  {
    img: FrDrivingLogo,
    link: "",
    alt: "FR Driving logo",
  },
  {
    img: HomeStoriesLogo,
    link: "",
    alt: "Home Stories logo",
  },
  {
    img: HykaaLogo,
    link: "",
    alt: "HYKAA logo",
  },
  {
    img: IndianaLogo,
    link: "",
    alt: "Indiana logo",
  },
  {
    img: JanardhanLogo,
    link: "https://www.janardanhospital.com/",
    alt: "Janardhan Hospital logo",
  },
  {
    img: KasaragodAssociationLogo,
    link: "",
    alt: "Kasaragod Association logo",
  },
  {
    img: MqLogo,
    link: "",
    alt: "MQ logo",
  },
  {
    img: MuhdLogo,
    link: "",
    alt: "MUHD logo",
  },
  {
    img: RassluxeLogo,
    link: "https://www.instagram.com/rassluxe_perfumes/",
    alt: "Rass Luxe logo",
  },
  {
    img: SamsLogo,
    link: "https://www.instagram.com/sams_future.ev/",
    alt: "Sams Future EV logo",
  },
  {
    img: SigMetroLogo,
    link: "",
    alt: "SIG Metro logo",
  },
  {
    img: StarLinkLogo,
    link: "",
    alt: "Star Link logo",
  },
  {
    img: StartitlesLogo,
    link: "https://www.instagram.com/star_tiles._/",
    alt: "Star Tiles logo",
  },
  {
    img: YemmmarkkLogo,
    link: "https://www.instagram.com/yemmark_tvs/",
    alt: "Yemmark TVS logo",
  },
  {
    img: SilverlineLogo,
    link: "https://www.instagram.com/silverline_rental/",
    alt: "Silverline Rental logo",
  },
];

const Hero = () => {
  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(logos.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const visibleLogos = logos.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

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

      <TrustedClients logos={visibleLogos} />
    </section>
  );
};

export default Hero;
