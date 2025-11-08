import React from 'react';

const items = [
  {
    title: 'Nova UI Kit',
    desc: 'A headless component kit built with accessibility and performance in mind.',
    tags: ['React', 'Radix', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Pulse Analytics',
    desc: 'Lightweight product analytics with privacy-first events and dashboards.',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
    link: '#'
  },
  {
    title: 'Voyager Blog',
    desc: 'A markdown-powered blog engine with MDX, themes, and animations.',
    tags: ['MDX', 'Vite', 'Framer Motion'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">Selected Projects</h2>
          <a href="#contact" className="text-sm text-white/60 hover:text-white">Get in touch</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <a key={idx} href={p.link} className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition-colors overflow-hidden">
              <div className="absolute inset-px rounded-[15px] pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-32 rounded-xl mb-4 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
              <h3 className="text-lg font-medium text-white/90">{p.title}</h3>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 ring-1 ring-white/10 text-white/60">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
