import React from 'react';
import BackgroundVisual from './components/BackgroundVisual';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-white bg-slate-950 selection:bg-emerald-300 selection:text-slate-900">
      <BackgroundVisual />

      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Your Name</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
