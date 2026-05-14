"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="scroll-top-btn"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--yellow)",
        border: "3px solid var(--dark)",
        borderRadius: "50%",
        boxShadow: "0 4px 0 var(--yellow-dark), 0 6px 0 var(--dark)",
        cursor: "pointer",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : "translateY(20px) scale(0.6)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: show ? "auto" : "none",
        outline: "none",
        fontSize: "20px",
        fontWeight: 900,
        color: "var(--dark)",
        lineHeight: 1,
      }}
    >
      ▲
    </button>
  );
}
