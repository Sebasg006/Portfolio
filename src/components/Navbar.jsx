import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  // Se esconde al bajar y vuelve a aparecer al subir
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 200 && !mobileOpen);
    setScrolled(y > 20);
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

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || mobileOpen
            ? "border-neutral-800/70 bg-neutral-950/75 backdrop-blur-lg"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 font-mono text-sm">
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
                    active === item.href ? "text-neutral-100" : "text-neutral-500"
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
            className="hidden rounded-full bg-neutral-100 px-4 py-1.5 font-sans font-medium text-neutral-950 transition-colors hover:bg-emerald-400 md:inline-block"
          >
            Let's talk
          </a>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-neutral-100 md:hidden"
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
