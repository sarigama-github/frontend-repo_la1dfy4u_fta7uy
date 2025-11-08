import React from 'react';

const projects = [
  {
    title: 'MindMate',
    desc: 'Mental health assistant and counselling platform with resource hub, AI chatbot, and community groups.',
    link: 'https://hpsc.tiiny.site',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript']
  },
  {
    title: 'AI Credit Score Manager',
    desc: 'AI-assisted score using utility bills like electricity/phone payments to estimate creditworthiness.',
    link: 'https://creditscore-main.onrender.com',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript']
  },
  {
    title: 'Bus/Train Ticket Booking System',
    desc: 'Seat management and ticket booking with mock payments and downloadable tickets.',
    link: 'https://booksmmart.netlify.app',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript']
  },
  {
    title: 'TruthLensAI',
    desc: 'Fake news detection with credibility scores and verified sources.',
    link: 'https://truth-guard-ai-08a116dd.base44.app',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript']
  },
  {
    title: 'Cricscard',
    desc: 'Live cricket and football scores with league standings and tables.',
    link: 'https://cricscard.netlify.app',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript']
  },
  {
    title: 'Juswipe (Upcoming)',
    desc: 'Personalized news swiping app that learns your preferences across languages and countries.',
    link: '#',
    stack: ['React Native', 'Flutter']
  }
];

export default function PortfolioProjects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Projects</h2>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Hire me</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200" />
              <h3 className="text-lg font-medium text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
