"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "@/components/animations/Magnetic";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const metaLeftRef = useRef<HTMLDivElement>(null);
  const metaRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for navbar logo animation to settle, then reveal
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      photoWrapRef.current,
      { clipPath: "inset(100% 0 0 0)", scale: 1.06 },
      { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        [metaLeftRef.current, metaRightRef.current],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.08 },
        "-=0.6"
      );
  }, []);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        height: "100svh",
        maxHeight: "100svh",
        position: "sticky",
        top: 0,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/*
        ── PHOTO AREA ──────────────────────────────────────────────
        Fills the available space below the header text and above
        the bottom bar. Uses flex: 1 and minHeight: 0 so it never
        exceeds the 100svh viewport.
      */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "relative",
          paddingTop: "clamp(5rem, 9vw, 8rem)",
          overflow: "hidden",
        }}
      >
        <div
          ref={photoWrapRef}
          style={{
            height: "100%",
            maxHeight: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            clipPath: "inset(100% 0 0 0)",
            willChange: "clip-path, transform",
          }}
        >
          <img
            src="/assets/images/photo4.png"
            alt="Mochamad Thoriq Khoir"
            style={{
              height: "100%",
              maxHeight: "100%",
              width: "auto",
              maxWidth: "min(88vw, 600px)",
              objectFit: "contain",
              objectPosition: "bottom center",
              display: "block",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          padding: "0.9rem var(--container-px)",
          borderTop: "1px solid var(--border)",
          gap: "1.2rem",
          background: "var(--bg)",
          flexShrink: 0,
          zIndex: 2,
        }}
        className="hero-bottom-bar"
      >
        {/* Left: role + availability badge */}
        <div
          ref={metaLeftRef}
          style={{
            opacity: 0,
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            flexWrap: "wrap",
          }}
        >
          <span
            className="text-meta"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "999px",
              padding: "0.32rem 0.85rem",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              fontWeight: 500,
            }}
          >
            WEB DEVELOPER · FULL STACK
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 6px #22c55e",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span className="text-meta" style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* Right: Location & CTA */}
        <div
          ref={metaRightRef}
          style={{
            opacity: 0,
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "right" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span className="text-meta" style={{ fontSize: "0.68rem", lineHeight: 1.2, letterSpacing: "0.08em" }}>
                BASED IN MALANG,
              </span>
              <span className="text-meta" style={{ fontSize: "0.68rem", lineHeight: 1.2, letterSpacing: "0.08em", fontWeight: 600 }}>
                INDONESIA (GMT+7)
              </span>
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.75 }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          <Magnetic strength={0.35}>
            <button
              id="hero-work-btn"
              type="button"
              onClick={scrollToWork}
              style={{
                border: "1.5px solid var(--fg)",
                borderRadius: "999px",
                padding: "0.5rem 1.35rem",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--fg)",
                background: "transparent",
                cursor: "none",
                transition: "background 0.25s ease, color 0.25s ease",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--fg)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--fg)";
              }}
              data-magnetic
            >
              View Work ↗
            </button>
          </Magnetic>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bottom-bar {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
            padding: 0.75rem var(--container-px) !important;
          }
        }
      `}</style>
    </section>
  );
}