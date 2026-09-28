"use client";

const EXPERIENCES = [
  {
    period: "2025 — NOW",
    role: "Junior Web Developer",
    company: "Aksara Teknologi Mandiri",
    tags: ["Laravel", "React", "Inertia", "MySQL"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-portfolio">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2 className="text-section-title">EXPERIENCE</h2>
          <span className="text-meta">{EXPERIENCES.length} role{EXPERIENCES.length > 1 ? "s" : ""}</span>
        </div>

        <div>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 0" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "12rem 1fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
                className="exp-row"
              >
                {/* Period */}
                <span className="text-meta" style={{ paddingTop: "0.25rem" }}>
                  {exp.period}
                </span>

                {/* Info */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      lineHeight: 1.05,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {exp.role}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                    {exp.company}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "999px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
