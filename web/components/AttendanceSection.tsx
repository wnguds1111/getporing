"use client";

import { useState, useEffect } from "react";
import RevealWrapper from "./RevealWrapper";

export default function AttendanceSection({ onOpenPrecautions }: { onOpenPrecautions?: () => void }) {
  const [loginState, setLoginState] = useState("loggedout");
  const [attendanceState, setAttendanceState] = useState("pending");
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const [checkedDays, setCheckedDays] = useState<number[]>([]);

  useEffect(() => {
    const handleDemoLogin = () => setLoginState("loggedin");
    if (typeof window !== "undefined") {
      const original = (window as any).triggerLoginDemo;
      (window as any).triggerLoginDemo = () => {
        if (original) original();
        handleDemoLogin();
      };
    }
  }, []);

  const handleAttendanceClick = () => {
    if (loginState === "loggedout") {
      alert("Please login first to check attendance.");
      if (typeof window !== "undefined" && (window as any).triggerLoginDemo) {
        (window as any).triggerLoginDemo();
      }
      return;
    }
    setAttendanceState("done");
    setCheckedDays((prev) => [...prev, prev.length + 1]);
  };

  const totalDays = 48; // July 1 to Aug 17
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <section id="attendance" className="section decorated-bg-cream">
      <h2 className="section-title">Daily Login Check-In</h2>
      <p className="section-sub">Event Period: 01/07/2026 ~ 17/08/2026 (UTC-0)</p>

      <RevealWrapper className="attendance-box inner-border">
        <div className="attendance-content">
          <div className="attendance-info">
            <img src="/assets/char_tangerine_idle.gif" alt="Poring" className="attendance-char animate-float" />
            <div className="attendance-text">
              <h3 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Daily Check-in Event!</span>
                <button className="text-link" style={{ fontSize: "14px", fontWeight: "normal" }} onClick={() => setIsRewardsOpen(true)}>View Rewards</button>
              </h3>
              <p>Log in every day during the event period to get special rewards for GetPoring!</p>
            </div>
          </div>

          <div className="attendance-action">
            {loginState === "loggedout" ? (
              <button className="btn-pixel btn-outline" onClick={handleAttendanceClick}>
                Login to Check-in
              </button>
            ) : attendanceState === "done" ? (
              <button className="btn-pixel btn-disabled" disabled>
                Checked in Today!
              </button>
            ) : (
              <button className="btn-pixel btn-yellow" onClick={handleAttendanceClick}>
                Check-in Now
              </button>
            )}
          </div>

          {/* Scrollable Board */}
          <div className="attendance-board-wrap">
            <div className="attendance-board">
              {daysArray.map((day) => {
                const isChecked = checkedDays.includes(day);
                return (
                  <div key={day} className={`attendance-day ${isChecked ? "checked" : ""}`}>
                    <div className="day-label">Day {day}</div>
                    <div className="day-icon">
                      {isChecked ? (
                        <span style={{ color: "var(--red)", fontSize: "24px" }}>✔</span>
                      ) : (
                        <img src="/assets/egg_basic.png" alt="Reward" style={{ width: "24px", opacity: 0.5 }} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealWrapper>

      {/* Rewards Popup */}
      {isRewardsOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="modal-content inner-border" style={{ background: "var(--cream)", border: "var(--border)", borderRadius: "var(--r-card)", padding: "32px", maxWidth: "400px", width: "90%", textAlign: "center", boxShadow: "var(--shadow-card)" }}>
            <h3 style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: "22px", marginBottom: "16px", color: "var(--red)" }}>Check-in Rewards</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px", maxHeight: "40vh", overflowY: "auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: "12px", borderRadius: "10px", border: "2px solid var(--tan)" }}>
                <span style={{ fontWeight: 800 }}>Day 1~10</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img src="/assets/egg_basic.png" style={{ width: "24px" }} alt="" />
                  <span style={{ fontSize: "14px", color: "var(--text-mute)" }}>Basic Egg x1</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: "12px", borderRadius: "10px", border: "2px solid var(--tan)" }}>
                <span style={{ fontWeight: 800 }}>Day 11~20</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img src="/assets/care_bath.png" style={{ width: "24px" }} alt="" />
                  <span style={{ fontSize: "14px", color: "var(--text-mute)" }}>Care Set x2</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: "12px", borderRadius: "10px", border: "2px solid var(--tan)" }}>
                <span style={{ fontWeight: 800 }}>Day 21+</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img src="/assets/char_snail_idle.gif" style={{ width: "24px" }} alt="" />
                  <span style={{ fontSize: "14px", color: "var(--text-mute)" }}>Rare Poring x1</span>
                </div>
              </div>
            </div>
            <button className="btn-pixel btn-outline" onClick={() => setIsRewardsOpen(false)}>Close</button>
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "32px", position: "relative", zIndex: 10 }}>
        <button className="text-link" onClick={onOpenPrecautions}>View Attendance Notes</button>
      </div>
    </section>
  );
}
