"use client";

/* Floating character decorations scattered throughout sections */
export function SectionChars({ chars }: { chars: { src: string; pos: string; size?: number; delay?: number }[] }) {
  return (
    <>
      {chars.map((c, i) => (
        <img
          key={i}
          src={c.src}
          alt=""
          className="section-float-char"
          style={{
            ...posFromString(c.pos),
            width: `${c.size || 60}px`,
            animationDelay: `${c.delay || i * 0.5}s`,
          }}
        />
      ))}
    </>
  );
}

function posFromString(pos: string): React.CSSProperties {
  const map: Record<string, React.CSSProperties> = {
    "tl": { top: "12px", left: "12px" },
    "tr": { top: "12px", right: "12px" },
    "bl": { bottom: "12px", left: "12px" },
    "br": { bottom: "12px", right: "12px" },
    "ml": { top: "50%", left: "12px", transform: "translateY(-50%)" },
    "mr": { top: "50%", right: "12px", transform: "translateY(-50%)" },
    "tl2": { top: "60px", left: "40px" },
    "tr2": { top: "60px", right: "40px" },
    "bl2": { bottom: "40px", left: "40px" },
    "br2": { bottom: "40px", right: "40px" },
  };
  return map[pos] || {};
}
