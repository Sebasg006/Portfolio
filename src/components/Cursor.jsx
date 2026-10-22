import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Cursor propio: un punto que sigue al mouse y crece sobre enlaces y botones.
// Solo en computadores (mouse o trackpad), nunca en pantallas táctiles.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHovering(Boolean(e.target.closest("a, button")));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
    >
      <motion.div
        animate={{
          width: hovering ? 44 : 10,
          height: hovering ? 44 : 10,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </motion.div>
  );
}
