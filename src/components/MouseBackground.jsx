import { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMouseTracker';
import './MouseBackground.css';

const MouseBackground = ({ isOnHero = true }) => {
  const { mousePosition, smoothPosition } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  // Scale the ring up when hovering over clickable elements
  useEffect(() => {
    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setIsHovering(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setIsHovering(false);
    };
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <>
      {/* ── Background layer (orbs, grid, glow) — only on Hero ── */}
      <div className={`mouse-bg-wrapper ${isOnHero ? '' : 'mouse-bg-wrapper--hidden'}`}>
        <div
          className="cursor-glow"
          style={{
            transform: `translate(${smoothPosition.x - 200}px, ${smoothPosition.y - 200}px)`,
          }}
        />
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
        <div className="grid-overlay" />
      </div>

      {/* ── Cursor layer — hidden when on section pages ── */}
      <div className={`cursor-layer ${isOnHero ? '' : 'cursor-layer--hidden'}`}>
        <div
          className={`cursor-ring ${isHovering ? 'cursor-ring--hover' : ''}`}
          style={{
            transform: `translate(${smoothPosition.x}px, ${smoothPosition.y}px)`,
          }}
        />
        <div
          className="cursor-dot"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>
    </>
  );
};

export default MouseBackground;
