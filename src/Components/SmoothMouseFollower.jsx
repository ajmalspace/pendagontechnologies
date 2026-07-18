import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const SmoothMouseFollower = () => {
  // Skip rendering on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const outerX = useSpring(rawX, { stiffness: 100, damping: 16 });
  const outerY = useSpring(rawY, { stiffness: 100, damping: 16 });

  const innerX = useSpring(rawX, { stiffness: 60, damping: 10});
  const innerY = useSpring(rawY, { stiffness: 60, damping: 10 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rawX, rawY]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Outer ring */}
      
      {/* Inner core */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-black"
        style={{
          translateX: innerX,
          translateY: innerY,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default SmoothMouseFollower;
