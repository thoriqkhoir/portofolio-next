"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  /** Split by "lines" or "words". Default: "lines" */
  splitBy?: "lines" | "words";
  /** Stagger delay between items (seconds). Default: 0.08 */
  stagger?: number;
  /** ScrollTrigger start position. Default: "top 88%" */
  triggerStart?: string;
}

export default function TextReveal({
  children,
  className = "",
  splitBy = "lines",
  stagger = 0.08,
  triggerStart = "top 88%",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Wrap each word/line in a mask div for clip animation
      const text = container.textContent ?? "";
      const parts = splitBy === "words" ? text.split(" ") : text.split("\n");

      container.innerHTML = parts
        .map(
          (part) =>
            `<span class="tr-mask"><span class="tr-inner">${part}${splitBy === "words" ? " " : ""}</span></span>`
        )
        .join(splitBy === "lines" ? "<br/>" : "");

      const inners = container.querySelectorAll<HTMLElement>(".tr-inner");

      gsap.fromTo(
        inners,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: container,
            start: triggerStart,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className} data-text-reveal>
      {children}
    </div>
  );
}
