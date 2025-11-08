import React from 'react';
import BackgroundGradient from './components/BackgroundGradient';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      {/* Moving, cursor-following gradient behind content */}
      <BackgroundGradient />

      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold tracking-tight text-slate-900">Naman Sinha — Portfolio</div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 px-4">
        <div className="h-6" />
        <Profile />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <div className="h-10" />
      </main>

      {/* Footer */}
      <footer className="z-10 border-t border-slate-200 bg-white/70 py-6 text-center text-sm text-slate-600 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        © {new Date().getFullYear()} Naman Sinha. All rights reserved.
      </footer>
    </div>
  );
}
