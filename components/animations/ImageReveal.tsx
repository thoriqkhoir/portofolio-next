"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  triggerStart?: string;
  style?: React.CSSProperties;
}

export default function ImageReveal({
  src,
  alt,
  className = "",
  triggerStart = "top 85%",
  style,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const img = imageRef.current;
      if (!container || !img) return;

      // Clip reveal from bottom, image scales down from 1.15
      gsap.fromTo(
        container,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: container, start: triggerStart },
        }
      );

      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: container, start: triggerStart },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ clipPath: "inset(100% 0 0 0)", ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
