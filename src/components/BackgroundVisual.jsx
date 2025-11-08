import React, { useEffect, useRef } from 'react';

// Subtle, clean background wash (no stars, no grid, no dark boxes)
export default function BackgroundVisual() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const hueRef = useRef(260);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      hueRef.current = (hueRef.current + 0.04) % 360;
      const hue = hueRef.current;

      ctx.clearRect(0, 0, w, h);

      // Very soft radial gradient for depth, no harsh dark overlay
      const grad = ctx.createRadialGradient(
        w * 0.55,
        h * 0.4,
        40,
        w * 0.5,
        h * 0.6,
        Math.max(w, h)
      );
      grad.addColorStop(0, `hsla(${(hue + 20) % 360}, 90%, 72%, 0.18)`);
      grad.addColorStop(0.5, `hsla(${(hue + 330) % 360}, 95%, 68%, 0.12)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
