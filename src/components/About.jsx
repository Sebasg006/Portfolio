import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import SkillCarousel from './SkillCarousel';
import { ExternalLink, Code } from 'lucide-react';

export default function About() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: false, amount: 0.2 });

  const projects = [
    {
      name: "Clock with React",
      description: "A simple clock application built with React.",
      link: "https://github.com/Sebasg006/clock-wirh-react-native",
      repo: "https://github.com/Sebasg006/clock-wirh-react-native",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Currency Converter App",
      description: "Convert currencies in real-time.",
      link: "https://github.com/Sebasg006/currency-conversion",
      repo: "https://github.com/Sebasg006/currency-conversion",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Game",
      description: "A first game.",
      link: "https://github.com/Sebasg006/1-juego-javascript",
      repo: "https://github.com/Sebasg006/1-juego-javascript",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div>
      {/* About Section */}
      <section 
        ref={aboutRef}
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between text-left py-20 relative overflow-hidden bg-black"
      >
        
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 px-6 md:pl-12 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About me
            </span>
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isAboutInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm a <span className="text-green-400 font-semibold">front-end developer</span> and{" "}
            <span className="text-green-400 font-semibold">Software & Data Engineering student</span> who
            loves bringing ideas to life through clean and meaningful design. I approach every project with curiosity
            and responsibility, always exploring new perspectives to find the best solution. My goal is to create experiences that feel
            intuitive, reliable, and built with care — where design and logic work perfectly together.
          </motion.p>
        </motion.div>

        {/* 3D Robot SIN parallax scroll */}
        <motion.div 
          className="w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center px-6"
          initial={{ opacity: 0, x: 100 }}
          animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative w-full max-w-[500px] h-[500px] overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/30 to-teal-600/30 rounded-3xl blur-3xl -z-10" />
            
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/20 to-teal-400/20 p-[2px]">
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                <div className="absolute inset-0 pointer-events-none z-10"></div>
                <Spline scene="https://prod.spline.design/56F1M0NQXVmDsqqk/scene.splinecode" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="bg-black"
      >
        <SkillCarousel />
      </motion.div>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        aria-label="My Projects"
        role="region"
        className="min-h-screen flex flex-col items-center justify-center text-center py-20 bg-black text-white relative overflow-hidden"
      >
        {/* Background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
            Proyectos
          </h2>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full mb-16"
            initial={{ width: 0 }}
            animate={isProjectsInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-8 relative z-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isProjectsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + i * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl border border-neutral-800 bg-neutral-950 shadow-lg transition-all duration-200 hover:border-green-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] overflow-hidden">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient} transition-all duration-200`} />
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-200 group-hover:text-green-400">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{p.description}</p>
                
                <div className="flex justify-center gap-6 text-sm">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-150 group/link"
                  >
                    <Code size={18} />
                    <span>Código</span>
                    <ExternalLink 
                      size={14} 
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-150" 
                    />
                  </a>
                  <span className="text-gray-600">|</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-150 group/link"
                  >
                    <span>Demo</span>
                    <ExternalLink 
                      size={14} 
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-150" 
                    />
                  </a>
                </div>

                {/* Hover glow - MÁS RÁPIDO */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl pointer-events-none" />
              </div>

              {/* External glow - MÁS RÁPIDO */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${p.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-200 -z-10`} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}