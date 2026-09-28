"use client";

import ImageReveal from "@/components/animations/ImageReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ borderTop: "none" }}
    >
      <div className="container-portfolio">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span className="text-meta">[ ABOUT ]</span>
          <span className="text-meta" style={{ color: "var(--muted)" }}>
            2025 — NOW
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Photo */}
          <ImageReveal
            src="/assets/images/photo2.webp"
            alt="Thoriq Khoir"
            className="about-image"
            style={{ width: "100%", aspectRatio: "3/4", borderRadius: "4px" }}
          />

          {/* Text */}
          <div style={{ paddingTop: "1rem" }}>
            <h2 className="text-section-title" style={{ marginBottom: "2rem" }}>
              ABOUT
            </h2>

            <p className="text-body-lg" style={{ color: "var(--muted)", marginBottom: "2rem", maxWidth: "42ch" }}>
              I&apos;m Thoriq, a web developer focused on building modern web
              applications and digital experiences with a strong attention to
              functionality and detail.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: "3rem",
              }}
              className="about-stats"
            >
              {[
                { value: "1+", label: "Years experience" },
                { value: "10+", label: "Projects shipped" },
                { value: "IDN", label: "Based in" },
                { value: "∞", label: "Love for clean code" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      lineHeight: 1,
                      color: "var(--fg)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-meta" style={{ marginTop: "0.4rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/thoriqkhoir"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--fg)",
                borderBottom: "1px solid var(--muted)",
                paddingBottom: "0.25rem",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--muted)";
              }}
            >
              View GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .about-image {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-image {
            max-height: 60vw !important;
          }
        }
        @media (max-width: 480px) {
          .about-stats {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}