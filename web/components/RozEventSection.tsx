"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";
import { SectionChars } from "./SectionChars";

export default function RozEventSection({ onOpenPrecautions }: { onOpenPrecautions?: () => void }) {
  // Demo states: 'none' | 'gp' | 'roz' | 'both'
  const [demoState, setDemoState] = useState<"none" | "gp" | "roz" | "both">("none");

  const gpDone = demoState === "gp" || demoState === "both";
  const rozDone = demoState === "roz" || demoState === "both";
  const bothDone = demoState === "both";

  return (
    <section id="roz-event" className="section decorated-bg-pink">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", position: "relative", zIndex: 10 }}>
        <h2 className="section-title">
          GetPoring x Ragnarok Zero: Global
        </h2>
        <p className="section-sub">
          Pre-register for both games and receive special combined rewards!
        </p>

        <RevealWrapper className="roz-box inner-border">
          {/* Cute decorative characters on the box */}
          <img src="/assets/char_peco_happy.gif" className="animate-idle-bounce" style={{ position: "absolute", top: "-40px", right: "20px", width: "70px", zIndex: 5 }} alt="" />
          <img src="/assets/char_bapho_idle.gif" className="animate-idle-bounce" style={{ position: "absolute", bottom: "10px", left: "-20px", width: "60px", zIndex: 5, animationDelay: "0.5s" }} alt="" />
          <img src="/assets/char_shiddle_idle.gif" className="animate-idle-bounce" style={{ position: "absolute", top: "50%", right: "-30px", width: "80px", zIndex: 5, transform: "translateY(-50%)", animationDelay: "1s" }} alt="" />

          <div className="roz-status-row">
            {/* GetPoring Card */}
            <div className={`roz-status-card ${gpDone ? "roz-card-done" : ""}`}>
              <img src="/assets/logo_cropped.png" className="roz-card-logo" alt="GetPoring" />
              <div className="roz-status-name">GetPoring</div>
              <span className={`roz-status-badge ${gpDone ? "done" : "pending"}`}>
                {gpDone ? "Complete" : "Pending"}
              </span>
            </div>

            <div className="roz-arrow">+</div>

            {/* Ragnarok Zero Card */}
            <div className={`roz-status-card ${rozDone ? "roz-card-done" : ""}`}>
              <img src="/assets/btn-logo-roz.avif" className="roz-card-logo roz-card-logo-roz" alt="Ragnarok Zero: Global" />
              <div className="roz-status-name">Ragnarok Zero</div>
              <span className={`roz-status-badge ${rozDone ? "done" : "pending"}`}>
                {rozDone ? "Complete" : "Pending"}
              </span>
            </div>

            <div className="roz-arrow">=</div>

            {/* Combined Reward Card */}
            <div className={`roz-status-card roz-reward-card ${bothDone ? "roz-card-done roz-card-unlocked" : ""}`}>
              <div style={{ position: "relative" }}>
                <img
                  src={bothDone ? "/assets/char_tako_happy.gif" : "/assets/egg_takoyaki.png"}
                  className={`roz-card-reward-img animate-float ${bothDone ? "unlocked-effect" : ""}`}
                  alt="Reward"
                  style={{ opacity: bothDone ? 1 : 0.5, transform: bothDone ? "scale(1.3)" : "scale(1)" }}
                />
              </div>
              <div className="roz-status-name">Combined Reward</div>
              <span className={`roz-status-badge ${bothDone ? "done" : "pending"}`}>
                {bothDone ? "Obtained" : "Pending"}
              </span>
            </div>
          </div>

          {/* Both done message */}
          {bothDone && (
            <div className="roz-mission-clear show">
              <p className="roz-mission-text">MISSION CLEAR!</p>
              <p style={{ fontSize: "14px", opacity: 0.8, marginTop: "8px", color: "var(--dark)" }}>
                Your special combined reward will be delivered at game launch.
              </p>
            </div>
          )}

          <p className="roz-slogan">&quot;On the go with GetPoring, at home with ROZ&quot;</p>

          <div className="roz-cta-row" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {!gpDone && !bothDone && (
              <a href="#prereg" className="btn-pixel" style={{ background: 'var(--yellow)', color: 'var(--dark)' }}>
                <span>Go to GetPoring Pre-Reg</span>
              </a>
            )}
            
            {!rozDone && !bothDone && (
              <a href="https://roz.mygnjoy.com/en/event/prereservation" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-red">
                <span>Go to ROZ Pre-Reg</span>
              </a>
            )}

            {bothDone && (
              <div className="btn-pixel" style={{ background: '#9e9e9e', color: '#fff', cursor: 'default', boxShadow: 'none', transform: 'none' }}>
                <span>Cross Event Complete!</span>
              </div>
            )}
          </div>

          {/* Demo state switcher */}
          <div className="roz-demo-switch">
            <span style={{ fontSize: "11px", opacity: 0.5, color: "var(--dark)" }}>Demo:</span>
            <button className={`roz-demo-btn ${demoState === "none" ? "active" : ""}`} onClick={() => setDemoState("none")}>None</button>
            <button className={`roz-demo-btn ${demoState === "gp" ? "active" : ""}`} onClick={() => setDemoState("gp")}>GP only</button>
            <button className={`roz-demo-btn ${demoState === "roz" ? "active" : ""}`} onClick={() => setDemoState("roz")}>ROZ only</button>
            <button className={`roz-demo-btn ${demoState === "both" ? "active" : ""}`} onClick={() => setDemoState("both")}>Both</button>
          </div>
        </RevealWrapper>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button className="text-link" onClick={onOpenPrecautions}>View Cross Event Notes</button>
        </div>
      </div>

      <SectionChars chars={[
        { src: "/assets/char_whale_idle.gif", pos: "ml", size: 85, delay: 0.2 },
        { src: "/assets/char_peco_idle.gif", pos: "mr", size: 90, delay: 0.9 },
      ]} />
    </section>
  );
}
