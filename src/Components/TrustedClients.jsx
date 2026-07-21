// src/Components/TrustedClients.jsx
import React from "react";
import { FiPlus } from "react-icons/fi";

const TrustedClients = ({ logos }) => {
  const cols = 4;

  return (
    <div className="w-full max-w-5xl">
      <p className="pt-12 md:pt-24 px-2 text-base max-w-md sm:max-w-xl font-space mx-auto text-center">
        Our Trusted Clients
      </p>

      <div className="relative mt-6 grid grid-cols-2 md:grid-cols-7 border-t border-l border-gray-200 rounded-3xl overflow-hidden">
        {logos.map((logo, index) => {
          const isDesktopRightEdge = (index + 1) % cols === 0;
          const isDesktopLastRow =
            index >= logos.length - (logos.length % cols || cols);
          const alternateBg =
            Math.floor(index / cols) % 2 === 0
              ? index % 2 === 0
              : index % 2 !== 0;

          const logoImage = (
            <img
              src={logo.img}
              alt={logo.alt}
              width="160"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-10 md:h-12 w-auto object-contain grayscale brightness-0 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
          );

          return (
            <div
              key={logo.alt}
              className={`relative flex items-center justify-center border-r border-b border-gray-200 px-4 py-8 md:p-10 ${
                alternateBg ? "bg-[#f7f7f7]" : "bg-white"
              }`}
            >
              {logo.link ? (
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${logo.alt.replace(" logo", "")}`}
                  className="flex items-center justify-center"
                >
                  {logoImage}
                </a>
              ) : (
                logoImage
              )}

              {/* Decorative plus icons at interior grid intersections (desktop only) */}
              {!isDesktopRightEdge && !isDesktopLastRow && (
                <FiPlus
                  aria-hidden="true"
                  className="hidden md:block absolute -right-[10px] -bottom-[10px] z-10 size-5 text-gray-300"
                  strokeWidth={1}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedClients;