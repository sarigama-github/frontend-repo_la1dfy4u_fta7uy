import React from 'react';

const work = [
  {
    role: 'UI/UX Designer & Frontend Developer',
    org: 'Youth India Foundation',
    time: 'May 2025 – July 2025',
    points: [
      'Helped design, refine, and develop the organization website.',
      'Collaborated on UI/UX improvements and front‑end implementation.'
    ]
  }
];

const hackathons = [
  {
    title: 'SIH 2025 (Smart India Hackathon)',
    detail: 'Cleared internal round; ranked Top 30 among 220 teams. Frontend Lead on a mental health counselling platform. Idea submitted to the National Portal.'
  },
  {
    title: 'Riidl Incuverse 2025',
    detail: 'Built a personal finance app that tracks savings and provides intelligent recommendations.'
  },
  {
    title: 'Google Gen AI Hackathon',
    detail: 'Enhanced the mental health counselling platform with personalized AI features.'
  },
  {
    title: 'VW Mobilothon 5.0 (Results Awaited)',
    detail: 'Proposed a real‑time parking app that finds and books nearby parking spots. Team Lead.'
  },
  {
    title: 'Mumbai Hacks 2025 (Upcoming Grand Finale)',
    detail: 'Leading a team to build an agentic AI system against misinformation with credible sources.'
  }
];

export default function WorkHack() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">Work Experience</h2>
            <div className="space-y-4">
              {work.map((w, i) => (
                <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white/90 font-medium">{w.role} • {w.org}</h3>
                    <span className="text-xs text-white/50">{w.time}</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-white/70 text-sm space-y-1">
                    {w.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">Hackathons</h2>
            <div className="space-y-4">
              {hackathons.map((h, i) => (
                <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-white/90 font-medium">{h.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{h.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
