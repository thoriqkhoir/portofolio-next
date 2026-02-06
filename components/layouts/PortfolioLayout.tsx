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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="bg-transparent text-foreground">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
        <div
          className={`pointer-events-auto backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl shadow-lg px-4 sm:px-6 py-2 flex items-center gap-3 transition-transform duration-150 ease-out ${
            isPressed ? "translate-y-2" : ""
          }`}
          style={{ maxWidth: "98vw" }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
        >
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90"
            onClick={() => setIsMobileOpen(prev => !prev)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? "Close" : "Menu"}
          </button>

          <div className="hidden sm:block">
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
      </div>

      {isMobileOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92vw] max-w-sm pointer-events-none">
          <div className="pointer-events-auto rounded-2xl border border-white/20 bg-black/70 backdrop-blur-xl p-4 shadow-lg">
            <nav className="flex flex-col gap-2 text-sm text-white/90">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
