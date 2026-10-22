import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Word } from "./ScrollReveal";

const links = [
  { label: "github", href: "https://github.com/Sebasg006" },
  { label: "linkedin", href: "https://www.linkedin.com/in/sebastian-giraldo-638775307/" },
  { label: "email", href: "mailto:sebasgiraldoanaya@gmail.com" },
];

const statement =
  "I build web and mobile apps with React, React Native, Node and Postgres, from the first sketch to production.";

// Entrada suave al cargar la página
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

function Intro() {
  return (
    <>
      <motion.p
        {...fadeUp(0)}
        className="mb-8 flex items-center gap-2 font-mono text-sm text-neutral-500"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Medellín, Colombia
      </motion.p>

      <motion.h1
        {...fadeUp(0.05)}
        className="text-5xl font-semibold tracking-tight text-neutral-50 md:text-7xl"
      >
        Sebastián Giraldo
      </motion.h1>

      <motion.p
        {...fadeUp(0.1)}
        className="mt-3 text-2xl text-neutral-400 md:text-3xl"
      >
        Frontend developer
      </motion.p>

      <motion.p
        {...fadeUp(0.2)}
        className="mt-10 font-mono text-sm text-neutral-300"
      >
        <span className="text-emerald-400">&gt;</span> available for projects
        <span className="cursor-blink text-emerald-400">_</span>
      </motion.p>

      <motion.ul
        {...fadeUp(0.25)}
        className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm"
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1 text-neutral-400 transition-colors hover:text-neutral-50"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </motion.ul>
    </>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Fase 1: la presentación se aleja y desaparece
  const introOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const introY = useTransform(scrollYProgress, [0, 0.25], [0, -40]);

  // Fase 2: la frase aparece y se enciende palabra por palabra
  const statementOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const words = statement.split(" ");
  const revealStart = 0.3;
  const revealEnd = 0.85;
  const step = (revealEnd - revealStart) / words.length;

  // Sin animaciones si el sistema pide reducir movimiento
  if (reduceMotion) {
    return (
      <section id="hero" className="mx-auto w-full max-w-5xl px-6 py-32">
        <Intro />
        <p className="mt-24 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-5xl">
          {statement}
        </p>
      </section>
    );
  }

  return (
    <section ref={ref} id="hero" className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ opacity: introOpacity, scale: introScale, y: introY }}
          className="absolute inset-x-0 mx-auto w-full max-w-5xl origin-left px-6"
        >
          <Intro />
        </motion.div>

        <motion.p
          style={{ opacity: statementOpacity }}
          className="relative mx-auto w-full max-w-5xl px-6 text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-5xl lg:text-6xl"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[revealStart + i * step, revealStart + (i + 1) * step]}
            >
              {word}
            </Word>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
