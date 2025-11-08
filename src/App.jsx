import React from 'react';
import BackgroundVisual from './components/BackgroundVisual';
import Profile from './components/Profile';
import PortfolioProjects from './components/PortfolioProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-slate-100 bg-transparent selection:bg-emerald-300 selection:text-slate-900">
      <BackgroundVisual />

      <header className="sticky top-0 z-10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Naman Sinha</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Profile />
        <PortfolioProjects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Naman Sinha. Crafted with curiosity and care.
      </footer>
    </div>
  );
}

export default App;
