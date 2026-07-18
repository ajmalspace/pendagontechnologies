import { useEffect, useRef } from "react";

const Cursor = ({ parentSelector = ".target-area" }) => {
  const cursorRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const parent = document.querySelector(parentSelector);
    const cursor = cursorRef.current;

    if (!parent || !cursor) return undefined;

    const updateCursorPosition = () => {
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

      cursor.style.opacity = "1";
      handlePointerMove(event);
    };

    const handlePointerLeave = () => {
      cursor.style.opacity = "0";
    };

    parent.addEventListener("pointerenter", handlePointerEnter, {
      passive: true,
    });

    parent.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    parent.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    return () => {
      parent.removeEventListener("pointerenter", handlePointerEnter);
      parent.removeEventListener("pointermove", handlePointerMove);
      parent.removeEventListener("pointerleave", handlePointerLeave);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [parentSelector]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1000] flex h-20 w-20 items-center justify-center rounded-full bg-[#FF960B] text-sm font-semibold text-gray-900 opacity-0 transition-opacity duration-200 will-change-transform"
      style={{
        transform:
          "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
      }}
    >
      More
    </div>
  );
};

export default Cursor;