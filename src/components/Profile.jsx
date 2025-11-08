import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import SplineHero from './SplineHero';

export default function Profile() {
  return (
    <section className="relative pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships & freelance
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white/90 leading-tight">
            Naman Sinha
          </h1>
          <p className="mt-2 text-white/70">UI/UX Designer & Frontend Developer</p>
          <p className="mt-4 text-white/70">
            I’m an aspiring Frontend and Android App Developer passionate about turning creative ideas into sleek, interactive digital experiences. Curious by nature, I constantly explore new tools and technologies to push the boundaries of creativity and code. I enjoy designing intuitive interfaces and developing impactful products that solve real-world problems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[.99]">See Projects</a>
            <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://docs.google.com/document/d/1UWMmVFmXwFmiKYzFmX3KRYib5H7h4h2v/export?format=pdf" target="_blank" rel="noreferrer" download className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400">
              <FileDown className="w-4 h-4" /> Download Resume
            </a>
          </div>
          <div className="mt-3 text-sm text-white/60">
            Email: get2naman@gmail.com · Phone: +91 8925474810
          </div>
        </div>
        <div className="relative">
          <SplineHero />
        </div>
      </div>
    </section>
  );
}
