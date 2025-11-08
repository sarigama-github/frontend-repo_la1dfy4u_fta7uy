import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SplineHero from './SplineHero';

export default function Profile() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
      <div className="flex flex-col items-start gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          Available for freelance & internships
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">Naman Sinha</h1>
        <p className="max-w-2xl text-slate-600">UI/UX Designer & Frontend Developer — crafting sleek, interactive digital experiences. Exploring new tools to blend creativity and code.</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>

      <SplineHero />
    </section>
  );
}
