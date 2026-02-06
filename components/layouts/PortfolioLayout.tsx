"use client";

import { PropsWithChildren, useState } from "react";
import GooeyNav from "@/components/bits/GooeyNav";
import GlassSurface from "@/components/bits/GlassSurface";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="bg-transparent text-foreground">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
        <div
          className={`pointer-events-auto backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl shadow-lg px-6 py-2 flex transition-transform duration-150 ease-out ${
            isPressed ? "translate-y-2" : ""
          }`}
          style={{ maxWidth: "98vw" }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
        >
          <GooeyNav
            items={navItems}
            initialActiveIndex={0}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            animationTime={600}
            timeVariance={300}
            colors={[4, 2, 4, 2, 4, 2, 1, 3]}
          />
        </div>
      </div>

      {children}
    </div>
  );
}
