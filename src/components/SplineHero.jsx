import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <div className="relative w-full h-[360px] md:h-[520px] rounded-3xl overflow-hidden ring-1 ring-white/10">
      <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-60" style={{ backgroundImage: "radial-gradient(60% 60% at 50% 40%, rgba(168, 85, 247, .12), rgba(59, 130, 246, .12), transparent)" }} />
    </div>
  );
}
