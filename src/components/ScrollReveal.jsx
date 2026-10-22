import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Cada palabra se enciende según avanza el scroll (estilo Apple)
export function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

// Texto que se enciende palabra por palabra mientras cruza la pantalla
export function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");
  const step = 1 / words.length;

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i * step, (i + 1) * step]}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

// Bloque que sube y aparece ligado al scroll (y se devuelve al subir)
export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.6"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

// Etiqueta pequeña de sección, ej. "01 / about"
export function SectionLabel({ index, children }) {
  return (
    <p className="mb-10 font-mono text-sm text-neutral-500">
      <span className="text-emerald-400">{index}</span> / {children}
    </p>
  );
}
