"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const shapeSvgRef = useRef<SVGSVGElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const whiteTextLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const shapeSvg = shapeSvgRef.current;
      const overlay = overlayRef.current;
      const textContainer = textContainerRef.current;
      const whiteTextLayer = whiteTextLayerRef.current;

      if (!container || !shapeSvg || !whiteTextLayer) return;

      // Master scroll-driven scrub timeline synced with Lenis smooth scrolling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=190%", // Generous scroll distance for fluid scrubbing
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Organic SVG shape: starts as a subtle organic corner peeking in top-left,
      // then sweeps diagonally across viewport until covering the screen.
      tl.fromTo(
        shapeSvg,
        {
          scale: 0.15,
          rotation: -5,
          x: -60,
          y: -60,
          transformOrigin: "0% 0%",
        },
        {
          scale: 4.4,
          rotation: 6,
          x: 40,
          y: 30,
          transformOrigin: "0% 0%",
          ease: "power1.inOut",
        },
        0
      );

      // 2. Dual-layer text reveal:
      // Perfectly calibrated diagonal mask in sync with the blue shape's leading edge
      const maskProxy = { progress: -15 };
      tl.fromTo(
        maskProxy,
        { progress: -15 },
        {
          progress: 120,
          ease: "power1.inOut",
          onUpdate: () => {
            if (whiteTextLayer) {
              const val = maskProxy.progress;
              const grad = `linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${val}%, rgba(0,0,0,0) ${val + 12}%, rgba(0,0,0,0) 100%)`;
              whiteTextLayer.style.webkitMaskImage = grad;
              whiteTextLayer.style.maskImage = grad;
            }
          },
        },
        0
      );

      // 3. Seamless full-bleed blue background layer fade-in near completion
      if (overlay) {
        tl.to(
          overlay,
          {
            opacity: 1,
            duration: 0.16,
            ease: "power1.in",
          },
          0.82
        );
      }

      // 4. Elegant text exit as the section fully transforms to deep blue
      if (textContainer) {
        tl.to(
          textContainer,
          {
            y: -35,
            opacity: 0,
            duration: 0.15,
            ease: "power1.in",
          },
          0.85
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="intro"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "none",
      }}
    >
      {/* ─── SCROLL-DRIVEN ORGANIC SVG SHAPE LAYER (Z-INDEX 1) ─── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <svg
          ref={shapeSvgRef}
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vmax",
            height: "100vmax",
            willChange: "transform",
            transformOrigin: "0% 0%",
          }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="organicBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2558e8" />
              <stop offset="45%" stopColor="#1e44c2" />
              <stop offset="100%" stopColor="#1e44c2" />
            </linearGradient>
            <filter id="shapeShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="8" dy="16" stdDeviation="28" floodColor="#0d2466" floodOpacity="0.22" />
            </filter>
          </defs>
          <path
            d="M 0,0 
               L 440,0 
               C 530,0 620,40 680,95 
               C 740,150 780,210 835,225 
               L 925,145 
               C 960,115 1000,135 985,185 
               L 895,345 
               C 850,420 795,455 840,520 
               C 885,585 1015,615 1110,670 
               L 1195,715 
               C 1235,735 1225,780 1185,795 
               L 1015,835 
               C 930,865 870,925 840,1010 
               C 810,1095 725,1160 595,1150 
               C 470,1140 380,1075 300,1050 
               C 215,1025 140,1060 70,1105 
               L 0,1145 
               Z"
            fill="url(#organicBlueGrad)"
            filter="url(#shapeShadow)"
          />
        </svg>

        {/* Safety overlay to ensure 100% solid matching tone prior to unpinning */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#1e44c2",
            opacity: 0,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ─── FOREGROUND TEXT LAYERS (Z-INDEX 10) ─── */}
      <div
        ref={textContainerRef}
        className="container-portfolio"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingInline: "1.5rem",
          willChange: "transform, opacity",
        }}
      >
        {/* Layer 1: Dark text on light background */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h2
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.15em",
              marginBottom: "1.75rem",
            }}
          >
            <span
              className="text-display"
              style={{
                color: "var(--fg)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
              }}
            >
              THOUGHTFUL DETAILS.
            </span>
            <span
              className="text-display"
              style={{
                color: "var(--fg)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
              }}
            >
              GREAT IMPACT.
            </span>
          </h2>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.55rem 1.6rem",
              borderRadius: "999px",
              border: "1.5px solid #1e44c2",
              color: "#1e44c2",
              fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            [ SELECTED WORK ]
          </div>

          <p
            style={{
              marginTop: "2rem",
              maxWidth: "46ch",
              fontSize: "clamp(0.95rem, 1.25vw, 1.15rem)",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            I build digital experiences and web applications with a focus on functionality and detail.
          </p>
        </div>

        {/* Layer 2: White text on blue background, revealed by dynamic diagonal mask */}
        <div
          ref={whiteTextLayerRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            pointerEvents: "none",
            WebkitMaskImage: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) -15%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) -15%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <h2
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.15em",
              marginBottom: "1.75rem",
            }}
          >
            <span
              className="text-display"
              style={{
                color: "#ffffff",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
              }}
            >
              THOUGHTFUL DETAILS.
            </span>
            <span
              className="text-display"
              style={{
                color: "#ffffff",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
              }}
            >
              GREAT IMPACT.
            </span>
          </h2>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.55rem 1.6rem",
              borderRadius: "999px",
              border: "1.5px solid rgba(255, 255, 255, 0.45)",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              backdropFilter: "blur(6px)",
            }}
          >
            [ SELECTED WORK ]
          </div>

          <p
            style={{
              marginTop: "2rem",
              maxWidth: "46ch",
              fontSize: "clamp(0.95rem, 1.25vw, 1.15rem)",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
            }}
          >
            I build digital experiences and web applications with a focus on functionality and detail.
          </p>
        </div>
      </div>
    </section>
  );
}
