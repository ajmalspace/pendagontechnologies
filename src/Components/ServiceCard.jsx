import React, { useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ title, description, tags, image, link }) => {
  const cardRef = useRef(null);
  const arrowRef = useRef(null);
  const imageRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Initial states
    gsap.set(arrowRef.current, { x: 0, color: "#9ca3af" });
    gsap.set(imageRef.current, { y: -30, autoAlpha: 0 });
    gsap.set(circleRef.current, { scale: 0, autoAlpha: 0 });

    // Scroll animation
    gsap.fromTo(
      cardRef.current,
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Hover enter
  const handleHoverEnter = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(circleRef.current, { x, y });

    gsap.to(circleRef.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 0.5,
      ease: "back.out(2.7)",
    });

    gsap.to(arrowRef.current, {
      x: 10,
      color: "#000",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  // Hover leave
  const handleHoverLeave = () => {
    gsap.to(circleRef.current, {
      scale: 0,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(arrowRef.current, {
      x: 0,
      color: "#9ca3af",
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(imageRef.current, {
      y: -30,
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  // Mouse move (trail)
  const handleHoverMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(circleRef.current, {
      x: x - 0, // 👈 offset left of cursor
      y: y - 80,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden mb-10 pt-20 font-space bg-[#eeeeee40] rounded-xl border border-[#DADADA]/20"
    >
      {/* Trail Circle */}
      <div
        ref={circleRef}
        className="absolute w-22 h-22 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF960B] text-white flex items-center justify-center font-medium pointer-events-none z-[100]"
      >
        More
      </div>

      {/* Header (Only clickable area) */}
      <Link
        to={link || "#"}
        className="flex items-center py-5 relative z-10 cursor-none"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onMouseMove={handleHoverMove} // 👈 follow the mouse
      >
        <h2 className="md:text-3xl text-[20px] pl-6">{title}</h2>
        <BsArrowRight ref={arrowRef} className="text-4xl ml-20" />
      </Link>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        {/* Left: Description */}
        <div className="px-6 pt-10 text-[17px] text-gray-600">{description}</div>

        {/* Right: Tags */}
        <div className="border-l border-gray-200 px-4 py-10 relative">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 text-bold rounded-full border border-gray-300 text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Image */}
      {image && (
        <div className="absolute top-8 right-10">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className="w-40 h-25 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
