import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Colores de sintaxis sobrios: grises + un solo acento
const c = {
  key: "text-neutral-500",
  tag: "text-neutral-100",
  attr: "text-neutral-400",
  str: "text-emerald-400",
  txt: "text-neutral-300",
};

// Cada línea es una lista de [texto, color]; "step" indica qué pieza de la vista previa aparece
const lines = [
  { tokens: [["export function ", c.key], ["ProfileCard", c.tag], ["() {", c.key]] },
  { tokens: [["  return (", c.key]] },
  { tokens: [["    <", c.key], ["article", c.tag], [" className", c.attr], ["=", c.key], ['"card"', c.str], [">", c.key]], step: "card" },
  { tokens: [["      <", c.key], ["Avatar", c.tag], [" initials", c.attr], ["=", c.key], ['"SG"', c.str], [" />", c.key]], step: "avatar" },
  { tokens: [["      <", c.key], ["h3", c.tag], [">", c.key], ["Sebastián Giraldo", c.txt], ["</", c.key], ["h3", c.tag], [">", c.key]], step: "name" },
  { tokens: [["      <", c.key], ["p", c.tag], [">", c.key], ["Frontend developer", c.txt], ["</", c.key], ["p", c.tag], [">", c.key]], step: "role" },
  { tokens: [["      <", c.key], ["Stack", c.tag], [" items", c.attr], ["=", c.key], ["{", c.key], ['["React", "Node", "SQL"]', c.str], ["}", c.key], [" />", c.key]], step: "stack" },
  { tokens: [["      <", c.key], ["Button", c.tag], [">", c.key], ["Let's talk", c.txt], ["</", c.key], ["Button", c.tag], [">", c.key]], step: "button" },
  { tokens: [["    </", c.key], ["article", c.tag], [">", c.key]] },
  { tokens: [["  );", c.key]] },
  { tokens: [["}", c.key]] },
];

// Posición (en caracteres) donde termina cada línea, para saber qué ya se escribió
const lineEnds = [];
let total = 0;
for (const line of lines) {
  total += line.tokens.reduce((n, [text]) => n + text.length, 0);
  lineEnds.push(total);
}

function CodeLine({ line, start, typed }) {
  let pos = start;
  return (
    <div className="min-h-[1.6em] whitespace-pre">
      {line.tokens.map(([text, color], i) => {
        const visible = Math.max(0, Math.min(text.length, typed - pos));
        pos += text.length;
        return visible > 0 ? (
          <span key={i} className={color}>
            {text.slice(0, visible)}
          </span>
        ) : null;
      })}
    </div>
  );
}

// Pieza de la vista previa que entra cuando su línea de código queda escrita
function Piece({ show, children, className = "" }) {
  return (
    <motion.div
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CodeStage() {
  const ref = useRef(null);
  const [typed, setTyped] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // El código se escribe entre el 10% y el 85% del recorrido
  const typedProgress = useTransform(scrollYProgress, [0.1, 0.85], [0, total]);
  useMotionValueEvent(typedProgress, "change", (v) => setTyped(Math.round(v)));

  const stageOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const stageScale = useTransform(scrollYProgress, [0, 0.08], [0.94, 1]);

  const done = (step) => {
    const i = lines.findIndex((l) => l.step === step);
    return typed >= lineEnds[i];
  };

  const lineStarts = [0, ...lineEnds.slice(0, -1)];
  const cursorLine = Math.min(
    lines.length - 1,
    lineEnds.findIndex((end) => typed < end) === -1
      ? lines.length - 1
      : lineEnds.findIndex((end) => typed < end)
  );

  return (
    <section ref={ref} aria-label="Live build" className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ opacity: stageOpacity, scale: stageScale }}
          className="mx-auto w-full max-w-6xl px-6"
        >
          <p className="mb-8 flex items-center gap-2 font-mono text-sm text-neutral-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            live build
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            {/* Editor */}
            <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
              <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                <span className="ml-3 font-mono text-xs text-neutral-500">
                  ProfileCard.jsx
                </span>
              </div>
              <div className="flex overflow-x-auto p-4 font-mono text-[11px] leading-[1.6] md:p-6 md:text-sm">
                <div className="mr-5 select-none text-right text-neutral-700">
                  {lines.map((_, i) => (
                    <div key={i} className="min-h-[1.6em]">{i + 1}</div>
                  ))}
                </div>
                <div className="relative">
                  {lines.map((line, i) => (
                    <div key={i} className="flex">
                      <CodeLine line={line} start={lineStarts[i]} typed={typed} />
                      {i === cursorLine && (
                        <span className="cursor-blink ml-px inline-block h-[1.2em] w-[0.55em] translate-y-[0.2em] bg-emerald-400/80" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vista previa */}
            <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 font-mono text-xs text-neutral-500">
                <span>localhost:5173</span>
                <span className={done("button") ? "text-emerald-400" : ""}>
                  {done("button") ? "● ready" : "○ compiling"}
                </span>
              </div>
              <div className="flex min-h-[240px] items-center justify-center p-6 md:min-h-[360px] md:p-10">
                <Piece
                  show={done("card")}
                  className="w-full max-w-xs rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
                >
                  <Piece show={done("avatar")}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 font-mono text-sm text-neutral-100">
                      SG
                    </div>
                  </Piece>
                  <Piece show={done("name")}>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-50">
                      Sebastián Giraldo
                    </h3>
                  </Piece>
                  <Piece show={done("role")}>
                    <p className="mt-1 text-sm text-neutral-500">Frontend developer</p>
                  </Piece>
                  <Piece show={done("stack")}>
                    <ul className="mt-5 flex gap-2 font-mono text-xs">
                      {["React", "Node", "SQL"].map((s) => (
                        <li key={s} className="rounded-full border border-neutral-800 px-2.5 py-1 text-neutral-400">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </Piece>
                  <Piece show={done("button")}>
                    <a
                      href="#contact"
                      className="mt-6 block rounded-lg bg-neutral-100 py-2.5 text-center text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
                    >
                      Let's talk
                    </a>
                  </Piece>
                </Piece>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
