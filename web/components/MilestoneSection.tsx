"use client";

import { useState, useEffect } from "react";
import RevealWrapper from "./RevealWrapper";
import { SectionChars } from "./SectionChars";

const TIERS = [
  { tier: 1, target: "20K", reached: true, img: "/assets/egg_basic.png", reward: "In-Game Currency" },
  { tier: 2, target: "50K", reached: true, img: "/assets/care_bath.png", reward: "Care Item Set" },
  { tier: 3, target: "100K", reached: false, img: "/assets/egg_takoyaki.png", reward: "Limited Takoyaki Egg" },
  { tier: 4, target: "150K", reached: false, img: "/assets/btn-logo-roz.avif", reward: "ROZ Poring Vice Item" },
  { tier: 5, target: "200K", reached: false, img: "/assets/char_parfait_idle.gif", reward: "Parfait Poring Skin + Special Pet", grand: true },
];

export default function MilestoneSection({ onOpenPrecautions }: { onOpenPrecautions?: () => void }) {
  const [gaugeWidth, setGaugeWidth] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => setGaugeWidth("40%"), 500);
    if (typeof window !== "undefined") {
      (window as any).triggerMilestoneComplete = () => {
        setTimeout(() => setGaugeWidth("50%"), 300);
      };
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="milestone" className="section decorated-bg-yellow">
      <h2 className="section-title">Pre-Registration Milestones</h2>
      <p className="section-sub">Unlock rewards as more players pre-register!</p>

      <div className="milestone-track">
        {/* Progress bar integrated with cards */}
        <RevealWrapper className="milestone-gauge-bar">
          <div className="milestone-gauge-fill" style={{ width: gaugeWidth }}></div>
          {/* Tier dots on the bar */}
          {TIERS.map((t, i) => (
            <div
              key={i}
              className={`milestone-dot ${t.reached ? "reached" : ""}`}
              style={{ left: `${((i + 1) / TIERS.length) * 100}%` }}
            >
              <span className="milestone-dot-label">{t.target}</span>
            </div>
          ))}
        </RevealWrapper>

        {/* Tier cards grid */}
        <div className="milestone-grid">
          {TIERS.map((t, i) => (
            <RevealWrapper
              key={i}
              delay={i * 80}
              className={`milestone-card ${t.reached ? "reached" : "locked"} ${t.grand ? "tier-grand" : ""}`}
            >
              {t.reached && <span className="milestone-badge">Reached!</span>}
              {!t.reached && <div className="lock-icon-small">🔒</div>}
              <div className="milestone-tier">{t.grand ? `Tier ${t.tier} — GRAND` : `Tier ${t.tier}`}</div>
              <img src={t.img} className="milestone-icon animate-float" style={{ animationDelay: `${i * 0.2}s`, opacity: t.reached ? 1 : 0.5 }} alt="Reward" />
              <div className="milestone-reward" style={{ opacity: t.reached ? 1 : 0.6 }}>{t.reward}</div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "32px", position: "relative", zIndex: 10 }}>
        <button className="text-link" onClick={onOpenPrecautions}>View Milestone Notes</button>
      </div>

      <SectionChars chars={[
        { src: "/assets/char_tangerine_idle.gif", pos: "tl2", size: 80 },
        { src: "/assets/char_whale_idle.gif", pos: "br2", size: 90, delay: 1 },
        { src: "/assets/char_baby2_idle.gif", pos: "tr2", size: 75, delay: 0.5 },
      ]} />
    </section>
  );
}
