import React from "react";
import { Mail, Github, Linkedin } from "lucide-react"; // <-- íconos modernos

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-green-900 text-white px-6"
    >
      <h2 className="text-4xl font-bold mb-6 text-green-400 tracking-tight">
        Contacto
      </h2>

      <p className="text-lg mb-10 max-w-xl text-gray-300">
        Si quieres colaborar, hablar sobre un proyecto o simplemente saludar, puedes escribirme o visitar mis redes 👇
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Email */}
        <a
          href="mailto:sebasgiraldoanaya@gmail.com"
          className="flex items-center gap-3 px-6 py-3 rounded-xl border border-green-500/40 hover:bg-green-600/20 hover:border-green-500 transition"
        >
          <Mail className="w-5 h-5 text-green-400" />
          <span>sebasgiraldoanaya@gmail.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Sebasg006"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl border border-green-500/40 hover:bg-green-600/20 hover:border-green-500 transition"
        >
          <Github className="w-5 h-5 text-green-400" />
          <span>github.com/Sebasg006</span>
        </a>

        {/* LinkedIn (opcional) */}
        <a
          href="https://www.linkedin.com/in/sebastian-giraldo-638775307/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl border border-green-500/40 hover:bg-green-600/20 hover:border-green-500 transition"
        >
          <Linkedin className="w-5 h-5 text-green-400" />
          <span>sebastian giraldo</span>
        </a>
      </div>
    </section>
  );
}
