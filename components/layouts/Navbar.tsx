"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const logo = logoRef.current;
    const navLinks = navLinksRef.current;
    const menuBtn = menuBtnRef.current;
    const nav = navRef.current;
    if (!logo || !nav) return;

    const vw = window.innerWidth;

    // Container padding — final resting x position in navbar
    const navPadX = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--container-px")
        .trim()
    ) || 40;

    const smallFontPx = 30; // final navbar logo size (clear and proportional)

    if (!isHomePage) {
      gsap.set(logo, {
        fontSize: `${smallFontPx}px`,
        x: navPadX,
        y: 4,
      });
      gsap.set([navLinks, menuBtn], {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
      });
      nav.classList.add("nav-theme-white");
      gsap.set(nav, {
        background: "rgba(30, 68, 194, 0.4)",
        backdropFilter: "blur(16px) saturate(180%)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)",
      });
      return;
    }

    // ── Step 1: set arbitrary large font, measure it ─────────
    gsap.set(logo, { fontSize: "200px", x: 0, y: 0 });
    const widthAt200 = logo.scrollWidth;

    // ── Step 2: compute font-size (fill ~78% of viewport width) ──
    const largeFontPx = (200 / widthAt200) * vw * 0.78;

    // ── Step 3: measure actual large logo width after font-size set ──
    gsap.set(logo, { fontSize: `${largeFontPx}px` });
    const largeLogoW = logo.scrollWidth;

    // ── Step 4: set initial state — centered horizontally ────
    // Offset from left: 0 (logo position) to center
    const centeredX = (vw - largeLogoW) / 2;
    const initY = 8; // small top offset

    gsap.set(logo, {
      fontSize: `${largeFontPx}px`,
      x: centeredX,
      y: initY,
      transformOrigin: "left top",
    });

    // Hide nav links initially
    gsap.set([navLinks, menuBtn], {
      opacity: 0,
      y: -6,
      pointerEvents: "none",
    });

    // ── ScrollTrigger: scrub logo large → small ───────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: () => `+=${window.innerHeight * 0.75}`,
        scrub: 0.5,
        onUpdate: (self) => {
          if (self.progress > 0.55) {
            gsap.to([navLinks, menuBtn], {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
              pointerEvents: "auto",
              overwrite: "auto",
            });
            gsap.to(nav, {
              background: "rgba(244, 243, 239, 0.35)",
              backdropFilter: "blur(16px) saturate(180%)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)",
              duration: 0.35,
              overwrite: "auto",
            });
          } else {
            gsap.to([navLinks, menuBtn], {
              opacity: 0,
              y: -6,
              duration: 0.25,
              ease: "power2.in",
              pointerEvents: "none",
              overwrite: "auto",
            });
            gsap.to(nav, {
              background: "transparent",
              backdropFilter: "none",
              boxShadow: "none",
              duration: 0.25,
              overwrite: "auto",
            });
          }
        },
      },
    });

    tl.to(logo, {
      x: navPadX,   // land at left side of navbar with padding
      y: 4,
      fontSize: `${smallFontPx}px`,
      ease: "none",
    });

    // ── ScrollTrigger: detect section #work and switch navbar to white ──
    const workST = ScrollTrigger.create({
      trigger: "#work",
      start: "top 70px",
      end: "bottom 70px",
      onEnter: () => {
        nav.classList.add("nav-theme-white");
      },
      onLeave: () => {
        nav.classList.remove("nav-theme-white");
      },
      onEnterBack: () => {
        nav.classList.add("nav-theme-white");
      },
      onLeaveBack: () => {
        nav.classList.remove("nav-theme-white");
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      workST.kill();
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          /* no horizontal padding — logo starts at x=0 */
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          border: "none",
          background: "transparent",
          pointerEvents: "none",          /* let clicks pass through to logo */
        }}
        aria-label="Main navigation"
      >
        {/* Morphing logo — no left padding so it can start at x=0 full-bleed */}
        <a
          ref={logoRef}
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 0.9,
            display: "block",
            willChange: "transform, font-size",
            flexShrink: 0,
            position: "absolute",
            left: 0,
            top: "1.5rem",
            pointerEvents: "auto",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
          aria-label="Mochamad Thoriq Khoir — Home"
        >
          Mochamad Thoriq Khoir
        </a>

        {/* Desktop nav links — right side */}
        <ul
          ref={navLinksRef}
          role="list"
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            paddingRight: "var(--container-px)",
            pointerEvents: "auto",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Magnetic strength={0.3}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    transition: "color 0.25s ease",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                  data-magnetic
                >
                  {link.label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          ref={menuBtnRef}
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            color: "var(--fg)",
            fontSize: "0.78rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
            pointerEvents: "auto",
            paddingRight: "var(--container-px)",
          }}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "var(--container-px)",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.5s cubic-bezier(0.76,0,0.24,1)",
        }}
        aria-hidden={!menuOpen}
      >
        <ul role="list" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 12vw, 6rem)",
                  lineHeight: 1,
                  color: "var(--fg)",
                  display: "block",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "3rem", color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
          thoriqkhoir537@gmail.com
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }

        /* Smooth transition for navbar text & background */
        nav a, nav button {
          transition: color 0.35s ease !important;
        }

        /* Active theme when viewport is inside section #work */
        nav.nav-theme-white {
          background: rgba(30, 68, 194, 0.4) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15) !important;
        }

        nav.nav-theme-white a[href="#hero"] {
          color: #ffffff !important;
        }

        nav.nav-theme-white .desktop-nav a {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        nav.nav-theme-white .desktop-nav a:hover {
          color: #ffffff !important;
        }

        nav.nav-theme-white .mobile-menu-btn {
          color: #ffffff !important;
        }
      `}</style>
    </>
  );
}
