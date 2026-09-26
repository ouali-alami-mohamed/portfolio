import { useState, useEffect, useRef } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [smoothPosition, setSmoothPosition] = useState({ x: -100, y: -100 });

  const posRef = useRef({ targetX: -100, targetY: -100, currentX: -100, currentY: -100 });

  useEffect(() => {
    let raf;

    const handleMouseMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      // Dot follows instantly
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      const p = posRef.current;
      p.currentX = lerp(p.currentX, p.targetX, 0.1);
      p.currentY = lerp(p.currentY, p.targetY, 0.1);
      setSmoothPosition({ x: p.currentX, y: p.currentY });
oo   };

    window.addEventListener('mousemove', handleMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { mousePosition, smoothPosition };
};
