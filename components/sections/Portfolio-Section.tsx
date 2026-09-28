"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ALL_PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

// Show only first 5 projects on the Home page
const FEATURED_PROJECTS = ALL_PROJECTS.slice(0, 5);

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      projectRefs.current.forEach((item) => {
        if (!item) return;
        const mockup = item.querySelector(".mockup-frame");
        if (mockup) {
          gsap.fromTo(
            mockup,
            { y: 40, opacity: 0.8 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              },
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        backgroundColor: "#1e44c2",
        color: "#ffffff",
        borderTop: "none",
        position: "relative",
        zIndex: 10,
        paddingTop: "4rem",
        paddingBottom: "8rem",
      }}
    >
      {/* Section Sub-header */}
      <div className="container-portfolio" style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: "1.5rem",
          }}
        >
          <span
            className="text-meta"
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              letterSpacing: "0.2em",
            }}
          >
            [ 01 — SELECTED WORK ]
          </span>
          <span
            className="text-meta"
            style={{
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            5 OF {ALL_PROJECTS.length} FEATURED CASE STUDIES
          </span>
        </div>
      </div>

      {/* Project list: 5 featured projects */}
      <div className="projects-container">
        {FEATURED_PROJECTS.map((project, i) => (
          <div
            key={project.num}
            ref={(el) => { if (el) projectRefs.current[i] = el; }}
            className="project-item-block"
            style={{
              marginBottom: i === FEATURED_PROJECTS.length - 1 ? "0" : "6rem",
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
                    <span style={{ fontSize: "1.1rem", transition: "transform 0.25s ease" }} className="arrow-icon">
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
                      boxShadow: "0 25px 60px -15px rgba(10, 25, 70, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.08)",
                      backgroundColor: "#f5f5f7",
                      transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease",
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
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f56" }} />
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27c93f" }} />
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

      {/* ─── "SEE MORE" TRIGGER BUTTON TO /work PAGE ─── */}
      <div
        className="container-portfolio"
        style={{
          marginTop: "6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1.25rem",
        }}
      >
        <Link
          href="/work"
          className="see-more-work-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem 3rem",
            borderRadius: "999px",
            border: "1.5px solid rgba(255, 255, 255, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "#ffffff",
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textDecoration: "none",
            backdropFilter: "blur(12px)",
            transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          <span>SEE MORE PROJECTS ({ALL_PROJECTS.length})</span>
          <span style={{ fontSize: "1.3rem", transition: "transform 0.3s ease" }} className="see-more-arrow">
            →
          </span>
        </Link>
        <span
          className="text-meta"
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: "0.15em",
            fontSize: "0.8rem",
          }}
        >
          EXPLORE COMPLETE ARCHIVE OF ALL 12 DIGITAL WORKS
        </span>
      </div>

      <style>{`
        .see-more-work-btn:hover {
          background-color: #ffffff !important;
          color: #1e44c2 !important;
          border-color: #ffffff !important;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25) !important;
        }
        .see-more-work-btn:hover .see-more-arrow {
          transform: translateX(6px);
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
          .project-body-grid > div:first-child {
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}