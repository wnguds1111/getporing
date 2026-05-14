"use client";

import { useEffect, useState, useRef } from "react";

const EVOLUTION_STAGES = [
  { threshold: 0,    img: "/assets/egg_basic.png",          width: 80,  aura: "rgba(255, 235, 59, 0.4)" },
  { threshold: 0.25, img: "/assets/char_baby_idle.gif",     width: 100, aura: "rgba(139, 195, 74, 0.4)" },
  { threshold: 0.5,  img: "/assets/char_tangerine_idle.gif", width: 120, aura: "rgba(255, 152, 0, 0.4)" },
  { threshold: 0.8,  img: "/assets/char_bapho_idle.gif",    width: 140, aura: "rgba(244, 67, 54, 0.4)" },
];

export default function ScrollEvolution() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [isEvolving, setIsEvolving] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const prevStageRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollPercent(percent);

      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Hide after 1.5s of no scrolling

      let newIndex = 0;
      for (let i = EVOLUTION_STAGES.length - 1; i >= 0; i--) {
        if (percent >= EVOLUTION_STAGES[i].threshold) {
          newIndex = i;
          break;
        }
      }
      
      if (newIndex !== prevStageRef.current) {
        setIsEvolving(true);
        setTimeout(() => setIsEvolving(false), 800);
        prevStageRef.current = newIndex;
      }
      setStageIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes walk-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes aura-pulse-bottom {
          0%, 100% { box-shadow: 0 0 20px 10px var(--current-aura); }
          50% { box-shadow: 0 0 40px 20px var(--current-aura); }
        }
        @keyframes evolve-flash {
          0% { filter: brightness(1) drop-shadow(0 0 0px #fff); transform: scale(1); }
          50% { filter: brightness(2) drop-shadow(0 0 40px #fff); transform: scale(1.3); }
          100% { filter: brightness(1) drop-shadow(0 0 0px #fff); transform: scale(1); }
        }
        .evolution-bottom-wrapper {
          position: fixed;
          bottom: 20px;
          z-index: 998;
          pointer-events: none;
          /* Move from 5% to 85% across the screen */
          left: calc(5% + (80% * var(--scroll-percent)));
          opacity: var(--scroll-opacity);
          transition: left 0.2s ease-out, opacity 0.5s ease;
        }
        .evolution-bottom-char-box {
          position: relative;
          display: flex;
          align-items: flex-end; /* Align bottom so they "walk" on the floor */
          justify-content: center;
          border-radius: 50%;
          animation: walk-bounce 0.6s ease-in-out infinite, aura-pulse-bottom 3s infinite;
        }
        .evolution-bottom-char-box.evolving img {
          animation: evolve-flash 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @media (max-width: 768px) {
          .evolution-bottom-wrapper {
            display: none; /* Hide on small mobile to avoid blocking content completely */
          }
        }
      `}</style>
      
      <div 
        className="evolution-bottom-wrapper desktop-only"
        style={{ 
          '--scroll-percent': scrollPercent,
          '--scroll-opacity': isScrolling ? 1 : 0 
        } as React.CSSProperties}
      >
        <div 
          className={`evolution-bottom-char-box ${isEvolving ? 'evolving' : ''}`}
          style={{ '--current-aura': EVOLUTION_STAGES[stageIndex].aura } as React.CSSProperties}
        >
          {EVOLUTION_STAGES.map((stage, idx) => (
            <img
              key={idx}
              src={stage.img}
              alt=""
              style={{
                position: stageIndex === idx ? 'relative' : 'absolute',
                width: `${stage.width}px`,
                opacity: stageIndex === idx ? 1 : 0,
                transform: stageIndex === idx ? "scale(1)" : "scale(0.3)",
                transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                imageRendering: "pixelated",
                bottom: 0,
              }}
            />
          ))}
        </div>
      </div>
      
    </>
  );
}
