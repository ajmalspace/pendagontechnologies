import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black px-7 py-8 text-white font-inter md:px-11 md:pt-16">
      <div className="flex flex-col justify-between gap-10 sm:mb-40 md:flex-row md:flex-wrap">
        {/* Contact Section */}
        <div className="space-y-5 md:space-y-8">
          <p className="text-[22px] font-semibold tracking-wide md:text-[36px]">
            Do it once. Do it right.
          </p>

          <a
            href="mailto:info@pendagon.in"
            className="block text-lg text-gray-300 transition-colors hover:text-white md:text-[16px]"
          >
            [&nbsp; INFO@PENDAGON.IN &nbsp;]
          </a>
        </div>

        {/* Navigation and Social Links */}
        <div className="z-10 flex flex-row gap-x-12 sm:gap-x-20 md:gap-[160px]">
          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-1 text-[16px] font-normal leading-relaxed">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-gray-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-gray-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/works"
                  className="transition-colors hover:text-gray-300"
                >
                  Works
                </Link>
              </li>

              <li>
                <Link
                  to="/About"
                  className="transition-colors hover:text-gray-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/career"
                  className="transition-colors hover:text-gray-300"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="transition-colors hover:text-gray-300"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-label="Social media links">
            <ul className="space-y-2 text-[16px] font-normal leading-relaxed">
              <li>
                <a
                  href="https://www.instagram.com/pendagon.in_?igsh=OWNuNmVvYjNqMjI5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-gray-300"
                >
                  <span className="w-[100px]">Instagram</span>
                  <FiArrowUpRight
                    className="ml-4"
                    aria-hidden="true"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61558967332223&sk=directory_links"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-gray-300"
                >
                  <span className="w-[100px]">Facebook</span>
                  <FiArrowUpRight
                    className="ml-4"
                    aria-hidden="true"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/pendagon-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-gray-300"
                >
                  <span className="w-[100px]">LinkedIn</span>
                  <FiArrowUpRight
                    className="ml-4"
                    aria-hidden="true"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCzBNIt7nDGZnlsd1zv6U1GQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-gray-300"
                >
                  <span className="w-[100px]">YouTube</span>
                  <FiArrowUpRight
                    className="ml-4"
                    aria-hidden="true"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://pin.it/6VDzFZKOq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-gray-300"
                >
                  <span className="w-[100px]">Pinterest</span>
                  <FiArrowUpRight
                    className="ml-4"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="sm:absolute sm:-bottom-12 sm:left-1/2 sm:-translate-x-1/2">
        <div className="relative text-center md:mt-16 md:text-right">
          <div className="flex justify-between pt-5 text-[10px] font-normal text-gray-300 md:justify-end md:gap-x-48 md:text-[16px]">
            <p>KSD - KERALA</p>
            <p>© {currentYear}</p>
          </div>

          <p className="pt-6 text-center text-[68px] font-bold leading-[44px] text-gray-500 sm:text-[150px] md:text-[216px] md:leading-[150px]">
            PENDAGON
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;