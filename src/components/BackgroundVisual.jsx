import React, { useEffect, useRef, useState } from 'react';

// Canvas aurora + stars with a cursor-following gradient blob overlay
export default function BackgroundVisual() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const starsRef = useRef([]);
  const hueRef = useRef(260); // purple/blue base
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

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

      const count = Math.min(260, Math.floor((w * h) / 13000));
      starsRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.2,
        s: Math.random() * 0.6 + 0.1,
        a: Math.random() * Math.PI * 2,
      }));
    };

    const drawAurora = (t) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      hueRef.current = (hueRef.current + 0.04) % 360;
      const hue = hueRef.current;

      // Deep dark base
      ctx.fillStyle = 'hsl(235, 60%, 6%)';
      ctx.fillRect(0, 0, w, h);

      // Moving radial gradient
      const grad = ctx.createRadialGradient(
        w * (0.55 + Math.sin(t * 0.00025) * 0.12),
        h * (0.38 + Math.cos(t * 0.0002) * 0.1),
        40,
        w * 0.5,
        h * 0.52,
        Math.max(w, h)
      );
      grad.addColorStop(0, `hsla(${(hue + 20) % 360}, 100%, 70%, 0.5)`);
      grad.addColorStop(0.45, `hsla(${(hue + 330) % 360}, 95%, 60%, 0.32)`);
      grad.addColorStop(1, 'hsla(235, 70%, 8%, 0.92)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Aurora bands
      for (let i = 0; i < 3; i++) {
        const y = h * (0.22 + i * 0.26) + Math.sin(t * 0.0006 + i) * 36;
        const bandH = 80 + Math.cos(t * 0.0005 + i) * 32;
        const bandGrad = ctx.createLinearGradient(0, y - bandH, 0, y + bandH);
        bandGrad.addColorStop(0, `hsla(${(hue + i * 28) % 360}, 95%, 72%, 0)`);
        bandGrad.addColorStop(0.5, `hsla(${(hue + i * 28) % 360}, 95%, 72%, 0.18)`);
        bandGrad.addColorStop(1, `hsla(${(hue + i * 28) % 360}, 95%, 72%, 0)`);
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
        ctx.fillStyle = `hsla(${(hueRef.current + 210) % 360}, 90%, ${70 - star.r * 10}%, ${0.65 * tw})`;
        ctx.fill();
      });
      ctx.restore();
    };

    const loop = (t) => {
      drawAurora(t);
      drawStars(t);
      rafRef.current = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMouse({ x, y });
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Grain + vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(5,10,25,0.75))]" />
      {/* Cursor-following gradient blob (doesn't block interactions) */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-60 transition-transform duration-200"
        style={{
          left: mouse.x,
          top: mouse.y,
          background:
            'radial-gradient(35% 35% at 50% 50%, rgba(167, 139, 250, 0.55), rgba(79, 70, 229, 0.35) 45%, rgba(56, 189, 248, 0.25) 70%, transparent 80%)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
