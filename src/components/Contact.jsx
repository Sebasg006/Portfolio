import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "sebasgiraldoanaya@gmail.com",
      href: "mailto:sebasgiraldoanaya@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "github.com/Sebasg006",
      href: "https://github.com/Sebasg006",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "sebastian giraldo",
      href: "https://www.linkedin.com/in/sebastian-giraldo-638775307/",
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-green-950 text-white px-6 py-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Si quieres colaborar, hablar sobre un proyecto o simplemente saludar,
          puedes escribirme o visitar mis redes 👇
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + i * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-green-500/40 hover:border-green-500 transition-all duration-500 overflow-hidden">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${contact.gradient}`} />
                
                {/* Icon */}
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-2xl"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-green-400 group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                  </motion.div>
                  
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {contact.label}
                  </span>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </div>

              {/* External glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
            </motion.a>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-gray-500 text-sm"
        >
          <p>Made with by Sebastian Giraldo</p>
        </motion.div>
      </div>
    </section>
  );
}