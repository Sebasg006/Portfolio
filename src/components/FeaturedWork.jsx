import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionLabel } from "./ScrollReveal";
import logo from "../assets/coatrack/logo.svg";
import trainer from "../assets/coatrack/trainer.jpg";
import screenClientes from "../assets/coatrack/screen-clientes.png";
import screenEntrenar from "../assets/coatrack/screen-entrenar.png";
import screenProgreso from "../assets/coatrack/screen-progreso.png";
import screenDetalle from "../assets/coatrack/screen-detalle.png";

const meta = [
  { label: "Role", value: "Product design & full-stack development" },
  { label: "Stack", value: "React Native · Expo · Node · PostgreSQL" },
  { label: "Platform", value: "iOS & Android" },
  { label: "Status", value: "In development" },
];

// Marco de teléfono hecho en CSS alrededor de una captura
function Phone({ src, alt, className = "" }) {
  return (
    <div
      className={`aspect-[1/2] rounded-[2.6rem] border border-neutral-700/60 bg-neutral-900 p-2.5 shadow-2xl shadow-black/60 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-[2rem] object-cover object-top"
      />
    </div>
  );
}

// Tres teléfonos: el del centro sube y los laterales se abren con el scroll
function PhoneStage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const centerY = useTransform(scrollYProgress, [0, 0.35], ["30%", "0%"]);
  const centerScale = useTransform(scrollYProgress, [0, 0.35], [0.85, 1]);
  const sideOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0.25, 0.65], ["0%", "-105%"]);
  const rightX = useTransform(scrollYProgress, [0.25, 0.65], ["0%", "105%"]);
  const leftRotate = useTransform(scrollYProgress, [0.25, 0.65], [0, -6]);
  const rightRotate = useTransform(scrollYProgress, [0.25, 0.65], [0, 6]);
  const sideScale = useTransform(scrollYProgress, [0.25, 0.65], [0.85, 0.92]);
  const captionOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="relative w-36 sm:w-48 md:w-64">
          <motion.div
            style={{ x: leftX, rotate: leftRotate, scale: sideScale, opacity: sideOpacity }}
            className="absolute inset-0"
          >
            <Phone src={screenEntrenar} alt="Coatrack live training session screen" />
          </motion.div>
          <motion.div
            style={{ x: rightX, rotate: rightRotate, scale: sideScale, opacity: sideOpacity }}
            className="absolute inset-0"
          >
            <Phone src={screenProgreso} alt="Coatrack progress summary screen" />
          </motion.div>
          <motion.div style={{ y: centerY, scale: centerScale }} className="relative">
            <Phone src={screenClientes} alt="Coatrack client list screen" />
          </motion.div>
        </div>

        <motion.ul
          style={{ opacity: captionOpacity }}
          className="mt-10 grid w-full max-w-3xl grid-cols-3 px-6 text-center font-mono text-xs text-neutral-500 md:text-sm"
        >
          <li>live sessions</li>
          <li className="text-neutral-200">clients</li>
          <li>progress</li>
        </motion.ul>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" aria-label="Selected work">
      <div className="mx-auto w-full max-w-5xl px-6 pt-32">
        <SectionLabel index="03">selected work</SectionLabel>

        <Reveal>
          <div className="flex items-center gap-4 md:gap-6">
            <img src={logo} alt="" className="h-14 w-14 md:h-24 md:w-24" />
            <h2 className="text-6xl font-semibold tracking-tight text-neutral-50 md:text-9xl">
              Coatrack
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-xl leading-relaxed text-neutral-300 md:text-2xl">
              A mobile app for personal trainers that replaces spreadsheets and
              notes: clients, body measurements, live training sessions and
              progress, all in one place.
            </p>
          </Reveal>
          <Reveal>
            <dl className="divide-y divide-neutral-800 border-y border-neutral-800">
              {meta.map((item) => (
                <div key={item.label} className="flex justify-between gap-6 py-3 text-sm">
                  <dt className="font-mono text-neutral-500">{item.label}</dt>
                  <dd className="text-right text-neutral-200">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <PhoneStage />

      {/* Bento con foto, marca y detalle */}
      <div className="mx-auto grid w-full max-w-5xl gap-4 px-6 pb-16 md:grid-cols-3 md:grid-rows-2">
        <Reveal className="md:col-span-2 md:row-span-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[600px]">
            <img
              src={trainer}
              alt="Personal trainer coaching a client on an air bike"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-8 text-2xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
              Built for trainers who
              <br />
              outgrew spreadsheets.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex h-[290px] flex-col justify-between rounded-3xl bg-[#15181C] p-8">
            <img src={logo} alt="" className="h-16 w-16" />
            <p className="text-lg text-neutral-300">
              Brand, interface and backend designed from scratch.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative h-[290px] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
            <img
              src={screenDetalle}
              alt="Coatrack client measurements screen"
              className="absolute left-1/2 top-8 w-[75%] -translate-x-1/2 rounded-2xl"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent p-6 pt-16">
              <p className="font-mono text-xs text-[#E8B923]">measurements</p>
              <p className="mt-1 text-neutral-200">Every client's progress at a glance.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
