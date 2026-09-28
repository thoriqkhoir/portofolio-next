"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState("");
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only on pointer-fine (desktop) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setHidden(false);
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const projectCard = target.closest("[data-project-card]");
      const isLink = target.closest("a, button, [data-magnetic]");

      if (projectCard) {
        setLabel("VIEW");
      } else if (isLink) {
        setLabel("→");
      } else {
        setLabel("");
      }
    };

    const animate = () => {
      const dot = dotRef.current;
      const ringEl = ringRef.current;
      if (!dot || !ringEl) { rafId.current = requestAnimationFrame(animate); return; }

      // Dot follows instantly
      dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;

      // Ring lerps toward dot
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      const size = label ? 60 : 36;
      ringEl.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
      ringEl.style.width = `${size}px`;
      ringEl.style.height = `${size}px`;

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      document.body.style.cursor = "";
    };
  }, [label]);

  if (hidden) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          borderRadius: "50%",
          border: "1.5px solid var(--fg)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform, width, height",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {label && (
          <span style={{
            fontSize: "0.55rem",
            letterSpacing: "0.08em",
            fontWeight: 700,
            color: "var(--fg)",
            textTransform: "uppercase",
          }}>
            {label}
          </span>
        )}
      </div>
    </>
  );
}
