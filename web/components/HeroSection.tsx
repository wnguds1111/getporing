"use client";

import { useEffect, useState } from "react";



const HERO_CHARACTERS = [
  { idle: "/assets/char_shiddle_idle.gif", name: "Wilted Poring" },
  { idle: "/assets/char_baby_idle.gif",    name: "Baby Poring" },
  { idle: "/assets/char_tangerine_idle.gif", name: "Tangerine" },
  { idle: "/assets/char_kappa_idle.gif",   name: "Kappa Poring" },
  { idle: "/assets/char_tako_idle.gif",    name: "Takoyaki" },
  { idle: "/assets/char_calico_idle.gif",  name: "Calico Cat" },
  { idle: "/assets/char_whale_idle.gif",   name: "Whale Poring" },
  { idle: "/assets/char_bapho_idle.gif",   name: "Baphomet" },
];

export default function HeroSection() {
  const [charIndex, setCharIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCharIndex((prev) => (prev + 1) % HERO_CHARACTERS.length);
        setTransitioning(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const scrollToPreReg = () => {
    const el = document.getElementById("prereg");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };


  const current = HERO_CHARACTERS[charIndex];

  return (
    <section id="hero">
      <img id="hero-bg" src="/assets/bg_wallpaper_02.png" alt="" role="presentation" />
      <div className="hero-content">
        <img src="/assets/logo.png" alt="Get Poring" className="hero-logo pop-in" />

        {/* Rotating center character */}
        <div className="hero-char-wrap" id="hero-char-wrap">
          <img
            src={current.idle}
            alt={current.name}
            className="hero-char"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? "scale(0.5) translateY(10px)" : "scale(1) translateY(0)",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        </div>

        {/* Animated CTA */}
        <a
          href="#prereg"
          className="btn-pixel btn-yellow hero-cta-pulse pop-in"
          onClick={(e) => { e.preventDefault(); scrollToPreReg(); }}
        >
          <span>Pre-Register Now</span> →
        </a>

        {/* Scroll down */}
        <div className="hero-scroll-hint" onClick={scrollToPreReg}>
          <span className="hero-scroll-arrow">▼</span>
        </div>
      </div>

      {/* Scattered corner characters — no text */}
      <img src="/assets/char_baby_idle.gif" className="hero-corner-char hc-1" alt="" />
      <img src="/assets/char_calico_idle.gif" className="hero-corner-char hc-2" alt="" />
      <img src="/assets/char_snow_idle.gif" className="hero-corner-char hc-3" alt="" />
      <img src="/assets/char_peco_idle.gif" className="hero-corner-char hc-4" alt="" />

      {/* Floating eggs */}
      <img src="/assets/egg_basic.png" className="hero-decor float-1" alt="" />
      <img src="/assets/egg_parfait.png" className="hero-decor float-2" alt="" />
      <img src="/assets/egg_takoyaki.png" className="hero-decor float-3" alt="" />
    </section>
  );
}
