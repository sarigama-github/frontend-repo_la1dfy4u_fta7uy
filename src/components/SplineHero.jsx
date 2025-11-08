import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <section className="relative w-full">
      <div className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/30">
        {/* Interactive Spline scene as the main object */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Transparent gradient overlays that do not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      </div>
    </section>
  );
}
