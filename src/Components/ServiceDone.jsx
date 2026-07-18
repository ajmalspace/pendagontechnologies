import React from "react";
import ServiceCard from "./ServiceCard";
import { Work2, Work3, Work4 } from "../assets/assets";

const services = [
  {
    title: "Digital Marketing",
    image: Work2,
    description:
      "Our digital marketing strategies focus on performance, clarity, and impact—crafting campaigns that don’t just reach people, but truly convert.",
    tags: [
      "Strategy",
      "Campaign",
      "Content",
      "Marketing",
      "Social Media Marketing",
      "SEO",
      "Influencer Marketing",
      "Paid Advertising",
      "Analytics & Reporting",
      "Lead Generation",
    ],
    link: "/Digital",
  },
  {
    title: "Performance Marketing",
    image: Work3,
    description:
      "Our performance marketing services are built for results—driving measurable growth through data-driven strategies, optimization, and ROI-focused campaigns.",
    tags: [
      "Paid Media",
      "Social Media Advertising",
      "Affiliate Marketing",
      "CRO",
      "Retargeting",
      "Funnel Optimization",
      "Lead Generation",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Branding Solutions",
    image: Work4,
    description:
      "We create and evolve brands with purpose — building identities that resonate, inspire trust, and drive loyalty. Whether launching a new brand or reinventing an existing one, our solutions are crafted for lasting impact.",
    tags: [
      "Brand Strategy",
      "Visual Identity Design",
      "Logo & Brand Assets",
      "Guidelines",
      "Brand Messaging",
      "Rebranding",
      "Storytelling",
      "Positioning",
    ],
  },
  {
    title: "UI/UX Designing",
    image: Work3,
    description:
      "Our UI/UX design solutions prioritize clarity, usability, and engagement—delivering interfaces that don’t just look great but feel intuitive and drive real results.",
    tags: [
      "User Interface",
      "User Experience",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Interaction Design",
      "Design Systems",
      "Mobile & Web App",
    ],
  },
  {
    title: "Website Development",
    image: Work2,
    description:
      "We build websites that are fast, functional, and future-ready—crafted to perform across platforms, enhance user experience, and deliver measurable results.",
    tags: [
      "Custom Website",
      "Responsive Web Design",
      "Ecommerce",
      "CMS Intergration",
      "SEO",
      "Frontend & Backend",
      "Landing Page Design",
      "Website Maintenance",
      "Optimization",
    ],
  },
  {
    title: "Creative Designing",
    image: Work4,
    description:
      "We blend imagination with strategy—delivering creative designs that captivate, communicate, and convert across every platform and medium.",
    tags: [
      "Graphic Design",
      "Brand Collateral",
      "Social Media Creatives",
      "Packaging",
      "Presentation Design",
      "Motion Graphics",
      "Animation",
      "Print & Digital Media Design",
    ],
  },
];

const ServiceDone = () => {
  return (
    <div
      id="services-section" // 👈 this makes the Hero arrow scroll here
      className="px-9 md:px-12 max-w-6xl mx-auto md:py-12"
    >
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceDone;
