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
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">Projects</h2>
          <a href="#contact" className="text-sm text-white/60 hover:text-white">Hire me</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition-colors overflow-hidden">
              <div className="absolute inset-px rounded-[15px] pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Sharper preview card without unwanted blur */}
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/25 to-cyan-300/25 ring-1 ring-white/10" />
              <h3 className="text-lg font-medium text-white/90">{p.title}</h3>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 ring-1 ring-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
