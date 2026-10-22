import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./ScrollReveal";

const socials = [
  { label: "github", href: "https://github.com/Sebasg006" },
  { label: "linkedin", href: "https://www.linkedin.com/in/sebastian-giraldo-638775307/" },
];

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  // El título crece hasta su tamaño final mientras entra la sección
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      id="contact"
      className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between px-6 pb-10 pt-32"
    >
      <div>
        <SectionLabel index="05">contact</SectionLabel>

        <motion.h2
          style={{ scale, opacity }}
          className="origin-left text-5xl font-semibold leading-none tracking-tight text-neutral-50 md:text-8xl"
        >
          Let's work
          <br />
          together.
        </motion.h2>

        <Reveal className="mt-16">
          <p className="max-w-md text-lg text-neutral-400">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
          <a
            href="mailto:sebasgiraldoanaya@gmail.com"
            className="group mt-6 inline-flex items-center gap-2 text-xl text-neutral-100 underline decoration-neutral-700 underline-offset-8 transition-colors hover:decoration-emerald-400 md:text-3xl"
          >
            sebasgiraldoanaya@gmail.com
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>

      <footer className="mt-32 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6 font-mono text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Sebastián Giraldo</p>
        <ul className="flex gap-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-neutral-100"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
