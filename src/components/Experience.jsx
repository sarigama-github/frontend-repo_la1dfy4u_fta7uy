import React from 'react';

const roles = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Aurora Labs',
    time: '2022 — Present',
    points: [
      'Led a design‑system revamp improving UI consistency and delivery speed.',
      'Cut bundle size by 38% with route‑level code splitting and compiler hints.',
      'Shipped motion guidelines and micro‑interactions across product.'
    ]
  },
  {
    role: 'Full‑stack Engineer',
    company: 'Orbit Studio',
    time: '2020 — 2022',
    points: [
      'Built internal tooling that reduced QA cycles by 25%.',
      'Designed and implemented analytics pipelines and dashboards.',
      'Mentored interns and facilitated weekly knowledge shares.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">Experience</h2>
        <div className="space-y-6">
          {roles.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-white/90 font-medium">{r.role} • {r.company}</h3>
                </div>
                <div className="text-white/50 text-sm">{r.time}</div>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-1 text-white/70 text-sm">
                {r.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
