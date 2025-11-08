import React from 'react';

// Lightweight CSS 3D laptop with subtle animation
export default function Laptop3D() {
  return (
    <div className="relative mx-auto w-full max-w-3xl" aria-hidden="true">
      <div className="[perspective:1200px] w-full h-[260px] md:h-[320px]">
        <div className="relative w-full h-full [transform-style:preserve-3d] animate-[tilt_12s_ease-in-out_infinite]">
          {/* Screen */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[78%] h-[65%] rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-white/10 [transform:rotateX(12deg)_rotateY(-10deg)_translateZ(30px)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_10%,rgba(16,185,129,0.35),transparent_50%),radial-gradient(90%_90%_at_80%_90%,rgba(56,189,248,0.35),transparent_50%)]" />
            {/* Fake UI lines */}
            <div className="absolute inset-4 rounded-lg border border-white/10" />
            <div className="absolute left-4 right-4 top-6 h-2 rounded bg-white/10" />
            <div className="absolute left-4 right-24 top-12 h-2 rounded bg-white/10" />
            <div className="absolute left-4 right-4 top-20 h-28 rounded-md bg-white/5" />
          </div>
          {/* Hinge shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[62%] w-[72%] h-2 rounded-full bg-black/40 blur-md" />
          {/* Base */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-24 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 [transform:rotateX(70deg)]">
            <div className="absolute inset-x-6 top-2 h-1.5 rounded bg-white/10" />
            {/* Keyboard grid */}
            <div className="absolute inset-x-6 top-5 grid grid-cols-12 gap-1">
              {Array.from({ length: 60 }).map((_, i) => (
                <span key={i} className="h-2.5 rounded bg-white/10" />
              ))}
            </div>
            {/* Trackpad */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-40 h-10 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes tilt {
          0%, 100% { transform: rotateX(7deg) rotateY(-8deg); }
          50% { transform: rotateX(10deg) rotateY(-12deg); }
        }
      `}</style>
    </div>
  );
}
