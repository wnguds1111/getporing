"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PreRegSection from "@/components/PreRegSection";
import MilestoneSection from "@/components/MilestoneSection";
import AttendanceSection from "@/components/AttendanceSection";
import RozEventSection from "@/components/RozEventSection";
import ScrollToTopButton from "@/components/EvolutionCompanion";
import GnbCompanion from "@/components/GnbCompanion";
import ScrollEvolution from "@/components/ScrollEvolution";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrecautionsOpen, setIsPrecautionsOpen] = useState(false);

  const handleLoginDemo = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined" && (window as any).triggerLoginDemo) {
      (window as any).triggerLoginDemo();
    }
  };

  return (
    <>
      {/* ============================
           GNB (Mobile-first ROZ style)
      ============================= */}
      <header id="gnb">
        <div className="gnb-left mobile-only">
          <img src="/assets/logo.png" alt="Get Poring" className="gnb-logo-game" />
          <img src="/assets/logo_roz.png" alt="ROZ" className="gnb-logo-roz" />
        </div>
        <div className="desktop-only"></div>
        
        <div className="gnb-center desktop-only">
          <img src="/assets/gnjoy_logo.png" alt="GNJOY" className="gnb-logo-gnjoy" />
        </div>

        {/* Desktop Right Menu */}
        <div className="gnb-right desktop-only" style={{ justifyContent: "flex-end" }}>
          <div className="gnb-lang" id="lang-switcher">
            <span>🌐</span>
            <span id="lang-code">{lang.toUpperCase()}</span>
            <span>▾</span>
            <select
              id="lang-select"
              aria-label="Select language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="zh-cn">ZH-CN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="id">ID</option>
              <option value="th">TH</option>
              <option value="tr">TR</option>
            </select>
          </div>
          <button className="gnb-btn signup" onClick={() => setIsModalOpen(true)}>Sign Up</button>
          <button className="gnb-btn login" onClick={() => setIsModalOpen(true)}>Login</button>
        </div>

        {/* Mobile Hamburger */}
        <button className="gnb-hamburger mobile-only" aria-label="Menu" onClick={() => alert("Menu clicked!")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Floating Pre-Registration Hub (Top Right) */}
      <div className="floating-hub-wrapper">
        <GnbCompanion />
      </div>

      {/* Left Side Scroll Evolution */}
      <ScrollEvolution />

      <HeroSection />
      <PreRegSection onLoginClick={() => setIsModalOpen(true)} />
      <MilestoneSection onOpenPrecautions={() => setIsPrecautionsOpen(true)} />
      <AttendanceSection onOpenPrecautions={() => setIsPrecautionsOpen(true)} />
      <RozEventSection onOpenPrecautions={() => setIsPrecautionsOpen(true)} />
      <FeaturesSection />

      {/* ============================
           FOOTER
      ============================= */}
      <footer id="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Customer Service</a>
        </div>
        <p className="footer-info">© 2026 GNJOY. All Rights Reserved.</p>
      </footer>

      {/* Auth Modal */}
      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="modal-content inner-border" style={{ background: "var(--cream)", border: "var(--border)", borderRadius: "var(--r-card)", padding: "32px", maxWidth: "360px", width: "90%", textAlign: "center", boxShadow: "var(--shadow-card)" }}>
            <img src="/assets/char_snail_happy.gif" style={{ width: "80px", margin: "0 auto 16px" }} alt="" />
            <h3 style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: "22px", marginBottom: "8px" }}>GNJOY Login</h3>
            <p style={{ fontSize: "13px", color: "var(--text-mute)", marginBottom: "20px" }}>
              GNJOY GNB embed pending platform integration.<br />Using demo mode for development.
            </p>
            <button className="btn-pixel btn-yellow w-full" onClick={handleLoginDemo} style={{ marginBottom: "8px" }}>
              Demo Login (Dev Mode)
            </button>
            <button className="btn-pixel btn-outline w-full" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Precautions Modal */}
      {isPrecautionsOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
          <div className="modal-content inner-border" style={{ background: "var(--cream)", border: "var(--border)", borderRadius: "var(--r-card)", padding: "32px", maxWidth: "480px", width: "90%", boxShadow: "var(--shadow-card)", maxHeight: "80vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: "22px" }}>Pre-Registration Notes</h3>
              <button onClick={() => setIsPrecautionsOpen(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "var(--dark)" }}>&times;</button>
            </div>
            <div style={{ fontSize: "14px", color: "var(--text)", lineHeight: "1.6" }}>
              <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                <li>Rewards will be distributed after the official launch of the game.</li>
                <li>Pre-registration rewards are limited to one per account.</li>
                <li>Cross-promotion rewards require pre-registration in both GetPoring and Ragnarok Zero.</li>
                <li>Please ensure your GNJOY account is properly linked to receive rewards.</li>
                <li>Event details and rewards are subject to change without prior notice.</li>
              </ul>
              <p style={{ textAlign: "center", marginTop: "24px" }}>
                <button className="btn-pixel btn-outline" onClick={() => setIsPrecautionsOpen(false)}>Close</button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top */}
      <ScrollToTopButton />
    </>
  );
}
