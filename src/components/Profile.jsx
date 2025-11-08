import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import Laptop3D from './Laptop3D';

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
            I love turning ideas into intuitive, elegant interfaces and smooth interactions. Currently exploring
            frontend and Android with a focus on performance and delightful details.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow hover:shadow-lg transition-shadow">See Projects</a>
            <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://docs.google.com/document/d/1UWMmVFmXwFmiKYzFmX3KRYib5H7h4h2v/export?format=pdf" target="_blank" rel="noreferrer" download className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 font-medium">
              <FileDown className="w-4 h-4" /> Download Resume
            </a>
          </div>
          <div className="mt-3 text-sm text-white/60">
            Email: get2naman@gmail.com · Phone: +91 8925474810
          </div>
        </div>
        <div className="relative">
          <Laptop3D />
        </div>
      </div>
    </section>
  );
}
