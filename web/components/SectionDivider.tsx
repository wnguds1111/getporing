"use client";

import RevealWrapper from "./RevealWrapper";

interface SectionDividerProps {
  charSrc: string;
  bubbleText: string;
  flip?: boolean;
}

export default function SectionDivider({ charSrc, bubbleText, flip = false }: SectionDividerProps) {
  return (
    <div className={`section-divider ${flip ? "flip" : ""}`}>
      <RevealWrapper className="section-divider-inner">
        <div className="divider-bubble">{bubbleText}</div>
        <img src={charSrc} alt="" className="divider-char" />
      </RevealWrapper>
    </div>
  );
}
