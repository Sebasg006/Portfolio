import React from 'react';

const skills = {
  frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
  tools: ['Git', 'VS Code', 'Figma', 'npm'],
  soft: ['Problem Solving', 'Team Work', 'Communication', 'Adaptability']
};

export default function Skills() {
  return (
    <section className="min-h-screen py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-xl border border-neutral-800 hover:border-green-500 transition-all">
              <h3 className="text-xl font-semibold mb-4 capitalize text-green-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm rounded-full border border-green-500/30 text-green-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}