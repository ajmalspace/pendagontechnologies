import React from "react";
import PortfolioHero from "../Components/PortfolioHero";
import WebPortfolio from "../Components/WebPortfolio";
import ContactForm from "../Components/ContactForm";

const Portfolio = () => {
  return (
    <div className="w-full">
      <PortfolioHero />
      <WebPortfolio />
      <div className="md:text-center pt-10 md:pt-20 md:text-[36px] text-xl font-semibold py-7 font-space">
        <p>Ready to build a website that works this hard?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Portfolio;
