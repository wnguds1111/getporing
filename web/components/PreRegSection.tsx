"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

import { SectionChars } from "./SectionChars";

export default function PreRegSection({
  onLoginClick
}: {
  onLoginClick: () => void;
}) {
  const [preregState, setPreregState] = useState<"loggedout" | "loggedin" | "done">("loggedout");
  const [agreeCheck, setAgreeCheck] = useState(false);

  // Expose this to global scope for the demo login modal to trigger
  if (typeof window !== "undefined") {
    (window as any).triggerLoginDemo = () => setPreregState("loggedin");
  }

  const handleSubmit = () => {
    if (agreeCheck) {
      setPreregState("done");
      if (typeof window !== "undefined" && (window as any).triggerMilestoneComplete) {
        (window as any).triggerMilestoneComplete();
      }
    }
  };

  return (
    <section id="prereg" className="section decorated-bg-pink">
      <h2 className="section-title">Pre-Register for GetPoring</h2>
      
      <RevealWrapper className="prereg-box inner-border">
        <div className="prereg-header">
          <span className="pixel-star">*</span>
          Pre-Register for GetPoring
          <span className="pixel-star">*</span>
        </div>
        <div className="prereg-body">
          {/* STATE A: not logged in */}
          <div className={`prereg-state ${preregState === "loggedout" ? "active" : ""}`}>
            <div className="prereg-rewards-box">
              <span className="rewards-title">🎁 Pre-Registration Rewards</span>
              <div className="rewards-list">
                <div className="reward-item">
                  <img src="/assets/egg_basic.png" alt="Starter Egg" className="animate-float" style={{ animationDelay: "0s" }} />
                  <span>Starter Egg x1</span>
                </div>
                <div className="reward-item">
                  <img src="/assets/char_baby_idle.gif" alt="Baby Poring" className="animate-float" style={{ animationDelay: "0.2s" }} />
                  <span>Baby Poring Pet</span>
                </div>
                <div className="reward-item">
                  <img src="/assets/char_snail_idle.gif" alt="Snail Poring" className="animate-float" style={{ animationDelay: "0.4s" }} />
                  <span>Snail Accessory</span>
                </div>
              </div>
            </div>
            <p className="prereg-prompt">Log in to claim your exclusive pre-registration rewards!</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <button className="btn-pixel btn-yellow" onClick={onLoginClick}>Login</button>
              <button className="btn-pixel btn-outline" onClick={onLoginClick}>Sign Up</button>
            </div>
          </div>

          {/* STATE B: logged in */}
          <div className={`prereg-state ${preregState === "loggedin" ? "active" : ""}`}>
            <div className="prereg-rewards-box">
              <span className="rewards-title">🎁 Ready to claim your rewards!</span>
              <div className="rewards-list">
                <div className="reward-item">
                  <img src="/assets/egg_basic.png" alt="Starter Egg" className="animate-float" style={{ animationDelay: "0s" }} />
                  <span>Starter Egg x1</span>
                </div>
                <div className="reward-item">
                  <img src="/assets/char_baby_idle.gif" alt="Baby Poring" className="animate-float" style={{ animationDelay: "0.2s" }} />
                  <span>Baby Poring Pet</span>
                </div>
                <div className="reward-item">
                  <img src="/assets/char_snail_idle.gif" alt="Snail Poring" className="animate-float" style={{ animationDelay: "0.4s" }} />
                  <span>Snail Accessory</span>
                </div>
              </div>
            </div>
            <div className="prereg-agree-wrap">
              <input
                type="checkbox"
                id="agree-check"
                checked={agreeCheck}
                onChange={(e) => setAgreeCheck(e.target.checked)}
              />
              <label htmlFor="agree-check">
                <span>I agree to pre-register and receive promotional messages</span> (<a href="#">Terms</a>)
              </label>
            </div>
            <button
              className={`btn-pixel ${agreeCheck ? "btn-yellow" : "btn-disabled"} w-full`}
              disabled={!agreeCheck}
              onClick={handleSubmit}
            >
              <span>PRE-REGISTER NOW</span> →
            </button>
          </div>

          {/* STATE C: done */}
          <div className={`prereg-state ${preregState === "done" ? "active" : ""}`}>
            <img src="/assets/char_parfait_happy.gif" alt="Parfait happy" className="prereg-char" style={{ width: "130px" }} />
            <h3 className="done-title">Pre-Registration Complete!</h3>
            <p className="done-body">Your pre-registration has been successfully submitted.</p>

          </div>
        </div>
      </RevealWrapper>
      <SectionChars chars={[
        { src: "/assets/char_tako_idle.gif", pos: "bl", size: 90 },
        { src: "/assets/char_kappa_idle.gif", pos: "br", size: 80, delay: 0.8 },
      ]} />
    </section>
  );
}
