"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem var(--container-px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            letterSpacing: "0.06em",
            color: "var(--fg)",
          }}
        >
          THORIQ
        </span>

        <p className="text-meta">
          © {new Date().getFullYear()} Thoriq Khoir — Built with Next.js
        </p>

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
              className="text-meta"
              style={{
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
