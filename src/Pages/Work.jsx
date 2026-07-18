import React from "react";
import WorkHero from "../Components/WorkHero";
import Woworks from "../Components/Woworks";
import ContactForm from "../Components/ContactForm";

const Work = () => {
  return (
    <div>
      <WorkHero />
      <Woworks />
      <div className="md:text-center pt-30 md:text-[36px] text-xl font-semibold md:3xl py-7 font-space">
        <p>Ready to take next step with us?</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Work;
