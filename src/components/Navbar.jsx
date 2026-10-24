import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

// Mapa de desplazamiento: gris neutro en el centro y degradados rojo (eje x)
// y verde (eje y) en los bordes, para que el vidrio doble el fondo como una lente
const displacementMap = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="768" height="56" viewBox="0 0 768 56">
  <defs>
    <linearGradient id="r" x1="0" x2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#f00"/></linearGradient>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#0f0"/></linearGradient>
    <filter id="b"><feGaussianBlur stdDeviation="7"/></filter>
  </defs>
  <rect width="768" height="56" fill="#000"/>
  <rect width="768" height="56" fill="url(#r)"/>
  <rect width="768" height="56" fill="url(#g)" style="mix-blend-mode:screen"/>
  <rect x="14" y="10" width="740" height="36" rx="18" fill="#808080" filter="url(#b)"/>
</svg>`)}`;

// Solo Chromium aplica filtros SVG dentro de backdrop-filter
const supportsRefraction =
  typeof navigator !== "undefined" && "userAgentData" in navigator;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();
  const glassRef = useRef(null);

  // Se esconde al bajar y vuelve a aparecer al subir
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 200 && !mobileOpen);
  });

  // Resalta la sección que se está viendo
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  // Mueve el brillo a donde está el cursor sin re-renderizar
  const handleGlare = (e) => {
    const el = glassRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--glare-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--glare-y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <filter
          id="liquid-glass"
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            href={displacementMap}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            result="map"
          />
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feDisplacementMap
            in="blur"
            in2="map"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <motion.nav
        animate={{ y: hidden ? "-150%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4"
      >
        <div
          ref={glassRef}
          onMouseMove={handleGlare}
          className={`liquid-glass ${supportsRefraction ? "refract" : ""} pointer-events-auto mx-auto flex h-14 w-full max-w-3xl items-center justify-between rounded-full pl-6 pr-2 font-mono text-sm`}
        >
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="text-neutral-100"
          >
            <span className="text-neutral-500">~/</span>sebastian
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative transition-colors hover:text-neutral-100 ${
                    active === item.href ? "text-neutral-100" : "text-neutral-400"
                  }`}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-400"
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:sebasgiraldoanaya@gmail.com"
            className="hidden rounded-full bg-neutral-100 px-4 py-2 font-sans font-medium text-neutral-950 transition-colors hover:bg-emerald-400 md:inline-block"
          >
            Let's talk
          </a>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="mr-3 text-neutral-100 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Menú móvil a pantalla completa */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-neutral-950 px-6 md:hidden"
          >
            <ul className="space-y-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="flex items-baseline gap-4 text-5xl font-semibold tracking-tight text-neutral-50"
                  >
                    <span className="font-mono text-sm text-emerald-400">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="mailto:sebasgiraldoanaya@gmail.com"
              className="mt-12 font-mono text-sm text-neutral-400"
            >
              sebasgiraldoanaya@gmail.com
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
