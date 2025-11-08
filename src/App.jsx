import React from 'react';
import BackgroundVisual from './components/BackgroundVisual';
import Profile from './components/Profile';
import PortfolioProjects from './components/PortfolioProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-300 selection:text-slate-900">
      {/* Subtle background wash only; no dark star box */}
      <BackgroundVisual />

      {/* Solid header for maximum readability */}
      <header className="sticky top-0 z-10 bg-white/95 border-b border-slate-200 backdrop-saturate-150">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-slate-900">Naman Sinha</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section aria-label="Profile">
          <Profile />
        </section>
        <section id="projects" aria-label="Projects">
          <PortfolioProjects />
        </section>
        <section id="skills" aria-label="Skills">
          <Skills />
        </section>
        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Naman Sinha. Crafted with curiosity and care.
      </footer>
    </div>
  );
}

export default App;
