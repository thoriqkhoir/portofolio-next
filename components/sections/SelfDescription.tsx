"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SelfDescription() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const asteriskRef = useRef<SVGSVGElement>(null);
  const organicWaveRef = useRef<SVGSVGElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const progressBar = progressBarRef.current;
      const asterisk = asteriskRef.current;
      const organicWave = organicWaveRef.current;
      const ring = ringRef.current;

      if (!section || !track) return;

      const mm = gsap.matchMedia();

      // ─── DESKTOP (Horizontal Pinned Scroll) ─────────────────────────
      mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        const getScrollDistance = () => track.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Primary horizontal track movement (Right to Left)
        tl.to(
          track,
          {
            x: () => -getScrollDistance(),
            ease: "none",
          },
          0
        );

        // 2. Progress bar scale
        if (progressBar) {
          tl.to(
            progressBar,
            {
              scaleX: 1,
              ease: "none",
            },
            0
          );
        }

        // 3. Secondary subtle motion & parallax on decorative SVGs
        if (asterisk) {
          tl.to(
            asterisk,
            {
              rotation: 540,
              ease: "none",
            },
            0
          );
        }

        if (organicWave) {
          tl.to(
            organicWave,
            {
              x: -180,
              scale: 1.15,
              ease: "none",
            },
            0
          );
        }

        if (ring) {
          tl.to(
            ring,
            {
              rotation: -270,
              x: -120,
              ease: "none",
            },
            0
          );
        }

        // 4. Subtle differential layer parallax on select text elements
        const fastElements = track.querySelectorAll(".layer-fast");
        fastElements.forEach((el) => {
          tl.to(
            el,
            {
              x: -90,
              ease: "none",
            },
            0
          );
        });

        const slowElements = track.querySelectorAll(".layer-slow");
        slowElements.forEach((el) => {
          tl.to(
            el,
            {
              x: 80,
              ease: "none",
            },
            0
          );
        });
      });

      // ─── MOBILE (Refined Vertical Editorial Stack) ───────────────────
      mm.add("(max-width: 768px)", () => {
        const panels = track.querySelectorAll(".editorial-panel");
        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0.15, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                end: "top 40%",
                scrub: 0.5,
              },
            }
          );
        });
      });

      // ─── REDUCED MOTION PREFERENCE ──────────────────────────────────
      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Natural static layout with no horizontal translation or pinning
        gsap.set(track, { x: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--fg)",
        position: "relative",
        zIndex: 15,
        overflow: "hidden",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
      }}
      className="self-description-section"
      aria-label="Philosophy and Craft"
    >
      {/* Subtle background ambient grain / texture styling */}
      <div
        className="horizontal-track"
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          width: "max-content",
          paddingLeft: "clamp(3rem, 7vw, 9rem)",
          paddingRight: "clamp(4rem, 10vw, 14rem)",
          gap: "clamp(4.5rem, 8vw, 11rem)",
          willChange: "transform",
        }}
      >
        {/* ─── PANEL 0: EDITORIAL MANIFESTO HEADER ───────────────────────── */}
        <div
          className="editorial-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "65vh",
            minWidth: "clamp(240px, 20vw, 320px)",
            borderLeft: "1.5px solid rgba(0, 0, 0, 0.15)",
            paddingLeft: "2rem",
          }}
        >
          <div>
            <span
              className="text-meta"
              style={{
                color: "#1e44c2",
                fontWeight: 700,
                letterSpacing: "0.22em",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              [ 02 — PHILOSOPHY & CRAFT ]
            </span>
            <span
              className="text-meta"
              style={{
                color: "var(--muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                display: "block",
              }}
            >
              ENGINEERING × DESIGN
            </span>
          </div>

          <div style={{ maxWidth: "220px" }}>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                letterSpacing: "0.02em",
              }}
            >
              Every line of code is written with intent. Every layout is calibrated for human interaction.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 800,
                lineHeight: 1,
                color: "var(--fg)",
              }}
            >
              02
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              SCROLL TO DISCOVER →
            </span>
          </div>
        </div>

        {/* ─── PANEL 1: "I BUILD" + CRAFT ASTERISK ──────────────────────── */}
        <div
          className="editorial-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            minWidth: "max-content",
          }}
        >
          {/* Decorative SVG 1: Minimalist 8-Point Asterisk */}
          <svg
            ref={asteriskRef}
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "-2rem",
              left: "-1.5rem",
              willChange: "transform",
            }}
            aria-hidden="true"
          >
            <path
              d="M32 4V60M4 32H60M12.2 12.2L51.8 51.8M12.2 51.8L51.8 12.2"
              stroke="#1e44c2"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <span
            className="text-meta"
            style={{
              color: "var(--muted)",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
              paddingLeft: "0.5rem",
            }}
          >
            CORE MANIFESTO
          </span>

          <h2
            className="layer-fast"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(6rem, 13vw, 15rem)",
              fontWeight: 800,
              lineHeight: 0.84,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "var(--fg)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            I BUILD
          </h2>
        </div>

        {/* ─── PANEL 2: "FUNCTIONAL AND AESTHETIC WEBSITES" ─────────────── */}
        <div
          className="editorial-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            minWidth: "max-content",
            paddingLeft: "clamp(1rem, 3vw, 4rem)",
          }}
        >
          {/* Row A: FUNCTIONAL */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4.5rem, 9.5vw, 12rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "var(--fg)",
                whiteSpace: "nowrap",
              }}
            >
              FUNCTIONAL
            </span>
            <span
              className="layer-slow"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1e44c2",
                fontWeight: 700,
                border: "1px solid #1e44c2",
                padding: "0.3rem 0.8rem",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                transform: "translateY(-1.5rem)",
              }}
            >
              [ 01 / UTILITY ]
            </span>
          </div>

          {/* Row B: AND AESTHETIC */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1.5rem, 3vw, 3rem)",
              marginLeft: "clamp(2rem, 5vw, 6rem)",
              marginTop: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 6rem)",
                color: "var(--muted)",
                lineHeight: 1,
              }}
            >
              and
            </span>

            {/* AESTHETIC with outlined typographic treatment */}
            <span
              className="aesthetic-outlined-text"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4.5rem, 9.5vw, 12rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                color: "transparent",
                WebkitTextStroke: "2px var(--fg)",
                position: "relative",
              }}
            >
              AESTHETIC
            </span>
          </div>

          {/* Row C: WEBSITES with subtle blue accent underline */}
          <div
            style={{
              marginTop: "0.75rem",
              marginLeft: "clamp(4rem, 10vw, 12rem)",
              position: "relative",
              width: "fit-content",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(5rem, 10.5vw, 13.5rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "var(--fg)",
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              WEBSITES
            </span>

            {/* Decorative SVG 2: Subtle organic wave ribbon */}
            <svg
              ref={organicWaveRef}
              width="260"
              height="24"
              viewBox="0 0 260 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "0",
                willChange: "transform",
                opacity: 0.7,
              }}
              aria-hidden="true"
            >
              <path
                d="M2 12C45 3 85 21 130 12C175 3 215 21 258 12"
                stroke="#1e44c2"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* ─── PANEL 3: "BLENDING THOUGHTFUL DESIGN WITH PURPOSEFUL DEVELOPMENT" */}
        <div
          className="editorial-panel"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(3rem, 6vw, 7rem)",
            minWidth: "max-content",
            paddingInline: "clamp(2rem, 4vw, 5rem)",
          }}
        >
          {/* Decorative SVG Arrow */}
          <div
            className="layer-fast"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(30, 68, 194, 0.08)",
              border: "1px solid rgba(30, 68, 194, 0.2)",
              flexShrink: 0,
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 18H29M29 18L19 8M29 18L19 28"
                stroke="#1e44c2"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Thoughtful design phrase */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.8vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#444444",
                letterSpacing: "-0.02em",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              blending{" "}
              <span
                style={{
                  color: "var(--fg)",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textDecorationColor: "rgba(30, 68, 194, 0.4)",
                  textUnderlineOffset: "6px",
                }}
              >
                thoughtful design
              </span>
            </p>

            {/* Purposeful development phrase */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1.25rem",
                flexWrap: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.5rem, 2.5vw, 3rem)",
                  color: "var(--muted)",
                }}
              >
                with
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6.2vw, 7.5rem)",
                  fontWeight: 800,
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: "#1e44c2",
                  whiteSpace: "nowrap",
                }}
              >
                PURPOSEFUL DEVELOPMENT
              </span>
            </div>
          </div>
        </div>

        {/* ─── PANEL 4: "TO CREATE DIGITAL EXPERIENCES" + ORBIT RING ───── */}
        <div
          className="editorial-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            minWidth: "max-content",
            paddingInline: "clamp(1rem, 3vw, 4rem)",
          }}
        >
          {/* Decorative SVG 3: Orbit Ring */}
          <svg
            ref={ringRef}
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "-3rem",
              right: "-4rem",
              zIndex: 0,
              opacity: 0.25,
              pointerEvents: "none",
              willChange: "transform",
            }}
            aria-hidden="true"
          >
            <circle cx="110" cy="110" r="100" stroke="#1e44c2" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="110" cy="10" r="6" fill="#1e44c2" />
          </svg>

          <span
            className="layer-slow"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 2.6vw, 3.2rem)",
              color: "var(--muted)",
              marginBottom: "0.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            to create
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(5rem, 11vw, 13.5rem)",
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "var(--fg)",
              margin: 0,
              whiteSpace: "nowrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            DIGITAL
          </h2>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: "clamp(2rem, 5vw, 7rem)",
              marginTop: "0.5rem",
            }}
          >
            <h2
              className="experiences-spotlight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4.5rem, 10vw, 12.5rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "var(--fg)",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              EXPERIENCES
            </h2>
          </div>
        </div>

        {/* ─── PANEL 5: "THAT FEEL AS GOOD AS THEY WORK." (CLIMAX) ──────── */}
        <div
          className="editorial-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "max-content",
            paddingLeft: "clamp(2rem, 4vw, 5rem)",
            paddingRight: "clamp(3rem, 6vw, 8rem)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "#555555",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
              marginBottom: "1rem",
            }}
          >
            that feel as good
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(5rem, 11vw, 13.5rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "var(--fg)",
                whiteSpace: "nowrap",
              }}
            >
              AS THEY WORK
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(5rem, 11vw, 13.5rem)",
                fontWeight: 800,
                lineHeight: 0.88,
                color: "#1e44c2",
              }}
            >
              .
            </span>
          </div>

          {/* Editorial colophon stamp */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              maxWidth: "520px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  display: "block",
                  color: "var(--fg)",
                }}
              >
                THORIQ KHOIR
              </span>
              <span
                className="text-meta"
                style={{
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                }}
              >
                WEB DEVELOPER & INTERFACE CRAFTSMAN
              </span>
            </div>

            <div
              style={{
                height: "28px",
                width: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
              }}
            />

            <span
              className="text-meta"
              style={{
                fontSize: "0.72rem",
                color: "#1e44c2",
                fontWeight: 600,
                letterSpacing: "0.14em",
              }}
            >
              [ 100% RESPONSIVE & HUMAN-CENTERED ]
            </span>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM PROGRESS BAR ─────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "transparent",
          zIndex: 20,
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#1e44c2",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            willChange: "transform",
          }}
        />
      </div>

      <style>{`
        .aesthetic-outlined-text {
          transition: -webkit-text-stroke-color 0.3s ease, color 0.3s ease;
        }
        .aesthetic-outlined-text:hover {
          color: #1e44c2 !important;
          -webkit-text-stroke-color: #1e44c2 !important;
        }
        .experiences-spotlight {
          position: relative;
          display: inline-block;
        }
        .experiences-spotlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 8px;
          width: 100%;
          height: 12px;
          background-color: rgba(30, 68, 194, 0.15);
          z-index: -1;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .self-description-section {
            overflow: visible !important;
            padding-block: 6rem !important;
          }
          .horizontal-track {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            width: 100% !important;
            padding-inline: var(--container-px) !important;
            gap: 4rem !important;
            transform: none !important;
          }
          .editorial-panel {
            min-width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .editorial-panel h2,
          .editorial-panel span {
            white-space: normal !important;
            word-break: break-word !important;
          }
          .layer-fast,
          .layer-slow {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
