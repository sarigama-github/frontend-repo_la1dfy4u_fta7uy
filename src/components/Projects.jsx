import React from 'react';

const projects = [
  {
    title: 'MindMate',
    tech: 'HTML, CSS, ReactJS, JS',
    link: 'https://hpsc.tiiny.site',
  },
  {
    title: 'AI Credit Score Manager',
    tech: 'HTML, CSS, ReactJS, JS',
    link: 'https://creditscore-main.onrender.com',
  },
  {
    title: 'Bus/Train Ticket Booking',
    tech: 'HTML, CSS, ReactJS, JS',
    link: 'https://booksmmart.netlify.app',
  },
  {
    title: 'TruthLensAI',
    tech: 'HTML, CSS, ReactJS, JS',
    link: 'https://truth-guard-ai-08a116dd.base44.app',
  },
  {
    title: 'Cricscard',
    tech: 'HTML, CSS, ReactJS, JS',
    link: 'https://cricscard.netlify.app',
  },
];

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-6xl py-10">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">Featured Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-sm"
          >
            <div className="mb-1 text-base font-medium text-slate-900">{p.title}</div>
            <div className="text-sm text-slate-600">{p.tech}</div>
            <div className="mt-3 text-sm text-blue-600">Visit →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
