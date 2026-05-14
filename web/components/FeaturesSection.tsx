"use client";

import RevealWrapper from "./RevealWrapper";
import { SectionChars } from "./SectionChars";

export default function FeaturesSection() {
  return (
    <section id="features" className="section decorated-bg-cream">
      <h2 className="section-title">What is GetPoring?</h2>
      <p className="section-sub">Raise · Bond · Adventure</p>

      <div className="features-slider-container">
        <button className="slider-btn left" onClick={() => {
          const track = document.getElementById("features-track");
          if (track) track.scrollBy({ left: -344, behavior: "smooth" });
        }}>
          <img src="/assets/ui_outside_affection.png" style={{ display: "none" }} alt="" /> {/* preload */}
          <span className="slider-arrow">◀</span>
        </button>

        <div className="features-track" id="features-track">
          {[0, 1, 2, 3].map((setIndex) => (
            <div key={setIndex} style={{ display: "contents" }}>
              <RevealWrapper delay={0} className="feature-card inner-border">
                <div className="feature-imgs">
                  <img src="/assets/egg_takoyaki.png" alt="Takoyaki Egg" className="animate-wiggle" />
                  <img src="/assets/egg_parfait.png" alt="Parfait Egg" className="animate-wiggle" style={{ animationDelay: "0.2s" }} />
                  <img src="/assets/egg_basic.png" alt="Basic Egg" className="animate-wiggle" style={{ animationDelay: "0.4s" }} />
                </div>
                <img src="/assets/char_baby_idle.gif" alt="Baby Poring" style={{ width: "80px", margin: "0 auto 10px" }} />
                <h3 className="feature-title">Hatch Your Poring Egg</h3>
                <p className="feature-body">
                  Choose from 22 unique Poring eggs and raise your very own companion!
                </p>
              </RevealWrapper>

              <RevealWrapper delay={150} className="feature-card inner-border">
                <img
                  src="/assets/ui_outside_browse.png"
                  alt="Go outside"
                  className="feature-screenshot"
                />
                <h3 className="feature-title">Feed, Bathe &amp; Go Outside!</h3>
                <p className="feature-body">
                  Manage hunger, affection, and fatigue. Take your Poring out to meet new friends!
                </p>
              </RevealWrapper>

              <RevealWrapper delay={300} className="feature-card inner-border">
                <img
                  src="/assets/ui_outside_affection.png"
                  alt="ROZ transfer"
                  className="feature-screenshot"
                />
                <h3 className="feature-title">Send to Ragnarok Zero</h3>
                <p className="feature-body">
                  Your fully grown Poring becomes a companion pet in ROZ. On the go with GetPoring, at home with ROZ!
                </p>
              </RevealWrapper>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => {
          const track = document.getElementById("features-track");
          if (track) track.scrollBy({ left: 344, behavior: "smooth" });
        }}>
          <span className="slider-arrow">▶</span>
        </button>
      </div>
      <SectionChars chars={[
        { src: "/assets/char_shiddle_idle.gif", pos: "bl2", size: 50, delay: 0.3 },
        { src: "/assets/char_bapho_idle.gif", pos: "tr2", size: 55, delay: 0.7 },
        { src: "/assets/char_parfait_idle.gif", pos: "br2", size: 48, delay: 1.2 },
      ]} />
    </section>
  );
}
