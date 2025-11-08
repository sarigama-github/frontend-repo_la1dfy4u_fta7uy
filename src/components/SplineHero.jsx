import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <div className="relative w-full h-[360px] md:h-[520px] rounded-3xl overflow-hidden ring-1 ring-slate-200 bg-transparent">
      <Spline
        scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* No overlays or negative z-index; the scene remains interactive and visible */}
    </div>
  );
}
