import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      // Animate loader in
      gsap.fromTo(
        preloaderRef.current,
        { y: 0 },
        { y: 0, duration: 1, ease: "power4.out" }
      );

      // Fake loading timeout (replace with real API/data load)
      setTimeout(() => {
        setLoading(false);
        // Animate loader out
        gsap.to(preloaderRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
        });
      }, 2000);
    }
  }, [loading]);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-full bg-white text-black flex items-center justify-center z-[9999]"
    >
      <p className="text-3xl font-bold">Loading...</p>
    </div>
  );
};

export default Preloader;
