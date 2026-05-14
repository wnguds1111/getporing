"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

export default function CompendiumSection() {
  const [activeTab, setActiveTab] = useState("baby");

  return (
    <section id="compendium" className="section decorated-bg-cream">
      <h2 className="section-title">Poring Compendium</h2>
      <p className="section-sub">Discover all 22 unique Porings you can raise!</p>

      <RevealWrapper className="tabs">
        <button className={`tab-btn ${activeTab === "baby" ? "active" : ""}`} onClick={() => setActiveTab("baby")}>Baby</button>
        <button className={`tab-btn ${activeTab === "teen" ? "active" : ""}`} onClick={() => setActiveTab("teen")}>Teen</button>
        <button className={`tab-btn ${activeTab === "adult" ? "active" : ""}`} onClick={() => setActiveTab("adult")}>Adult</button>
      </RevealWrapper>

      {/* BABY */}
      <div className={`tab-panel ${activeTab === "baby" ? "active" : ""}`} id="tab-baby">
        <div className="char-grid">
          <div className="char-cell inner-border">
            <img src="/assets/char_baby_idle.gif" className="char-gif" alt="Baby Poring" />
            <span className="char-name">Baby Poring</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_baby2_idle.gif" className="char-gif" alt="Baby Poring B" />
            <span className="char-name">Baby Poring B</span>
          </div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
        </div>
      </div>

      {/* TEEN */}
      <div className={`tab-panel ${activeTab === "teen" ? "active" : ""}`} id="tab-teen">
        <div className="char-grid">
          <div className="char-cell inner-border">
            <img src="/assets/char_snail_idle.gif" className="char-gif" alt="Snail Poring" />
            <span className="char-name">Snail Poring</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_shiddle_idle.gif" className="char-gif" alt="Wilted Poring" />
            <span className="char-name">Wilted Poring</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_whale_idle.gif" className="char-gif" alt="Whale Poring" />
            <span className="char-name">Whale Poring</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_calico_idle.gif" className="char-gif" alt="Calico Cat" />
            <span className="char-name">Calico Cat</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_bapho_idle.gif" className="char-gif" alt="Baphomet" />
            <span className="char-name">Baphomet</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_tako_idle.gif" className="char-gif" alt="Takoyaki" />
            <span className="char-name">Takoyaki</span>
          </div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
        </div>
      </div>

      {/* ADULT */}
      <div className={`tab-panel ${activeTab === "adult" ? "active" : ""}`} id="tab-adult">
        <div className="char-grid">
          <div className="char-cell inner-border">
            <img src="/assets/char_parfait_idle.gif" className="char-gif" alt="Parfait" />
            <span className="char-name">Parfait</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_snow_idle.gif" className="char-gif" alt="Snow Globe" />
            <span className="char-name">Snow Globe</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_kappa_idle.gif" className="char-gif" alt="Kappa" />
            <span className="char-name">Kappa</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_tangerine_idle.gif" className="char-gif" alt="Tangerine" />
            <span className="char-name">Tangerine</span>
          </div>
          <div className="char-cell inner-border">
            <img src="/assets/char_peco_idle.gif" className="char-gif" alt="Pecopeco" />
            <span className="char-name">Pecopeco</span>
          </div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
          <div className="char-cell locked inner-border"><div className="char-locked-icon">❓</div><span className="char-name">???</span></div>
        </div>
      </div>
    </section>
  );
}
