import React from 'react'
import Spline from '@splinetool/react-spline'

export default function About() {
const projects = [
  {
    name: "Clock with React",
    description: "A simple clock application built with React.",
    link: "https://github.com/Sebasg006/clock-wirh-react-native",
    repo: "https://github.com/Sebasg006/clock-wirh-react-native"
  },
  {
    name: "Currency Converter App",
    description: "Convert currencies in real-time.",
    link: "https://github.com/Sebasg006/currency-conversion",
    repo: "https://github.com/Sebasg006/currency-conversion"
  },
  {
    name: "Game",
    description: "A first game.",
    link: "https://github.com/Sebasg006/1-juego-javascript",
    repo: "https://github.com/Sebasg006/1-juego-javascript"
  }
];


  return (
    <div>
      {/* About */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between text-left">
  {/* Texto */}
  <div className="w-full md:w-1/2 px-6 md:pl-12 mb-8 md:mb-0">
    <h2 className="text-3xl font-bold mb-4 max-w-2xl">
      About me
    </h2>
    <p className="mb-2 max-w-2xl">
      I’m a front-end developer and Software & Data Engineering student who
       loves bringing ideas to life through clean and meaningful design. I approach every project with curiosity
        and responsibility, always exploring new perspectives to find the best solution. My goal is to create experiences that feel
         intuitive, reliable, and built with care — where design and logic work perfectly together.
    </p>
  </div>

  {/* Modelo 3D */}
  <div className="w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center">
    <div className="w-[500px] h-[500px] overflow-hidden rounded-2xl relative">
      {/* Contenedor que bloquea la interacción */}
      <div className="absolute inset-0 pointer-events-none z-10"></div>
      <Spline scene="https://prod.spline.design/56F1M0NQXVmDsqqk/scene.splinecode" />
    </div>
  </div>
</section>

      {/* Projects */}
      <section
  id="projects"
  aria-label="My Projects"
  role="region"
  className="min-h-screen flex flex-col items-center justify-center text-center py-20 bg-black text-white"
>
  <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
    Proyectos
  </h2>
    
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-8">
    {projects.map((p, i) => (
      <a
        key={i}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-8 rounded-2xl border border-neutral-800 bg-neutral-950 shadow-lg transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-2 cursor-pointer animate-fadeIn"
      >
        <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
          {p.name}
        </h3>
        <p className="text-sm text-gray-400 mb-4">{p.description}</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Código
          </a>
          <span className="text-gray-600">|</span>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Demo
          </a>
        </div>
      </a>
    ))}
  </div>
</section>


    </div>
  )
}
