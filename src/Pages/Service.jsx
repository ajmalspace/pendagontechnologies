import React from "react";
import ServiceHero from "../Components/ServiceHero";
import ServiceDone from "../Components/ServiceDone";

const Service = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ServiceHero />

      {/* Services Section */}
      <ServiceDone />
    </div>
  );
};

export default Service;
