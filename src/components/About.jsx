import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, ScrollText, SectionLabel } from "./ScrollReveal";
import FeaturedWork from "./FeaturedWork";

const about =
  "I'm a frontend developer and Software & Data Engineering student. I like turning ideas into products that feel intuitive and reliable, where design and logic work together.";

const skillRows = [
  ["React", "React Native", "TypeScript", "JavaScript", "Next.js", "Tailwind", "HTML", "CSS"],
  ["Node.js", "Python", "MongoDB", "Firebase", "Git", "Figma", "Photoshop", "Lightroom"],
];

const projects = [
  {
    name: "Foodie",
    description: "Responsive landing page for a healthy food delivery brand.",
    tags: "React · CSS · react-icons",
    live: "https://sebasg006.github.io/landing",
    repo: "https://github.com/Sebasg006/landing",
  },
  {
    name: "OQUA",
    description: "Prototype of a mobile app, built with Expo and React Native.",
    tags: "React Native · Expo · TypeScript",
    repo: "https://github.com/Sebasg006/OQUA",
  },
  {
    name: "Clock",
    description: "A clock application built with React.",
    tags: "React · CSS",
    repo: "https://github.com/Sebasg006/clock-wirh-react-native",
  },
];

// Dos filas de tecnologías que se desplazan en sentidos opuestos con el scroll
function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "5%"]);

  return (
    <section ref={ref} aria-label="Skills" className="overflow-hidden py-24">
      <div className="mx-auto mb-10 w-full max-w-5xl px-6">
        <SectionLabel index="02">stack</SectionLabel>
      </div>
      {skillRows.map((row, i) => (
        <motion.ul
          key={i}
          style={{ x: i === 0 ? xLeft : xRight }}
          className="flex gap-12 whitespace-nowrap py-3 text-5xl font-semibold tracking-tight text-neutral-800 md:text-7xl"
        >
          {row.map((skill) => (
            <li key={skill} className="transition-colors duration-300 hover:text-neutral-100">
              {skill}
            </li>
          ))}
        </motion.ul>
      ))}
    </section>
  );
}

export default function About() {
  return (
    <div>
      <section id="about" className="mx-auto w-full max-w-5xl px-6 py-32 md:py-48">
        <SectionLabel index="01">about</SectionLabel>
        <ScrollText
          text={about}
          className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-5xl"
        />
      </section>

      <Skills />

      <FeaturedWork />

      <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-32">
        <SectionLabel index="04">more projects</SectionLabel>
        <ul className="border-t border-neutral-800">
          {projects.map((project, i) => (
            <li key={project.name}>
              <Reveal>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-neutral-800 py-8 md:grid-cols-[auto_1fr_auto] md:gap-10">
                  <span className="font-mono text-sm text-neutral-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <a
                      href={project.live ?? project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-2xl font-semibold tracking-tight text-neutral-100 transition-colors hover:text-emerald-400 md:text-4xl"
                    >
                      {project.name}
                    </a>
                    <p className="mt-2 text-neutral-500">{project.description}</p>
                    <p className="mt-3 font-mono text-xs text-neutral-600">{project.tags}</p>
                  </div>
                  <div className="col-start-2 flex gap-6 font-mono text-sm md:col-start-auto">
                    {[
                      project.live && { label: "live", href: project.live },
                      { label: "code", href: project.repo },
                    ]
                      .filter(Boolean)
                      .map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-100"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
