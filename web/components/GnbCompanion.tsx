"use client";

import { useEffect, useState } from "react";

export default function GnbCompanion() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false); // Close menu on mobile if open
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* Desktop specific layout for the right-side buttons */
        .desktop-gnb-wrapper {
          position: fixed;
          top: 90px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
        }

        .desktop-gnb-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 2px solid var(--dark);
          border-radius: var(--r-pill);
          padding: 8px 16px;
          cursor: pointer;
          opacity: 0;
          transform: translateX(50px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
          white-space: nowrap;
          font-family: var(--font-pixel);
          font-size: 14px;
          line-height: 1.2;
        }
        .desktop-gnb-btn.show {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
        }
        .desktop-gnb-btn:hover {
          transform: translateX(0) scale(1.05);
          box-shadow: 0 4px 0 var(--dark), 0 0 12px rgba(245,166,35,0.4);
        }
        .desktop-gnb-btn:active {
          transform: translateX(0) translateY(3px) scale(1);
          box-shadow: 0 1px 0 var(--dark);
        }

        /* Hamburger button for mobile */
        .mobile-hamburger {
          display: none;
          position: fixed;
          top: 80px;
          right: 16px;
          width: 48px;
          height: 48px;
          background: #fff;
          border: 2px solid var(--dark);
          border-radius: 8px;
          z-index: 1002;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          box-shadow: 2px 2px 0 var(--dark);
        }
        .mobile-hamburger span {
          display: block;
          width: 24px;
          height: 3px;
          background: var(--dark);
          border-radius: 2px;
          transition: 0.3s;
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 245, 230, 0.95);
          backdrop-filter: blur(8px);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-link {
          font-family: var(--font-pixel);
          font-size: 24px;
          color: var(--dark);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .mobile-menu-link:active {
          transform: scale(0.95);
        }
        .mobile-menu-btn {
          font-family: var(--font-pixel);
          font-size: 16px;
          padding: 16px 24px;
          background: var(--bg-cream);
          border: 2px solid var(--yellow-dark);
          border-radius: 12px;
          box-shadow: 4px 4px 0 var(--dark);
          width: 80%;
          max-width: 300px;
          text-align: center;
          cursor: pointer;
          color: var(--dark);
          line-height: 1.4;
        }
        .mobile-menu-btn.red {
          background: var(--bg-pink);
          border-color: var(--red);
          color: var(--red-dark);
        }

        @media (max-width: 768px) {
          .desktop-gnb-wrapper {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex;
          }
        }
      `}</style>

      {/* Mobile Hamburger Button */}
      <div 
        className="mobile-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          opacity: visible || menuOpen ? 1 : 0,
          pointerEvents: visible || menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s'
        }}
      >
        <span style={{ transform: menuOpen ? 'translateY(9px) rotate(45deg)' : 'none' }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none' }}></span>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-link" onClick={() => scrollTo("hero")}>Home</div>
        <div className="mobile-menu-link" onClick={() => scrollTo("features")}>Features</div>
        <div className="mobile-menu-link" onClick={() => scrollTo("attendance")}>Attendance</div>
        <div className="mobile-menu-link" onClick={() => scrollTo("milestone")}>Milestones</div>
        
        <div style={{ height: '12px' }}></div>
        
        <div className="mobile-menu-btn" onClick={() => scrollTo("prereg")}>
          GetPoring<br/>Pre-Registration
        </div>
        <div className="mobile-menu-btn red" onClick={() => scrollTo("roz-event")}>
          ROZ<br/>Pre-Registration
        </div>
      </div>

      {/* Desktop GNB Companion */}
      <div className="desktop-gnb-wrapper">
        <div
          className={`desktop-gnb-btn ${visible ? "show" : ""}`}
          onClick={() => scrollTo("prereg")}
          style={{
            background: "var(--bg-cream)",
            borderColor: "var(--yellow-dark)"
          }}
        >
          <span style={{ textAlign: "center", width: "100%" }}>GetPoring<br/>Pre-Registration</span>
        </div>

        <div
          className={`desktop-gnb-btn ${visible ? "show" : ""}`}
          onClick={() => scrollTo("roz-event")}
          style={{
            background: "var(--bg-pink)",
            borderColor: "var(--red)"
          }}
        >
          <span style={{ textAlign: "center", width: "100%", color: "var(--red-dark)" }}>ROZ<br/>Pre-Registration</span>
        </div>
      </div>
    </>
  );
}
