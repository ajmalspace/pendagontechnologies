import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { BiDownArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/pendagonlogo.webp";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "SERVICES", path: "/services" },
  { name: "WORKS", path: "/works" },
  { name: "ABOUT", path: "/about" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
  { name: "CAREER", path: "/career" },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const showNavbarRef = useRef(true);

  // Optimized navbar hide/show on scroll
  useEffect(() => {
    let animationFrameId = null;

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);

        const shouldShowNavbar =
          isMenuOpen ||
          currentScrollY <= 60 ||
          currentScrollY < lastScrollYRef.current;

        if (shouldShowNavbar !== showNavbarRef.current) {
          showNavbarRef.current = shouldShowNavbar;
          setShowNavbar(shouldShowNavbar);
        }

        lastScrollYRef.current = currentScrollY;
        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMenuOpen]);

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      showNavbarRef.current = true;
      setShowNavbar(true);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        aria-label="Main navigation"
        className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-5 py-5 transition-transform duration-300 ease-in-out will-change-transform sm:px-10 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <Link to="/" aria-label="Pendagon home" onClick={closeMenu}>
          <img
            src={logo}
            alt="Best digital marketing agency in Kasaragod"
            width="700"
            height="163"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="sm:h-11 h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-16 md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="relative overflow-hidden text-[13px] font-bold text-black before:absolute before:bottom-0 before:right-0 before:h-[1.5px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919037622606?text=Hello,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="relative ml-4 flex items-center gap-1 overflow-hidden text-[13px] font-bold text-black before:absolute before:bottom-0 before:right-0 before:h-[1.5px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
          >
            LET’S TALK

            <BiDownArrowAlt
              aria-hidden="true"
              className="size-6 rotate-[225deg]"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="text-xl font-bold text-black focus:outline-none md:hidden"
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : "MENU"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="fixed left-0 top-0 z-40 h-full w-full bg-white px-6 py-24 md:hidden"
        >
          <ul className="flex flex-col items-center gap-3 text-[20px] font-semibold text-black">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="block pb-2 font-bold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919037622606?text=Hello,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 block text-center text-[19px] font-bold text-black hover:underline"
          >
            LET’S TALK
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;