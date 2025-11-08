import React, { useEffect, useRef } from 'react';

// Animated aurora + stars background (no Spline)
export default function BackgroundVisual() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const starsRef = useRef([]);
  const hueRef = useRef(200);

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

      const count = Math.min(220, Math.floor((w * h) / 15000));
      starsRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.2,
        s: Math.random() * 0.5 + 0.1,
        a: Math.random() * Math.PI * 2,
      }));
    };

    const drawAurora = (t) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      hueRef.current = (hueRef.current + 0.05) % 360;
      const hue = hueRef.current;

      const grad = ctx.createRadialGradient(
        w * (0.6 + Math.sin(t * 0.0003) * 0.1),
        h * (0.35 + Math.cos(t * 0.00025) * 0.08),
        50,
        w * 0.5,
        h * 0.5,
        Math.max(w, h)
      );
      grad.addColorStop(0, `hsla(${(hue + 20) % 360}, 90%, 65%, 0.55)`);
      grad.addColorStop(0.5, `hsla(${(hue + 340) % 360}, 80%, 55%, 0.35)`);
      grad.addColorStop(1, 'hsla(230, 70%, 8%, 0.9)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 3; i++) {
        const y = h * (0.2 + i * 0.25) + Math.sin(t * 0.0006 + i) * 40;
        const bandH = 90 + Math.cos(t * 0.0005 + i) * 40;
        const bandGrad = ctx.createLinearGradient(0, y - bandH, 0, y + bandH);
        bandGrad.addColorStop(0, `hsla(${(hue + i * 30) % 360}, 90%, 70%, 0)`);
        bandGrad.addColorStop(0.5, `hsla(${(hue + i * 30) % 360}, 90%, 70%, 0.18)`);
        bandGrad.addColorStop(1, `hsla(${(hue + i * 30) % 360}, 90%, 70%, 0)`);
        ctx.fillStyle = bandGrad;
        ctx.fillRect(0, y - bandH, w, bandH * 2);
      }
    };

    const drawStars = (t) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      starsRef.current.forEach((star, i) => {
        star.a += star.s * 0.02;
        star.x += Math.sin(star.a + i) * 0.05;
        star.y += Math.cos(star.a + i) * 0.03;
        if (star.x < 0) star.x = w; if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h; if (star.y > h) star.y = 0;
        const tw = 0.6 + Math.sin(t * 0.004 + star.a * 2) * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * tw, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(hueRef.current + 200) % 360}, 90%, ${70 - star.r * 10}%, ${0.6 * tw})`;
        ctx.fill();
      });
      ctx.restore();
    };

    const loop = (t) => {
      drawAurora(t);
      drawStars(t);
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(5,10,25,0.75))]" />
    </div>
  );
}
