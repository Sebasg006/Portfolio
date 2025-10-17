import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import SkillsCarousel from "./components/SkillCarousel";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // la intro dura 2 segundos
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Contact />
    </div>
  );
}
