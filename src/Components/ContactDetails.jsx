import React from "react";

const ContactDetails = () => {
  return (
    <div className="text-black font-space uppercase leading-relaxed">
      <div className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-16">
          <div>
            <p className="text-xl font-semibold mb-2">Say Hello</p>
            <h2 className="text-xl font-bold leading-snug">
              Got something on your mind?
            </h2>
          </div>

          <div>
            <p className="text-xs font-semibold mb-1">Our Address</p>
            <p className="font-medium normal-case text-sm">
              Square Nine Mall 4th Floor, <br />
              Kasaragod, Kerala, India
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold mb-1">Phone Number</p>
            <a
              href="tel:+919037622606"
              className="font-medium normal-case text-sm hover:text-amber-500 transition duration-200"
            >
              +91 9037622606
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold mb-1">Email</p>
            <a
              href="mailto:info@pendagon.com"
              className="font-medium normal-case text-sm hover:text-amber-500 transition duration-200"
            >
              info@pendagon.com
            </a>
          </div>

          <div>
            <p className="text-xl font-semibold mb-2">Careers & Internships</p>
            <h2 className="text-3xl font-bold leading-snug">
              Think you’re 
              crazy enough 
              to join our crew?
            </h2>
          </div>

          <div>
            <a
              href="mailto:hello@pendagon.com"
              className="font-medium normal-case text-sm hover:text-amber-500 transition duration-200"
            >
              HELLO@PENDAGON.com
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Column */}
          <div className="space-y-24">
            <div>
              <p className="uppercase text-xl md:text-lg font-semibold mb-2 pb-5">
                Say Hello
              </p>
              <h2 className="text-6xl  font-bold leading-tight">
                Got something on your mind?
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 text-sm md:text-base">
            <div>
              <p className="uppercase text-sm font-semibold mb-1">
                Our Address
              </p>
              <p className="font-medium normal-case">
                Square Nine Mall 4th Floor, <br />
                Kasaragod, Kerala, India
              </p>
            </div>

            <div>
              <p className="uppercase text-xs font-semibold mb-1">
                Phone Number
              </p>
              <a
                href="tel:+919037622606"
                className="font-medium normal-case hover:text-amber-500 transition duration-200"
              >
                +91 9037622606
              </a>
            </div>
            <div>
            <p className="text-xs font-semibold mb-1">Email</p>
            <a
              href="mailto:info@pendagon.com"
              className="font-medium uppercase text-sm hover:text-amber-500 transition duration-200"
            >
              info@pendagon.com
            </a>
          </div>

           
          


      </div>
      <div className="space-y-24">
            <div>
              <p className="uppercase text-xl md:text-lg font-semibold mb-2 pb-5">
                CAREERS & INTERNSHIPS
              </p>
              <h2 className="text-5xl font-bold leading-tight">
                Think you're crazy enough to join our crew?
              </h2>
            </div>
          </div>
          <div className="space-y-12 pt-30">
            <div>
            <a
              href="mailto:hello@pendagon.com"
              className="font-medium normal-case text-3xl hover:text-amber-500 transition duration-200"
            >
              HELLO@PENDAGON.COM
            </a>
          </div></div>
    </div>
    </div></div>
  );
};

export default ContactDetails;
