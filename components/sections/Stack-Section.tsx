"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STACKS = [
  "Laravel", "React", "Next.js", "TypeScript", "Inertia.js",
  "MySQL", "PostgreSQL", "Tailwind CSS", "GSAP", "Git",
  "PHP", "Node.js", "Redis", "Docker", "Figma",
];

// Duplicate for infinite scroll feel
const ROW1 = [...STACKS, ...STACKS];
const ROW2 = [...STACKS, ...STACKS];

export default function StackSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Row 1: moves left
    gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 28,
      repeat: -1,
      ease: "none",
    });
    // Row 2: moves right
    gsap.fromTo(
      row2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 28,
        repeat: -1,
        ease: "none",
      }
    );
  });

  return (
    <section
      id="stack"
      className="section-padding"
      style={{
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div className="container-portfolio" style={{ marginBottom: "2.5rem" }}>
        <span className="text-meta">[ TECH STACK ]</span>
      </div>

      {/* Row 1 → left */}
      <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
        <div
          ref={row1Ref}
          style={{
            display: "flex",
            gap: "3rem",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {ROW1.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                whiteSpace: "nowrap",
                color: i % 4 === 0 ? "#1e44c2" : "var(--muted)",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 → right */}
      <div style={{ overflow: "hidden" }}>
        <div
          ref={row2Ref}
          style={{
            display: "flex",
            gap: "3rem",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {ROW2.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                whiteSpace: "nowrap",
                color: i % 5 === 2 ? "#1e44c2" : "var(--muted)",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
