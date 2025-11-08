import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <div className="relative w-full h-[360px] md:h-[520px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-transparent">
      <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      {/* Removed dark overlays so there is no black box and the 3D scene stays bright */}
    </div>
  );
}
