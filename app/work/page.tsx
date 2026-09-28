"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import { ALL_PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      projectRefs.current.forEach((item) => {
        if (!item) return;
        const mockup = item.querySelector(".mockup-frame");
        if (mockup) {
          gsap.fromTo(
            mockup,
            { y: 35, opacity: 0.85 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <PortfolioLayout>
      <div
        ref={containerRef}
        style={{
          backgroundColor: "#1e44c2",
          color: "#ffffff",
          minHeight: "100vh",
          paddingTop: "7rem",
          paddingBottom: "8rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Work Header Section */}
        <div className="container-portfolio" style={{ marginBottom: "5rem" }}>
          {/* Back link */}
          <div style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/"
              className="back-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.82rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                textDecoration: "none",
                padding: "0.5rem 1.25rem 0.5rem 0.75rem",
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.25s ease",
              }}
            >
              <span className="back-arrow" style={{ transition: "transform 0.25s ease" }}>
                ←
              </span>
              <span>BACK TO HOME</span>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "2rem",
              borderBottom: "1.5px solid rgba(255, 255, 255, 0.3)",
              paddingBottom: "2.5rem",
            }}
          >
            <div>
              <span
                className="text-meta"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  letterSpacing: "0.2em",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                [ ARCHIVE / SELECTED WORKS ]
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                }}
              >
                ALL PROJECTS
              </h1>
            </div>

            <div style={{ maxWidth: "420px" }}>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.8)",
                  margin: 0,
                }}
              >
                Complete collection of all 12 digital web applications, fintech systems,
                education platforms, and government portals developed with Laravel, React, Next.js, and modern tech stacks.
              </p>
            </div>
          </div>
        </div>

        {/* Project List: All 12 Projects */}
        <div className="projects-container">
          {ALL_PROJECTS.map((project, i) => (
            <div
              key={project.num}
              ref={(el) => {
                if (el) projectRefs.current[i] = el;
              }}
              className="project-item-block"
              style={{
                marginBottom: i === ALL_PROJECTS.length - 1 ? "0" : "6.5rem",
                position: "relative",
              }}
            >
              {/* Sticky Header Bar across full width */}
              <div
                className="project-sticky-bar"
                style={{
                  position: "sticky",
                  top: "70px",
                  zIndex: 20,
                  backgroundColor: "#1e44c2",
                  borderTop: "1.5px solid rgba(255, 255, 255, 0.3)",
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.3)",
                  padding: "1.1rem 0",
                }}
              >
                <div
                  className="container-portfolio"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "#ffffff",
                    }}
                  >
                    [{project.num}]
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                      color: "#ffffff",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Area: Left Blue Description Column + Right White Canvas Showcase */}
              <div className="container-portfolio" style={{ marginTop: "2.5rem" }}>
                <div
                  className="project-body-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "32% 68%",
                    gap: "3rem",
                    alignItems: "stretch",
                    minHeight: "520px",
                  }}
                >
                  {/* Left Column: Solid Blue Background with Description & Links */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    <span
                      className="text-meta"
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        letterSpacing: "0.14em",
                        marginBottom: "1rem",
                        display: "block",
                      }}
                    >
                      {project.category}
                    </span>

                    <p
                      style={{
                        fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                        lineHeight: 1.65,
                        color: "rgba(255, 255, 255, 0.85)",
                        maxWidth: "34ch",
                        marginBottom: "1.75rem",
                      }}
                    >
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.45rem",
                        marginBottom: "2.25rem",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.68rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(255, 255, 255, 0.9)",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "999px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Link Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        borderBottom: "1.5px solid rgba(255, 255, 255, 0.5)",
                        paddingBottom: "0.35rem",
                        width: "fit-content",
                        transition: "border-color 0.25s ease, transform 0.25s ease",
                      }}
                    >
                      <span>VISIT PROJECT</span>
                      <span
                        style={{ fontSize: "1.1rem", transition: "transform 0.25s ease" }}
                        className="arrow-icon"
                      >
                        ↗
                      </span>
                    </a>
                  </div>

                  {/* Right Column: Clean White Canvas with Floating Browser Mockup */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-showcase-canvas"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "4px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "clamp(1.5rem, 3.5vw, 3.25rem)",
                      position: "relative",
                      boxShadow: "0 25px 50px -15px rgba(0, 0, 0, 0.35)",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {/* Mockup Frame */}
                    <div
                      className="mockup-frame"
                      style={{
                        width: "100%",
                        maxWidth: "760px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow:
                          "0 25px 60px -15px rgba(10, 25, 70, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.08)",
                        backgroundColor: "#f5f5f7",
                        transition:
                          "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease",
                      }}
                    >
                      {/* Browser Header Bar */}
                      <div
                        style={{
                          height: "36px",
                          backgroundColor: "#ebebef",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingInline: "1rem",
                        }}
                      >
                        {/* macOS Window Dots */}
                        <div style={{ display: "flex", gap: "6px" }}>
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "#ff5f56",
                            }}
                          />
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "#ffbd2e",
                            }}
                          />
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "#27c93f",
                            }}
                          />
                        </div>

                        {/* URL Pill */}
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "#6e6e73",
                            backgroundColor: "#ffffff",
                            padding: "2px 16px",
                            borderRadius: "6px",
                            border: "1px solid rgba(0, 0, 0, 0.06)",
                            fontFamily: "monospace",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </div>

                        <div style={{ width: "42px" }} />
                      </div>

                      {/* Screenshot Preview Image */}
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "16 / 10",
                          overflow: "hidden",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} Preview`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top center",
                            display: "block",
                            transition: "transform 0.5s ease",
                          }}
                          className="mockup-img"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Return to Top / Home */}
        <div
          className="container-portfolio"
          style={{
            marginTop: "7rem",
            paddingTop: "4rem",
            borderTop: "1.5px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <span
              className="text-meta"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              HAVE A PROJECT IN MIND?
            </span>
            <Link
              href="/#contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
              className="work-contact-link"
            >
              <span>LET&apos;S WORK TOGETHER</span>
              <span className="arrow">↗</span>
            </Link>
          </div>

          <Link
            href="/"
            className="back-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2rem",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1.5px solid rgba(255, 255, 255, 0.4)",
              color: "#ffffff",
              fontSize: "0.85rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <span>RETURN TO HOME</span>
            <span>↑</span>
          </Link>
        </div>

        {/* Work Page Footer */}
        <div
          className="container-portfolio"
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              letterSpacing: "0.06em",
              color: "#ffffff",
            }}
          >
            THORIQ
          </span>
          <span>© {new Date().getFullYear()} Thoriq Khoir — Web Developer</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "GitHub", url: "https://github.com/thoriqkhoir" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/thoriqkhoir" },
              { label: "Email", url: "mailto:thoriqkhoir537@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.65)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          .back-btn:hover {
            background-color: #ffffff !important;
            color: #1e44c2 !important;
            border-color: #ffffff !important;
            transform: translateX(-4px);
          }
          .back-btn:hover .back-arrow {
            transform: translateX(-3px);
          }
          .work-contact-link:hover .arrow {
            transform: translate(4px, -4px);
          }
          .work-contact-link .arrow {
            transition: transform 0.25s ease;
          }
          .project-showcase-canvas:hover .mockup-frame {
            transform: translateY(-8px) scale(1.015);
            box-shadow: 0 35px 75px -15px rgba(10, 25, 70, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.12);
          }
          .project-showcase-canvas:hover .mockup-img {
            transform: scale(1.02);
          }
          .project-live-btn:hover {
            border-color: #ffffff !important;
            transform: translateX(3px);
          }
          .project-live-btn:hover .arrow-icon {
            transform: translate(2px, -2px);
          }
          @media (max-width: 900px) {
            .project-body-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </PortfolioLayout>
  );
}
