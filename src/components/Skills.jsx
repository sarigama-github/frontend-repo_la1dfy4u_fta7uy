import React from 'react';
import { Code2, Layers, Smartphone, Figma, Wrench } from 'lucide-react';

// Simple brand SVGs inline for crisp real logos
const Brand = {
  React: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <g fill="none" stroke="#61DAFB" strokeWidth="16">
        <ellipse cx="128" cy="128" rx="92" ry="35" />
        <ellipse cx="128" cy="128" rx="92" ry="35" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="92" ry="35" transform="rotate(120 128 128)" />
      </g>
      <circle cx="128" cy="128" r="14" fill="#61DAFB" />
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 128 128" className="w-4 h-4" aria-hidden>
      <path fill="#E34F26" d="M19 114L10 3h108l-9 111-45 12" />
      <path fill="#EF652A" d="M64 117l36-10 8-90H64" />
      <path fill="#fff" d="M64 66H46l-1-12h19V42H32l4 45h28z" />
      <path fill="#fff" d="M64 88l-.1.1-15-4-1-11H36l2 22 26 7 .1-.1z" />
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 128 128" className="w-4 h-4" aria-hidden>
      <path fill="#1572B6" d="M19 114L10 3h108l-9 111-45 12" />
      <path fill="#33A9DC" d="M64 117l36-10 8-90H64" />
      <path fill="#fff" d="M64 66H46l-1-12h19V42H32l4 45h28z" />
      <path fill="#fff" d="M64 88l-.1.1-15-4-1-11H36l2 22 26 7 .1-.1z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 128 128" className="w-4 h-4" aria-hidden>
      <linearGradient id="pyA" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pyB" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFE052" />
        <stop offset="1" stopColor="#FFC331" />
      </linearGradient>
      <path fill="url(#pyA)" d="M63.6 12c-24 0-22.5 10.4-22.5 10.4l.1 10.8h22.9v3.2H28.6S12 35.8 12 60s15.9 24.1 15.9 24.1h9V72.9s-.5-15.9 15.6-15.9H82c0 0 15.1.2 15.1-14.6V26.8C97.1 12 87.6 12 63.6 12z" />
      <path fill="url(#pyB)" d="M64.4 116c24 0 22.5-10.4 22.5-10.4l-.1-10.8H63.9v-3.2h35.4S116 92.2 116 68s-15.9-24.1-15.9-24.1h-9v11.2s.5 15.9-15.6 15.9H46c0 0-15.1-.2-15.1 14.6v15.6C30.9 116 40.4 116 64.4 116z" />
      <circle cx="46.5" cy="22.5" r="6" fill="#fff" />
      <circle cx="81.5" cy="105.5" r="6" fill="#fff" />
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 128 128" className="w-4 h-4" aria-hidden>
      <path fill="#EA2D2E" d="M64 14s-8 10 8 18c0 0-20 2-20-10S64 14 64 14z" />
      <path fill="#5382A1" d="M46 80s-4 2-2 4 8 2 14 0 28-6 36-2 2-8-8-8-40 6-40 6z" />
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <path fill="#44D1FD" d="M156 20L36 140l40 40L236 20z" />
      <path fill="#1FBCFD" d="M76 180l40 40 60-60-40-40z" />
      <path fill="#08589C" d="M116 220l40-20-20-20z" />
    </svg>
  ),
  C: () => (
    <svg viewBox="0 0 128 128" className="w-4 h-4" aria-hidden>
      <circle cx="64" cy="64" r="56" fill="#5C6BC0" />
      <text x="64" y="78" fontSize="56" textAnchor="middle" fill="#fff" fontFamily="monospace">C</text>
    </svg>
  ),
  RN: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <g fill="none" stroke="#61DAFB" strokeWidth="16">
        <ellipse cx="128" cy="128" rx="92" ry="35" />
        <ellipse cx="128" cy="128" rx="92" ry="35" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="92" ry="35" transform="rotate(120 128 128)" />
      </g>
      <circle cx="128" cy="128" r="14" fill="#61DAFB" />
    </svg>
  ),
  VSCode: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <path fill="#007ACC" d="M193 32l-58 34v124l58 34 19-17V49z" />
      <path fill="#1F9CF0" d="M135 66L93 106l42 42z" />
      <path fill="#0065A9" d="M93 106l-33 33 33 11 42-42z" />
    </svg>
  ),
  Canva: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <circle cx="128" cy="128" r="120" fill="#00C4CC" />
      <text x="128" y="152" fontSize="88" textAnchor="middle" fill="#fff" fontFamily="serif">C</text>
    </svg>
  ),
  Wix: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <text x="10" y="160" fontSize="140" fill="#fff" fontFamily="sans-serif">Wix</text>
    </svg>
  ),
  Visily: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4" aria-hidden>
      <circle cx="128" cy="128" r="90" fill="#9155FD" />
      <text x="128" y="156" fontSize="84" textAnchor="middle" fill="#fff" fontFamily="sans-serif">V</text>
    </svg>
  ),
};

const skills = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: 'C', logo: <Brand.C /> },
      { name: 'Python', logo: <Brand.Python /> },
      { name: 'Java', logo: <Brand.Java /> }
    ]
  },
  {
    title: 'Web Development',
    icon: <Layers className="w-5 h-5" />,
    items: [
      { name: 'HTML', logo: <Brand.HTML /> },
      { name: 'CSS', logo: <Brand.CSS /> },
      { name: 'ReactJS', logo: <Brand.React /> }
    ]
  },
  {
    title: 'Android & Cross‑platform',
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      { name: 'React Native', logo: <Brand.RN /> },
      { name: 'Flutter', logo: <Brand.Flutter /> }
    ]
  },
  {
    title: 'Design & Tools',
    icon: <Figma className="w-5 h-5" />,
    items: [
      { name: 'Figma', logo: <Figma className="w-4 h-4" /> },
      { name: 'Canva', logo: <Brand.Canva /> },
      { name: 'Wix', logo: <Brand.Wix /> },
      { name: 'Visily', logo: <Brand.Visily /> },
      { name: 'VS Code', logo: <Brand.VSCode /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <div className="flex items-center gap-2 text-white/80">
                {group.icon}
                <h3 className="font-medium">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s.name} className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm text-white/70">
                    {s.logo}
                    {s.name}
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
