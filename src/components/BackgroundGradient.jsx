import React, { useEffect, useRef } from 'react';

// A responsive, cursor-following gradient backdrop with subtle motion.
// - Fixed full-screen, sits behind everything
// - pointer-events-none so it never blocks the Spline interactions
// - Uses CSS variables for smooth GPU-accelerated updates
export default function BackgroundGradient() {
  const ref = useRef(null);
  const pos = useRef({ x: 50, y: 50 });
  const target = useRef({ x: 50, y: 50 });
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;
      target.current = { x, y };
    };

    const animate = () => {
      // simple easing for smooth trailing motion
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      el.style.setProperty('--gx', `${pos.current.x}%`);
      el.style.setProperty('--gy', `${pos.current.y}%`);
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Two-layer gradient: a vivid moving radial and a soft vignette.
  // A faint grain layer adds texture without distracting from content.
  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(60vmax 60vmax at var(--gx, 50%) var(--gy, 50%),
            rgba(120, 119, 198, 0.55),
            rgba(56, 189, 248, 0.35) 35%,
            rgba(12, 74, 110, 0.15) 60%,
            rgba(2, 6, 23, 0.0) 75%
          ),
          radial-gradient(120vmax 120vmax at 50% 100%, rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.0) 60%),
          repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)
        `,
        backgroundBlendMode: 'screen, normal, overlay',
        filter: 'saturate(1.2) contrast(1.05)',
      }}
    />
  );
}
