import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { AgencyVideo } from "../assets/assets";

const HeroAboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const navigate = useNavigate();

  const cursorRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Move custom cursor without causing React re-renders
  const updateCursorPosition = () => {
    const cursor = cursorRef.current;

    if (!cursor) {
      animationFrameRef.current = null;
      return;
    }

    const { x, y } = pointerPositionRef.current;

    cursor.style.transform = `
      translate3d(${x}px, ${y}px, 0)
      translate(-50%, -50%)
    `;

    animationFrameRef.current = null;
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    pointerPositionRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    if (animationFrameRef.current === null) {
      animationFrameRef.current =
        window.requestAnimationFrame(updateCursorPosition);
    }
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType === "touch") return;

    const cursor = cursorRef.current;

    if (cursor) {
      cursor.style.opacity = "1";
    }

    handlePointerMove(event);
  };

  const handlePointerLeave = () => {
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.style.opacity = "0";
    }
  };

  // Cancel pending cursor animation when component unmounts
  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Modal keyboard control and background-scroll lock
  useEffect(() => {
    if (!isVideoOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <section>
      {/* Video Preview */}
      <button
        type="button"
        aria-label="Play Pendagon agency reel"
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={() => setIsVideoOpen(true)}
        className="relative mx-auto block w-[93%] overflow-hidden rounded-2xl text-left md:cursor-none"
      >
        <video
          src={AgencyVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="pointer-events-none w-full"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/40"
        />
      </button>

      {/* Custom Desktop Cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[1000] hidden items-center justify-center opacity-0 transition-opacity duration-200 will-change-transform md:flex"
        style={{
          transform:
            "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      >
        <div className="flex items-center gap-2 rounded-full bg-[#FF960B] px-5 py-3 text-sm font-semibold text-gray-900">
          <FaPlay aria-hidden="true" />
          Play Reel
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pendagon agency reel"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative aspect-video w-full overflow-hidden rounded-lg bg-black md:w-[950px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-3xl text-white"
            >
              <BiX aria-hidden="true" />
            </button>

            <video
              src={AgencyVideo}
              autoPlay
              controls
              playsInline
              preload="metadata"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      {/* About Content */}
      <div
        ref={aboutRef}
        className="mx-auto mt-16 px-5 md:mt-[125px] md:px-11"
      >
        <h2
          className={`mb-6 font-space text-[16px] font-semibold text-gray-900 transition-transform duration-700 md:mb-10 md:text-[20px] ${
            aboutInView ? "translate-y-0" : "translate-y-6"
          }`}
        >
          ABOUT PENDAGON
        </h2>

        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {/* Desktop Button */}
          <button
            type="button"
            onClick={() => navigate("/about")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`hidden w-44 items-center gap-5 self-start rounded-full py-2 text-sm font-semibold transition-colors duration-300 md:flex ${
              isHovered
                ? "bg-[#4B327C] text-white"
                : "bg-[#FF960B] text-gray-900"
            }`}
          >
            <span
              className={`flex items-center rounded-full bg-white p-2 text-[#FF960B] transition-transform duration-500 ${
                isHovered
                  ? "translate-x-[132px] rotate-[360deg]"
                  : "translate-x-2"
              }`}
            >
              <FaArrowRight aria-hidden="true" />
            </span>

            <span className="transition-opacity duration-300">
              {isHovered ? "Let’s Go" : "More about us"}
            </span>
          </button>

          <p
            className={`font-space text-[22px] font-normal leading-tight text-gray-900 transition-transform duration-700 md:pl-14 md:text-[32px] ${
              aboutInView ? "translate-y-0" : "translate-y-6"
            }`}
          >
            We blend the power of strategy, design, development{" "}
            <br className="hidden md:block" />
            and growth marketing to turn bold visions into{" "}
            <br className="hidden md:block" />
            standout brands.
          </p>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="block w-fit self-start rounded-full bg-[#FF960B] px-5 py-2 text-sm font-semibold text-gray-900 md:hidden"
          >
            More about us
          </button>
        </div>

        <hr className="my-12 border-gray-300" />

        {/* Statistics */}
        <div className="flex flex-col font-space md:mt-8 md:flex-row md:gap-28">
          <div className="flex max-w-sm flex-col gap-4 text-base md:text-lg">
            <p className="font-semibold text-gray-900">
              Join Us in the Journey
            </p>

            <p className="text-justify text-[14px] font-light leading-tight text-gray-700 md:text-[20px]">
              Whether you’re an emerging startup or an established brand ready
              to evolve, we’re here to fuel your digital growth.
            </p>
          </div>

          <div
            ref={statsRef}
            className="mt-10 flex w-full flex-wrap justify-between gap-10 md:gap-20"
          >
            <div>
              <p className="text-5xl font-semibold text-gray-800 md:text-7xl">
                {statsInView && (
                  <CountUp start={0} end={2} duration={2} />
                )}
                <span className="text-3xl text-orange-500 md:text-5xl">
                  +
                </span>
              </p>

              <p className="mt-1 text-sm text-gray-600">
                YEARS OF WORK
              </p>
            </div>

            <div>
              <p className="text-5xl font-semibold text-gray-800 md:text-7xl">
                {statsInView && (
                  <CountUp start={0} end={350} duration={2} />
                )}
                <span className="text-3xl text-orange-500 md:text-5xl">
                  +
                </span>
              </p>

              <p className="mt-1 text-sm text-gray-600">
                SUCCESSFUL PROJECTS
              </p>
            </div>

            <div>
              <p className="text-5xl font-semibold text-gray-800 md:text-7xl">
                {statsInView && (
                  <CountUp start={0} end={18} duration={2} />
                )}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                PROFESSIONALS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;