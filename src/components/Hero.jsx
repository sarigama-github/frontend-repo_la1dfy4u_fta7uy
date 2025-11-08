import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center">
      <div className="max-w-3xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white/90 leading-tight">
          Crafting delightful web experiences with code, motion, and care
        </h1>
        <p className="mt-5 text-white/70 text-base md:text-lg">
          I’m a frontend-focused full‑stack developer who loves building fast, accessible, and visually expressive products.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] transition-shadow">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <div className="flex items-center gap-2">
            <a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 transition-colors" href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 transition-colors" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
